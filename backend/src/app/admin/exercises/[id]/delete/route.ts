import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request, context: any) {
  const params = context?.params || (await (context?.params ?? {}))
  const id = Number(params?.id)
  if (!Number.isFinite(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  try {
    await prisma.alternative.deleteMany({ where: { questionsId: id } })
    await prisma.question.delete({ where: { id } })
    return NextResponse.redirect(new URL('/admin/exercises', request.url))
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error deleting exercise' }, { status: 500 })
  }
}
