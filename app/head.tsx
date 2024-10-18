import { CONFIG } from "site.config";

export default function Head() {
  return (
    <>
      <title>{CONFIG.head.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={CONFIG.head.description} />
      <meta name="keywords" content={CONFIG.head.keywords} />
      <meta property="og:site_name" content={CONFIG.head.site_name} />
      <meta property="og:title" content={CONFIG.head.title} />
      <meta property="og:description" content={CONFIG.head.description} />
      <meta property="og:url" content={CONFIG.head.url} />
      <meta property="og:image" content={CONFIG.head.image} />
      <link rel="canonical" href={CONFIG.head.url} />
      <meta name="author" content={CONFIG.head.author} />
      <meta name="language" content={CONFIG.head.lang} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={CONFIG.head.url} />
      <meta name="application-name" content={CONFIG.head.title} />
      <meta name="apple-mobile-web-app-title" content={CONFIG.head.title} />
      <link rel="icon" href="/avatar.svg" />
      {CONFIG.googleSearchConsole.enable === true && (
        <>
          <meta
            name="google-site-verification"
            content={CONFIG.googleSearchConsole.config.siteVerification}
          />
        </>
      )}
    </>
  );
}
