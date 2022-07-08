import axios from "axios";
import baseUrl from "../../utils/baseUrl";

import { useRouter } from "next/router";

const ProductDetailPage = ({ productData }) => {
  const router = useRouter();

  if (productData === undefined || router.query.productId !== productData._id) {
    // no product found component
    return <div>No Product Found</div>;
  }

  console.log(productData);

  return (
    <>
      <div>Welcome to the product detail page</div>
      <h3>
        your viewing this <img src={productData.image} alt="product" />
      </h3>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const path = ctx.params.productId;

  try {
    const res = await axios.get(
      `${baseUrl}/api/products/productDetail/${path}`
    );

    return { props: { productData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
}

export default ProductDetailPage;
