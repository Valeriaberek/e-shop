import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: ProductType[]) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Nos Produits</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 object-contain p-4"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-indigo-600 font-bold mb-4">${product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-auto bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
              >
                Plus d'infos
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
