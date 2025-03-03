import { useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Grid2 } from "@mui/material";
import styles from "./ProductList.module.css";
import { getShoppings } from "../../services/apiService";
import { ShoppingOutput } from "../../api/todo";

const ProductList = () => {
  const {
    data: shoppings = [],
    isLoading,
    isError,
  } = useQuery<ShoppingOutput[]>({
    queryKey: ["shoppings"],
    queryFn: getShoppings,
  });

  if (isLoading) {
    return <div className={styles.loading}>در حال بارگیری محصولات...</div>;
  }

  if (isError) {
    return <div className={styles.error}>خطا در دریافت محصولات!</div>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid2 container spacing={3} className={styles.productList}>
        {shoppings.map((shopping: ShoppingOutput) => (
          <Grid2 key={shopping._id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard data={shopping} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ProductList;
