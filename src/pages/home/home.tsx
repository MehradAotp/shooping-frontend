import ProductList from "../../components/ProductList/ProductList";
import styles from "./home.module.css";
import { Container } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <h1 className={styles.title}>محصولات</h1>
        <ProductList />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
