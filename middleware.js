export default function middleware(req) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip');
  console.log(JSON.stringify({
    ip,
    path: new URL(req.url).pathname,
    ua: req.headers.get('user-agent'),
    country: req.headers.get('x-vercel-ip-country'),
    city: decodeURIComponent(req.headers.get('x-vercel-ip-city') || ''),
    time: new Date().toISOString()
  }));
}

export const config = { matcher: '/' };
