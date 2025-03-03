import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ direction: "rtl" }}>
        <Container
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "25px" }}>
            فروشگاه مهراد
          </Typography>

          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontSize: "16px" }}
          >
            صفحه اصلی
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/cart"
            sx={{ fontSize: "16px" }}
          >
            سبد خرید
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
