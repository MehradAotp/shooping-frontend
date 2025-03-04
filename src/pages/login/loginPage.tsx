import { Container, Grid2 } from "@mui/material";
import LoginForm from "../../components/login/login";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <Container maxWidth="lg">
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid2 size={{ md: 6, xs: 12 }}>
            <LoginForm />
          </Grid2>
          <Grid2 size={{ md: 4, xs: 12 }} className={styles.illustration}>
            <img
              src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Login Illustration"
            />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default LoginPage;
