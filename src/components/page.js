import striptags from 'striptags'
import GoogleAnalyticsScript from './scripts/google-analytics'
import StartServiceWorker from './scripts/start-service-worker'

export default Page

function Page({
  children,
  title = 'JavaScript Air',
  description = 'The live JavaScript podcast all about JavaScript and the web platform. Available on YouTube, iTunes, and an RSS audio feed',
  headTags = [],
} = {}) {
  /* eslint max-len:0 */
  return (
    <html lang="en">
      <head>
        <title dangerouslySetInnerHTML={{__html: striptags(title)}} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="85n8ZBk_3hSeShlRmsVJXgDolakFG4UsMJgpy3mQyPs" />
        <meta name="theme-color" content="#efdd4f" />
        <meta name="author" content="JavaScript Air" />
        <link rel="publisher" href="https://plus.google.com/b/105493143005968326308" />
        <meta name="description" content={striptags(description)} />
        {headTags}
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,300,100,600,700,700italic,600italic,400italic,300italic,100italic"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/styles.dist.css" />
        <link rel="manifest" href="/resources/manifest/manifest.json" />
        <style>{'/* aphrodite-content */'}</style>
      </head>
      <body>
        {children}

        <GoogleAnalyticsScript />
        <StartServiceWorker />
      </body>
    </html>
  )
}
