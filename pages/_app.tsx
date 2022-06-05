import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        async
        data-ad-client="ca-pub-9081019223186749"
        data-ad-slot="8954762142"
        data-ad-format="auto"
        data-full-width-responsive="true"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9081019223186749"
      ></Script>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
