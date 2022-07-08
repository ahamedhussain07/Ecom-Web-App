import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

import { useRouter } from "next/router";
import Link from "next/link";

const productTypePage = ({ productData }) => {
  const router = useRouter();

  //   console.log(router.query.type);
  console.log("from api ", productData);

  if (router.isFallback) {
    return (
      <>
      // no product found component
        <div>page not found </div>
        <Link href="/">Back To Home</Link>
      </>
    );
  }

  return <div>This is a product type page of {router.query.type}</div>;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "videogames" } },
      { params: { type: "fashino" } },
      { params: { type: "furniture" } },
      { params: { type: "Electronics" } },
      { params: { type: "jewelry" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const path = ctx.params.type;

  try {
    const res = await axios.get(`${baseUrl}/api/products/${path}`);

    return { props: { productData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
}

export default productTypePage;
