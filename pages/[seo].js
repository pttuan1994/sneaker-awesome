import { useRouter } from "next/router";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useSneaker } from "../store/sneaker";

import ProductDetail from "../components/ProductDetail";

const Detail = () => {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const { loading, products } = useSneaker();

  const { query } = router;

  useEffect(() => {
    const found = products.find((product) => product.seo === query.seo);
    if (found) {
      setProduct(found);
      setImage(
        found.imageUrls && found.imageUrls.length && found.imageUrls[0]
          ? found.imageUrls[0]
          : "https://via.placeholder.com/400x728.png?text=No+Image"
      );
    }
  }, [products]);
  return (
    <Spin tip="Loading..." size="large" spinning={loading}>
      <ProductDetail product={product} image={image}></ProductDetail>
    </Spin>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const props = {};
  return { props };
};

export default Detail;
