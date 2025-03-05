import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1976d2", boxShadow: 3 }}>
      <Toolbar
        sx={{
          direction: "rtl",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "22px",
            cursor: "pointer",
            textDecoration: "none",
          }}
          component={Link}
          to="/"
          color="inherit"
        >
          فروشگاه مهراد
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontSize: "16px", mx: 1 }}
          >
            صفحه اصلی
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/cart"
            sx={{ fontSize: "16px", mx: 1 }}
          >
            <Badge
              badgeContent={
                cart?.items?.reduce(
                  (acc: number, item) => acc + item.quantity,
                  0
                ) || 0
              }
              color="error"
              sx={{ fontSize: "16px" }}
            >
              <ShoppingCartIcon sx={{ fontSize: "24px" }} />
            </Badge>
          </Button>
          {isLoggedIn ? (
            <Button
              color="error"
              onClick={logout}
              variant="contained"
              sx={{ fontSize: "16px", mx: 1, borderRadius: 1 }}
            >
              خروج
            </Button>
          ) : (
            <Button
              color="success"
              component={Link}
              variant="contained"
              to="/login"
              sx={{ fontSize: "16px", mx: 1, borderRadius: 1 }}
            >
              ورود
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
