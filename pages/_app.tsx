import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider as AppProviderContext } from '../context/app';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AppProviderContext>
      <Component {...pageProps} />
    </AppProviderContext>
  )
}

export default MyApp
