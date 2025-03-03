import Cart from "../../components/cart/Cart";
import { Container } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Cart />
      </Container>
    </div>
  );
};

export default CartPage;
