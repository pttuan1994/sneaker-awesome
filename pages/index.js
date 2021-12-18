import { Spin } from "antd";
import { useSneaker } from "../store/sneaker";

import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

const Home = () => {
  const { loading, products, sortName, sortRank } = useSneaker();
  return (
    <Spin tip="Loading..." size="large" spinning={loading}>
      <div className="container bg-white">
        <main className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <Filter sortName={sortName} sortRank={sortRank}></Filter>
          <ProductList products={products}></ProductList>
        </main>
      </div>
    </Spin>
  );
};

export default Home;
