import Footer from "~/common/Footer";
import Header from "~/common/Header";
import NewsHero from "~/components/News/newsHero";
import NewsCarousel from "~/components/News/newsMain";

export default function News() {
    return(
        <>
        <Header />
        <NewsHero />
        <NewsCarousel />
        <Footer />
        </>
    )
}