import { TextField, Button, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import { login } from "../../services/apiService";
import { useSnackbar } from "notistack";
import { AxiosError } from "axios";

interface LoginForm {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<LoginForm>();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data.username, data.password);
      enqueueSnackbar("ورود با موفقیت انجام شد", {
        variant: "success",
        autoHideDuration: 2000,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error: unknown) {
      let errorMessage = "خطا در ورود! لطفاً مجدداً تلاش کنید";

      if (error instanceof AxiosError) {
        if (error.response?.data?.message) {
          const serverError = error.response.data.message;
          if (serverError.includes("User not found")) {
            errorMessage = "نام کاربری اشتباه است";
          } else if (serverError.includes("wrong Password")) {
            errorMessage = "رمز عبور اشتباه است";
          }
        }
      } else if (error instanceof Error && error.message) {
        console.log(error.message);
        errorMessage = error.message;
      }

      enqueueSnackbar(errorMessage, {
        variant: "error",
        autoHideDuration: 3000,
      });
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
