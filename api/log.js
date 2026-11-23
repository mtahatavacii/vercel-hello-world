export async function POST(request) {
  let data = {};
  try { data = JSON.parse(await request.text()); } catch {}
  console.log(JSON.stringify({
    type: 'client',
    ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim(),
    ...data,
    time: new Date().toISOString()
  }));
  return new Response(null, { status: 204 });
}
