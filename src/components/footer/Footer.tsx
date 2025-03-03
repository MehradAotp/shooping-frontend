import { Box, Grid2, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Grid2 container spacing={4} className={styles.footerContent}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" className={styles.footerTitle}>
            درباره ما
          </Typography>
          <Typography variant="body2" className={styles.footerText}>
            ما برترین فروشگاه آنلاین با سال‌ها تجربه در ارائه بهترین محصولات به
            مشتریان عزیز هستیم.
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" className={styles.footerTitle}>
            لینک‌های سریع
          </Typography>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/">صفحه اصلی</a>
            </li>
            <li>
              <a href="/products">محصولات</a>
            </li>
            <li>
              <a href="/cart">سبد خرید</a>
            </li>
            <li>
              <a href="/contact">تماس با ما</a>
            </li>
          </ul>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" className={styles.footerTitle}>
            ارتباط با ما
          </Typography>
          <Typography variant="body2" className={styles.footerText}>
            تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
            <br />
            ایمیل: info@example.com
            <br />
            آدرس: تهران، خیابان آزادی، پلاک ۱۲۳
          </Typography>
          <div className={styles.socialIcons}>
            <IconButton
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
          </div>
        </Grid2>
      </Grid2>

      <Typography variant="body2" className={styles.copyRight}>
        © {new Date().getFullYear()} تمامی حقوق برای فروشگاه آنلاین محفوظ است.
      </Typography>
    </Box>
  );
};

export default Footer;
