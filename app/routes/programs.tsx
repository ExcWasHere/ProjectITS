import Footer from "~/common/Footer";
import Header from "~/common/Header";
import CardHero from "~/components/programs/cardhero";
import ProgramCard from "~/components/programs/cardmain";
export default function programs() {
    return (
        <>
            <Header />
            <CardHero />
            <ProgramCard id="1" title="Program Title" description="Program Description" />
            <Footer />
        </>
    );
}