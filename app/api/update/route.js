// app/api/update/route.js
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    return new Response('OK', { status: 200 });
  } catch (err) {
    return new Response('Error: ' + err.message, { status: 500 });
  }
}
