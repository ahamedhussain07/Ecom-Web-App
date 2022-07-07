import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';
import Head from 'next/head';
import baseUrl from '../utils/baseUrl';
import { redirectUser } from '../utils/authUser';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Huassy</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }) => {
  const { token } = parseCookies(ctx);
 
  let pageProps = {};

  const protectedRoutes = ctx.pathname === "/order";

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!token) {
    // destroyCookie(ctx, "token");
    protectedRoutes && redirectUser(ctx, "/Authentication");
  } else {
    try {
      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { Authorization: token },
      });
      const { user } = res.data;
      if (user) ctx.pathname === "/Authentication" && redirectUser("/");  

      pageProps.user = user;
    } catch (error) {
      console.log("error at _app.js catch",error)  
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/Authentication");
    }
  }

  return { pageProps };
};

export default MyApp;
