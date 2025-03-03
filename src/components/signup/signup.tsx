import { TextField, Button, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";
import { signup } from "../../services/apiService";

interface SignupForm {
  username: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = ({ onSignup }: { onSignup: () => void }) => {
  const { register, handleSubmit, formState, watch } = useForm<SignupForm>();

  const onSubmit = async (data: SignupForm) => {
    try {
      await signup(data.username, data.password);
      onSignup();
    } catch (error) {
      console.error("Signup failed:", error);
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
