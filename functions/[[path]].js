export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Liste des extensions de fichiers statiques
  const staticExtensions =
    /\.(png|jpg|jpeg|gif|svg|ico|css|js|json|woff|woff2|ttf|eot|pdf|xml|txt|webp|avif)$/i;

  // Si c'est un fichier statique, le servir normalement
  if (staticExtensions.test(pathname)) {
    return context.env.ASSETS.fetch(context.request);
  }

  // Pour les routes de documentation, servir index.html
  try {
    const response = await context.env.ASSETS.fetch(context.request);

    // Si la ressource existe, la retourner
    if (response.status === 200) {
      return response;
    }
  } catch (e) {
    // Ignorer l'erreur et continuer
  }

  // Sinon, servir index.html pour le routing SPA
  const indexUrl = new URL("/", url.origin);
  const indexResponse = await context.env.ASSETS.fetch(
    new Request(indexUrl.toString())
  );

  return new Response(indexResponse.body, {
    status: 200,
    headers: {
      ...Object.fromEntries(indexResponse.headers.entries()),
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
