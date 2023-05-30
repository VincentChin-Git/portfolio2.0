import { NextSeo } from "next-seo";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Template = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <NextSeo
        title="Vincent Chin | Portfolio"
        description="This is a portfolio website made by Vincent"
      />
      <Header />
      <div className=" container mx-auto"></div>
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
};

export default Template;
