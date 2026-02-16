import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data: ProductType) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 md:h-80 object-contain mx-auto"
      />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-indigo-600 font-semibold mb-4">${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Product;

