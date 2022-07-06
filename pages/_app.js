import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";

import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
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
