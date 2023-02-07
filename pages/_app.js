import { Suspense } from 'react/cjs/react.production.min'
import Layout1 from '../layout/Layout1'
import '../styles/globals.css'
import { AppWrapper } from "../AppContext";
import { AuthProvider } from '../AuthContext';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <AuthProvider>
    <AppWrapper>
<Layout1 >
     <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-9YDXR89E4M"}
        />
        <script strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9YDXR89E4M');`}
        </script>
        <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=AW-337638121"}
        />
        <script strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-337638121');`}
        </script>
<Component {...pageProps} />
</Layout1>
    </AppWrapper>
    </AuthProvider>
   </>
  )
}

export default MyApp
export async function getServerSideProps() {


  // Pass data to the page via props
  return { props: { data:"555" } }
}

