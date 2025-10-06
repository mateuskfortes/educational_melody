import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request, context: any) {
  const params = context?.params || (await (context?.params ?? {}))
  const id = Number(params?.id)
  if (!Number.isFinite(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  try {
    const exercise = await prisma.question.findUnique({
      where: { id },
      include: { image: true, alternatives: true },
    })
    if (!exercise) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(exercise)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error fetching exercise' }, { status: 500 })
  }
}

export async function POST(request: Request, context: any) {
  const params = context?.params || (await (context?.params ?? {}))
  const id = Number(params?.id)
  if (!Number.isFinite(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  try {
    const contentType = request.headers.get('content-type') || ''
    let choice: any = null
    if (contentType.includes('application/json')) {
      const body = await request.json()
      choice = body.choice
    } else {
      const form = await request.formData()
      choice = form.get('choice')
    }

    const alternatives = await prisma.alternative.findMany({ where: { questionsId: id }, orderBy: { id: 'asc' } })
    const selectedIdx = Number(choice)
    const selected = alternatives[selectedIdx]
    if (!selected) return NextResponse.json({ message: 'Escolha inválida' })
    const correct = !!selected.is_correct
    return NextResponse.json({ correct })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error processing answer' }, { status: 500 })
  }
}
