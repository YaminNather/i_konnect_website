import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LebfFMjAAAAAO9-iChhX-ge5Zg71TKlcm5zHFXT">
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp
