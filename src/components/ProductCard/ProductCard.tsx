import { useCart } from "../../context/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import styles from "./ProductCard.module.css";
import { ShoppingOutput } from "../../api/todo";
interface ProductCardProps {
  data: ShoppingOutput;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const { _id, name, price, image } = data;
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    console.log("Adding to cart:", { _id, name, price, image });
    addToCart({ _id, name, price, image });
  };
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography sx={{ mb: 3 }} variant="body1">
          {price.toLocaleString()} تومان
        </Typography>
        <Button
          variant="contained"
          onClick={handleAddToCart}
          className={styles.button}
        >
          افزودن به سبد
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
