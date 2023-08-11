import './productList.css';
import { useState } from "react";
import { useGetMenuQuery } from "../../services/menu";
import ProductCart from "../productCard/ProductCart";

const ProductList = () => {
  const { data, error, isLoading } = useGetMenuQuery();
  const [category, setCategory] = useState("all");
  const [categoryStates, setCategoryStates] = useState({});
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const categories = Object.keys(data);

  const filteredProducts = category === "all" ?
    Object.values(data).flatMap(cat => cat) :
    data[category];

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <span
          className={`categories ${category === 'all' ? 'active' : ''}`}
          onClick={() => setCategory("all")}
        >
          All
        </span>
        {categories.map((cat) => (
          <span
            key={cat}
            className={`categories ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>
      {filteredProducts.map((item) => (
        <ProductCart key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
