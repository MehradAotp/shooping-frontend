import { Container, Button, Typography, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <Navbar />

      <div className={styles.hero}>
        <Container maxWidth="lg">
          <Grid2 container alignItems="center" spacing={6}>
            <Grid2 size={{ md: 6 }}>
              <Typography variant="h2" className={styles.heroTitle}>
                فروشگاه آنلاین ما
              </Typography>
              <Typography variant="h5" className={styles.heroSubtitle}>
                بهترین محصولات با بهترین قیمت‌ها
              </Typography>
              <Button
                variant="contained"
                size="large"
                className={styles.ctaButton}
                onClick={() => navigate("/products")}
              >
                مشاهده محصولات
              </Button>
            </Grid2>
            <Grid2 size={{ md: 6 }}>
              <img
                src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="فروشگاه آنلاین"
                className={styles.heroImage}
              />
            </Grid2>
          </Grid2>
        </Container>
      </div>

      <div className={styles.features}>
        <Container maxWidth="lg">
          <Typography variant="h3" className={styles.sectionTitle}>
            چرا ما را انتخاب کنید؟
          </Typography>
          <Grid2 container spacing={4}>
            {[
              {
                title: "تحویل سریع",
                icon: "🚚",
                text: "تحویل 24 ساعته در تهران",
              },
              { title: "ضمانت کیفیت", icon: "✅", text: "ضمانت بازگشت 7 روزه" },
              {
                title: "پشتیبانی 24/7",
                icon: "📞",
                text: "پشتیبانی آنلاین 24 ساعته",
              },
            ].map((feature, index) => (
              <Grid2 size={{ md: 4 }} key={index}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
