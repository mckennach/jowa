import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  draftMode().disable();
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/`, { status: 307 });
}