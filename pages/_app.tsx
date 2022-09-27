import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layouts/page';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default MyApp
