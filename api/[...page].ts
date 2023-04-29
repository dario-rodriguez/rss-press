export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const reponse = await fetch('https://www.postnl.nl/rss/press.rss?locale=nl-nl').then(reponse => reponse.body)
  return new Response(
    reponse
  )
}