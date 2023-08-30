import './productList.css';
import { useState } from "react";
import { useGetMenuQuery } from "../../services/menu";
import ProductCart from "../productCard/ProductCart";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import SortSelect from "../select/SortSelect";

const ProductList = () => {
  const { data, error, isLoading } = useGetMenuQuery();
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  if (isLoading) {
    return <div className="spinner"><Spinner color="red.500" /></div>;
  }

  const categories = Object.keys(data);

  const filteredProducts = category === "all" ?
    Object.values(data).flatMap(cat => cat) :
    data[category];

  const sortedProducts = [...filteredProducts]; 

  if (sortBy === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price); 
  }



  return (
    <div className="productList">
      <div className="categorie-list__wrapper">
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
      <SortSelect sortBy={sortBy} setSortBy={setSortBy} /> 
      
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {sortedProducts.map((item) => (
          <ProductCart key={item.name} item={item} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ProductList;


