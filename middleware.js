export default function middleware(req) {
  const h = (k) => req.headers.get(k);
  const dec = (k) => decodeURIComponent(h(k) || '');
  console.log(JSON.stringify({
    type: 'visit',
    ip: h('x-forwarded-for')?.split(',')[0]?.trim() || h('x-real-ip'),
    path: new URL(req.url).pathname,
    ua: h('user-agent'),
    country: h('x-vercel-ip-country'),
    region: h('x-vercel-ip-country-region'),
    city: dec('x-vercel-ip-city'),
    postal: h('x-vercel-ip-postal-code'),
    lat: h('x-vercel-ip-latitude'),
    lon: h('x-vercel-ip-longitude'),
    tz: h('x-vercel-ip-timezone'),
    referer: h('referer'),
    lang: h('accept-language'),
    time: new Date().toISOString()
  }));
}

export const config = { matcher: '/' };
