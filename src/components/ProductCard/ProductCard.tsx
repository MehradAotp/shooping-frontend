import { useCart } from "../../context/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import styles from "./ProductCard.module.css";
import { ShoppingOutput } from "../../api/todo";
import { useSnackbar } from "notistack";
import { Add, Delete, Remove } from "@mui/icons-material";

interface ProductCardProps {
  data: ShoppingOutput;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const { name, price, image } = data;
  const {
    cart,
    addToCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
  } = useCart();
  const { enqueueSnackbar } = useSnackbar();
  const handleAddToCart = async () => {
    try {
      await addToCart(data);

      enqueueSnackbar(`${data.name} به سبد خرید اضافه شد`, {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch {
      enqueueSnackbar("لطفا وارد شوید", { variant: "error" });
    }
  };
  const handleRemoveFromCart = () => {
    removeFromCart(data._id);
    enqueueSnackbar(`${data.name} از سبد خرید حذف شد`, {
      variant: "error",
      autoHideDuration: 2000,
    });
  };

  const itemInCart = cart?.items?.find(
    (item) => item.shoppingId?._id === data._id
  );

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography sx={{ mb: 3 }} variant="body1">
          {price.toLocaleString()} تومان
        </Typography>

        {itemInCart ? (
          <Box display="flex" alignItems="center" gap={1}>
            {itemInCart?.quantity > 1 ? (
              <Button
                variant="text"
                color="error"
                sx={{ fontSize: "8px" }}
                onClick={() => decrementQuantity(data._id)}
              >
                <Remove />
              </Button>
            ) : (
              <IconButton onClick={handleRemoveFromCart} color="error">
                <Delete />
              </IconButton>
            )}
            <Typography>{itemInCart?.quantity || 0}</Typography>
            <Button variant="text" onClick={() => incrementQuantity(data._id)}>
              <Add />
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            onClick={handleAddToCart}
            className={styles.button}
          >
            افزودن به سبد
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
export default ProductCard;
