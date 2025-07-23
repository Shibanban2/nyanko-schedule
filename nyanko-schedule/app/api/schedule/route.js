// app/api/schedule/route.js
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'schedule.json');
  try {
    const file = await readFile(filePath, 'utf-8');
    const json = JSON.parse(file);
    return NextResponse.json(json);
  } catch (e) {
    return NextResponse.json({ error: 'ファイル読み込み失敗' }, { status: 500 });
  }
}

