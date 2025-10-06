import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import fs from 'fs'
import path from 'path'

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads')
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true })

export async function GET(request: Request, context: any) {
  const params = context?.params || (await (context?.params ?? {}))
  const id = Number(params?.id)
  if (!Number.isFinite(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  try {
    const exercise = await prisma.question.findUnique({ where: { id }, include: { image: true, alternatives: true } })
    if (!exercise) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(exercise)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error fetching' }, { status: 500 })
  }
}

export async function POST(request: Request, context: any) {
  const params = context?.params || (await (context?.params ?? {}))
  const id = Number(params?.id)
  if (!Number.isFinite(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  try {
    const form = await request.formData()
    const title = String(form.get('title') || '')
    const content = String(form.get('content') || '')
    const alternatives: any[] = []
    for (const key of form.keys()) {
      const m = key.match(/^alternatives\[(\d+)\]\[content\]$/)
      if (m) {
        const idx = Number(m[1])
        alternatives[idx] = { content: String(form.get(key) || '') }
      }
    }
  const correct = form.get('correct')

    if (!title || !content || alternatives.length < 2) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 422 })
    }

    // handle optional image
    let imageId: number | undefined
    const file = form.get('image') as unknown as File | null
    if (file && file.size && file instanceof Blob) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
      const ext = (file as any).name ? path.extname((file as any).name) : ''
      const filename = unique + ext
      fs.writeFileSync(path.join(UPLOAD_DIR, filename), buffer)
      const image = await prisma.image.create({ data: { image: buffer, name: filename, created_at: new Date() } })
      imageId = image.id
    }

    await prisma.question.update({ where: { id }, data: { title, content, ...(imageId ? { imageId } : {}) } })
    await prisma.alternative.deleteMany({ where: { questionsId: id } })
    const correctIndex = correct !== undefined && correct !== null ? Number(correct) : -1
    await prisma.alternative.createMany({
      data: alternatives.map((alt, idx) => ({ content: alt.content, is_correct: idx === correctIndex, questionsId: id })),
    })

    return NextResponse.redirect(new URL('/admin/exercises', request.url))
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error updating exercise' }, { status: 500 })
  }
}
