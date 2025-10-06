import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const exercises = await prisma.question.findMany({ include: { image: true } })
    return NextResponse.json(exercises)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error fetching admin exercises' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let title = ''
    let content = ''
  let alternatives: any[] = []
  let imageId: number | undefined
  let correct: any = undefined

    if (contentType.includes('multipart/form-data')) {
      const form = await request.formData()
      title = String(form.get('title') || '')
      content = String(form.get('content') || '')

      // collect alternatives like alternatives[0][content]
      for (const key of form.keys()) {
        const m = key.match(/^alternatives\[(\d+)\]\[content\]$/)
        if (m) {
          const idx = Number(m[1])
          alternatives[idx] = { content: String(form.get(key) || '') }
        }
      }
      // correct radio value
      correct = form.get('correct')

      // save uploaded image (if any) to public/uploads and create image row
      const file = form.get('image')
      if (file && (file as Blob).size) {
        const blob = file as Blob
        const buffer = Buffer.from(await blob.arrayBuffer())
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
        fs.mkdirSync(uploadsDir, { recursive: true })
        const filename = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
        const ext = '.png' // could attempt to detect from blob.type
        const filepath = path.join(uploadsDir, filename + ext)
        fs.writeFileSync(filepath, buffer)
        const image = await prisma.image.create({
          data: { image: buffer, name: filename + ext, created_at: new Date() },
        })
        imageId = image.id
      }
    } else {
      const body = await request.json()
      title = body.title
      content = body.content
      alternatives = body.alternatives || []
      imageId = body.imageId
      correct = body.correct
    }

    if (!title || !content || !Array.isArray(alternatives) || alternatives.length < 2) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 422 })
    }

    const correctIndex = correct !== undefined && correct !== null ? Number(correct) : -1

    const created = await prisma.question.create({
      data: {
        title,
        content,
        ...(imageId ? { imageId: Number(imageId) } : {}),
        alternatives: {
          create: alternatives.map((alt: any, idx: number) => ({
            content: alt.content,
            is_correct: idx === correctIndex,
          })),
        },
      },
      include: { alternatives: true, image: true },
    })

    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    console.error('admin exercises create error:', err)
    return NextResponse.json({ error: 'Error creating question' }, { status: 500 })
  }
}
