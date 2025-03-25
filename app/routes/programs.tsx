import Footer from "~/common/Footer";
import Header from "~/common/Header";
import CardHero from "~/components/Programs/cardhero";
import ProgramCard from "~/components/Programs/cardmain";
export default function programs() {
    return (
        <>
            <Header />
            <CardHero />
            <ProgramCard />
            <Footer />
        </>
    );
}