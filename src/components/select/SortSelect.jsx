import { Select } from "@chakra-ui/react";

const SortSelect = ({ sortBy, setSortBy }) => {
  return (
    <Select
      variant="unstyled"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      mb="3"
      width="200px"
    >

      <option value="default">Default</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
      
    </Select>
  );
};

export default SortSelect;
