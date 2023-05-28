import { NextSeo } from "next-seo";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className=" flex flex-col h-screen ">
      <NextSeo title="Next Template" description="This is a next template" />
      <Header />
      <Banner />
      <div className=" flex-1"></div>
      <Footer />
    </div>
  );
};

export default Home;
