import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Alegreya:ital@0;1&family=Cormorant+Garamond&display=swap"&family=Josefin+Sans:wght@200;300&family=Playfair+Display&display=swap' rel='stylesheet' />
        <link href="https://fonts.cdnfonts.com/css/brittany-signature" rel="stylesheet"/>
        <title>Katie Sanger</title>
        <meta name='description' content='Katie Sanger is a life coach and astrologist offering wellness services.' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
