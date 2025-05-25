import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LIBRARY_PATH = path.resolve(process.cwd(), 'Library');
const SUPPORTED_EXTENSIONS = ['.pdf', '.epub', '.md', '.txt', '.docx'];

export async function GET() {
  try {
    const files = await fs.promises.readdir(LIBRARY_PATH, { encoding: 'utf8' });
    const books = files
      .filter(file => SUPPORTED_EXTENSIONS.includes(path.extname(file).toLowerCase()))
      .map(file => ({
        name: file,
        path: `/Library/${encodeURIComponent(file)}`
      }));
    return NextResponse.json({ books });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read library', details: error }, { status: 500 });
  }
} 