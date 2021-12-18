import Link from "next/link";
import moment from "moment";

const ProductList = ({ products }) => {
  return (
    <div className="w-full">
      <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.length
          ? products.map((product) => (
              <div key={product.uuid} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={
                      product.imageUrls.length && product.imageUrls[0]
                        ? product.imageUrls[0]
                        : "https://via.placeholder.com/400x728.png?text=No+Image"
                    }
                    alt={product.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/${product.seo}`}>
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {product.name}
                        </a>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {moment(product.updatedAt).fromNow()}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Rank: #{product.rank}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductList;
