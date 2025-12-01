import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(request: Request, context: any) {
  const params = context?.params || (await (context?.params ?? {}))
  const id = Number(params?.id)
  if (!Number.isFinite(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  try {
  const body = await request.json()
  const { title, content, alternatives = [], imageId, correct } = body

    if (!title || !content || !Array.isArray(alternatives) || alternatives.length < 2) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 422 })
    }

    await prisma.question.update({
      where: { id },
      data: {
        title,
        content,
        ...(imageId ? { imageId: Number(imageId) } : { imageId: null }),
      },
    })

    await prisma.alternative.deleteMany({ where: { questionsId: id } })
    const correctIndex = correct !== undefined && correct !== null ? Number(correct) : -1

    await prisma.alternative.createMany({
      data: alternatives.map((alt: any, idx: number) => ({
        content: alt.content,
        is_correct: idx === correctIndex,
        questionsId: id,
      })),
    })

    const result = await prisma.question.findUnique({ where: { id }, include: { alternatives: true, image: true } })
    return NextResponse.json(result)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error updating question' }, { status: 500 })
  }
}

export async function DELETE(request: Request, context: any) {
  const params = context?.params || (await (context?.params ?? {}))
  const id = Number(params?.id)
  if (!Number.isFinite(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  try {
    await prisma.alternative.deleteMany({ where: { questionsId: id } })
    await prisma.question.delete({ where: { id } })
    return NextResponse.json({ message: 'Deleted' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error deleting question' }, { status: 500 })
  }
}
