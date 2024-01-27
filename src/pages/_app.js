import BaseLayout from "@/components/common/Layout";
// import "@/styles/globals.css";
import '@/components/common/assets/vendor/bootstrap-icons/bootstrap-icons.min.css'
import '@/components/common/assets/vendor/glightbox/css/glightbox.min.css'
import '@/components/common/assets/css/main.css'
import '@/components/common/assets/vendor/swiper/swiper-bundle.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return (
  <BaseLayout>
    <Component {...pageProps} />;
  </BaseLayout>
  )
}
