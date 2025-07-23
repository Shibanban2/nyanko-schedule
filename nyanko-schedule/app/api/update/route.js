// app/api/update/route.js
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  // 認証チェック
  const token = request.headers.get('Authorization');
  const secret = process.env.ryonyanko615697F;
  if (token !== `Bearer ${secret}`) {
    return new Response(JSON.stringify({ error: '認証エラー' }), { status: 401 });
  }

  // リクエストボディ取得
  const body = await request.json();

  // 保存先（publicディレクトリに保存するのがおすすめ）
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  try {
    await writeFile(filePath, JSON.stringify(body, null, 2), 'utf-8');
    return new Response('更新完了', { status: 200 });
  } catch (e) {
    return new Response(`書き込みエラー: ${e.message}`, { status: 500 });
  }
}
