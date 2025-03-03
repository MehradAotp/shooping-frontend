import { useCart } from "../../context/CartContext";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import styles from "./ProductCard.module.css";
interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    console.log("Adding to cart:", { id, name, price, image });
    addToCart({ id, name, price, image });
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
