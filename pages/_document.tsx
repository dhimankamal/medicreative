import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='font-nunito text-base text-black dark:text-white dark:bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
