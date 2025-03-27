import Footer from "~/common/Footer";
import Header from "~/common/Header";
import DonorSection from "~/components/Profile/donatur";
import Index0 from "~/components/Profile/index0";
import Index1 from "~/components/Profile/index1";
import Index2 from "~/components/Profile/index2";
import IndexReview from "~/components/Profile/index3";
import LocationCard from "~/components/Profile/index4";

export default function profile() {
    return (
     <>
        <Header />
        <Index0 />
        <Index1 />
        <Index2 />
        <DonorSection />
        <IndexReview />
        <LocationCard />
        <Footer />
     </>
    );
  }