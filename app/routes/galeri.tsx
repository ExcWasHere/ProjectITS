import Footer from "~/common/Footer";
import Header from "~/common/Header";
import GaleriHero from "~/components/Galeri/galeriHero";
import GaleriCard from "~/components/Galeri/galeriMain";

export default function Galeri() {
    return(
        <>
        <Header />
        <GaleriHero />
        <GaleriCard />
        <Footer />
        </>
    )
}