import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Grid2 } from "@mui/material";
import styles from "./ProductList.module.css";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <Container sx={{ mt: 4 }}>
      <Grid2 container spacing={3} className={styles.productList}>
        {products.map((product: Product) => (
          <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard {...product} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductList;
