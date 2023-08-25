import './productList.css';
import { useState } from "react";
import { useGetMenuQuery } from "../../services/menu";
import ProductCart from "../productCard/ProductCart";
import { SimpleGrid, Spinner } from "@chakra-ui/react";

const ProductList = () => {
  const { data, error, isLoading } = useGetMenuQuery();
  const [category, setCategory] = useState("all");
  const [categoryStates, setCategoryStates] = useState({});
  if (isLoading) {
    return <div className='spinner'><Spinner color='red.500' /></div> ;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const categories = Object.keys(data);

  const filteredProducts = category === "all" ?
    Object.values(data).flatMap(cat => cat) :
    data[category];

  return (
    <div className='productList'>
      <div className='categorie-list__wrapper'>
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

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {filteredProducts.map((item) => (
          <ProductCart key={item.name} item={item} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ProductList;

