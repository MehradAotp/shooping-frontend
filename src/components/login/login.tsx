import { TextField, Button, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import { login } from "../../services/apiService";

interface LoginForm {
  username: string;
  password: string;
}

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
  const { register, handleSubmit, formState } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data.username, data.password);
      onLogin();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" className={styles.title}>
        ورود به حساب کاربری
      </Typography>

      <TextField
        label="نام کاربری"
        variant="outlined"
        fullWidth
        {...register("username", { required: true })}
        error={!!formState.errors.username}
        className={styles.textField}
        helperText={formState.errors.username && "این فیلد الزامی است"}
      />

      <TextField
        label="رمز عبور"
        type="password"
        variant="outlined"
        fullWidth
        className={styles.textField}
        {...register("password", { required: true })}
        error={!!formState.errors.password}
        helperText={formState.errors.password && "این فیلد الزامی است"}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        className={styles.button}
      >
        ورود
      </Button>

      <Typography className={styles.signupText}>
        حساب کاربری ندارید؟{" "}
        <Link href="/signup" className={styles.signupLink}>
          ثبت نام کنید
        </Link>
      </Typography>
    </form>
  );
};

export default LoginForm;
