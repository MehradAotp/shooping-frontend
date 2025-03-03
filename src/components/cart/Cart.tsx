import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useCart } from "../../context/CartContext";
import { Delete } from "@mui/icons-material";
import styles from "./cart.module.css";
const Cart = () => {
  const { cart, removeFromCart } = useCart();
  return (
    <div className={styles.cartContainer}>
      <Typography variant="h5" className={styles.cartTitle}>
        🛒 سبد خرید
      </Typography>
      <List className={styles.cartList}>
        {cart.map((item) => (
          <ListItem key={item.id} className={styles.cartItem}>
            <ListItemText
              primary={item.name}
              secondary={`${item.price.toLocaleString()} تومان`}
              className={styles.itemText}
            />
            <IconButton onClick={() => removeFromCart(item.id)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" className={styles.cartTotal}>
        مجموع قیمت:{" "}
        {cart.reduce((acc, item) => acc + item.price, 0).toLocaleString()} تومان
      </Typography>
    </div>
  );
};

export default Cart;
