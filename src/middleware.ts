import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cek environment variable MAINTENANCE_MODE
  if (process.env.MAINTENANCE_MODE === 'true') {
    // Jika aktif, rewrite semua request ke halaman maintenance
    // kecuali untuk halaman maintenance itu sendiri agar tidak terjadi loop
    if (request.nextUrl.pathname !== '/maintenance') {
      const url = request.nextUrl.clone();
      url.pathname = '/maintenance';
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ini akan menjalankan middleware di semua path KECUALI:
  // - /api/... (API routes)
  // - /_next/static/... (file statis Next.js)
  // - /_next/image/... (file optimasi gambar)
  // - /favicon.ico (file favicon)
  // - Semua path yang mengandung titik (misal: .svg, .png)
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
