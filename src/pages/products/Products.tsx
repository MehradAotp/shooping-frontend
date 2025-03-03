import { Container } from "@mui/material";
import ProductList from "../../components/ProductList/ProductList";
import Navbar from "../../components/navbar/Navbar";
import styles from "./products.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.productsPage}>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <h1 className={styles.title}>همه محصولات</h1>
        <ProductList />
      </Container>
    </div>
  );
};

export default ProductsPage;
