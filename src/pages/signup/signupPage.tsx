import { Container, Grid2 } from "@mui/material";
import SignupForm from "../../components/signup/signup";
import styles from "./signupPage.module.css";

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <Container maxWidth="lg">
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid2 size={{ md: 6, xs: 12 }}>
            <SignupForm />
          </Grid2>
          <Grid2 size={{ md: 4, xs: 12 }} className={styles.illustration}>
            <img
              src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Signup Illustration"
            />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default SignupPage;
