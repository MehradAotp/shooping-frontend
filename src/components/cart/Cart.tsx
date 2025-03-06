import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { useCart } from "../../context/CartContext";
import { Delete, Add, Remove } from "@mui/icons-material";
import styles from "./cart.module.css";
import { buyShopping } from "../../services/apiService";
import { useSnackbar } from "notistack";

const Cart = () => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    cart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    syncCart,
  } = useCart();

  const handlePayment = async () => {
    try {
      const response = await buyShopping();
      enqueueSnackbar(response.message, {
        variant: "success",
        autoHideDuration: 2000,
      });
      await clearCart();
      await syncCart();
    } catch {
      enqueueSnackbar("خطا در پرداخت! لطفاً دوباره امتحان کنید", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  return (
    <div className={styles.cartContainer}>
      <Typography variant="h5" className={styles.cartTitle}>
        🛒 سبد خرید
      </Typography>
      <List
        className={styles.cartList}
        sx={{
          backgroundColor: "#f6f6f6",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        {cart?.items?.length === 0 ? (
          <Typography variant="body1" sx={{ p: 2, textAlign: "center" }}>
            سبد خرید شما خالی است
          </Typography>
        ) : (
          cart?.items?.map((item) => {
            if (!item?.shoppingId) return null;

            return (
              <ListItem key={item.shoppingId._id} className={styles.cartItem}>
                <ListItemText
                  sx={{
                    direction: "rtl",
                    textAlign: "right",
                    borderBottom: "1px solid #eee",
                    paddingBottom: "20px",
                  }}
                  primary={item.shoppingId.name}
                  secondary={`${(
                    item.shoppingId.price * item.quantity
                  ).toLocaleString()} تومان (تعداد: ${item.quantity})`}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="row-reverse"
                  paddingRight={2}
                  gap={1}
                >
                  <IconButton
                    onClick={() => incrementQuantity(item.shoppingId._id)}
                  >
                    <Add />
                  </IconButton>
                  <IconButton
                    onClick={() => decrementQuantity(item.shoppingId._id)}
                  >
                    <Remove />
                  </IconButton>
                  <IconButton
                    onClick={() => removeFromCart(item.shoppingId._id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </ListItem>
            );
          })
        )}
      </List>
      <Typography variant="h6" className={styles.cartTotal}>
        مجموع قیمت:{" "}
        {cart?.items
          ?.reduce(
            (acc, item) => acc + (item.shoppingId?.price ?? 0) * item.quantity,
            0
          )
          .toLocaleString()}
        تومان
      </Typography>

      <Button
        variant="contained"
        color="success"
        onClick={handlePayment}
        disabled={cart?.items?.length === 0}
        sx={{ mt: 2 }}
      >
        پرداخت
      </Button>
    </div>
  );
};

export default Cart;
