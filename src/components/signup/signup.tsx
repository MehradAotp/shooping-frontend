import { TextField, Button, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";
import { signup } from "../../services/apiService";
import { enqueueSnackbar } from "notistack";
import { AxiosError } from "axios";

interface SignupForm {
  username: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const { register, handleSubmit, formState, watch } = useForm<SignupForm>();

  const onSubmit = async (data: SignupForm) => {
    try {
      await signup(data.username, data.password);
      enqueueSnackbar("ثبت نام با موفقیت انجام شد", {
        variant: "success",
        autoHideDuration: 2000,
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error: unknown) {
      let errorMessage = "خطا در ثبت نام! لطفاً مجدداً تلاش کنید";

      if (error instanceof AxiosError) {
        if (error.response?.data?.message) {
          const serverError = error.response.data.message;
          if (serverError.includes("Username already exists")) {
            errorMessage = "نام کاربری قبلاً ثبت شده است";
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
        ایجاد حساب کاربری
      </Typography>

      <TextField
        label="نام کاربری"
        variant="outlined"
        fullWidth
        {...register("username", { required: true })}
        error={!!formState.errors.username}
        helperText={formState.errors.username && "این فیلد الزامی است"}
        className={styles.textField}
      />

      <TextField
        label="رمز عبور"
        type="password"
        variant="outlined"
        fullWidth
        {...register("password", { required: true })}
        error={!!formState.errors.password}
        helperText={formState.errors.password && "این فیلد الزامی است"}
        className={styles.textField}
      />

      <TextField
        label="تکرار رمز عبور"
        type="password"
        variant="outlined"
        fullWidth
        className={styles.textField}
        {...register("confirmPassword", {
          required: true,
          validate: (val: string) => val === watch("password"),
        })}
        error={!!formState.errors.confirmPassword}
        helperText={
          formState.errors.confirmPassword && "رمز عبورها مطابقت ندارند"
        }
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        className={styles.button}
      >
        ثبت نام
      </Button>

      <Typography className={styles.loginText}>
        قبلاً حساب دارید؟{" "}
        <Link href="/login" className={styles.loginLink}>
          وارد شوید
        </Link>
      </Typography>
    </form>
  );
};

export default SignupForm;
