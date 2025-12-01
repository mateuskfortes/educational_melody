import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const exercises = await prisma.question.findMany({ include: { image: true } })
    return NextResponse.json(exercises)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Error fetching exercises' }, { status: 500 })
  }
}
