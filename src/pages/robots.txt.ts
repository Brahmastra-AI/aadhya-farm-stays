import type { APIRoute } from 'astro';

/**
 * Preview deploys (PUBLIC_NOINDEX=1) must not be indexed: the client preview
 * would otherwise compete with the real site for the same search terms.
 */
const noindex = import.meta.env.PUBLIC_NOINDEX === '1';

export const GET: APIRoute = ({ site }) =>
  new Response(
    noindex
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
