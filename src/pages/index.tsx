import { motion } from "framer-motion";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Avatar from "@/assets/images/avatar.png";
import ProfileImage from "@/assets/images/profileImage.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <NextSeo
        title="Vincent Chin | Portfolio"
        description="This is a portfolio website made by Vincent"
      />
      <Header />
      <div className="container mx-auto ">
        {/* first section  */}
        <div className=" flex flex-wrap justify-center items-center mt-4 sm:mt-8 mb-8 lg:mb-24 mx-4 sm:mx-0">
          <motion.div
            className="  font-bold w-full sm:w-2/3 text-center sm:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="2xl:text-3xl lg:text-2xl text-xl mb-4">
              Hi There! 👋🏻 I&apos;m Vincent.
            </div>
            <div className=" 2xl:text-5xl lg:text-4xl text-3xl mb-4">
              I build value through programming.
            </div>
            <div className=" 2xl:text-lg lg:text-base text-sm mb-4">
              Passionate in programming, I&apos;m polishing my skills every day.
            </div>
          </motion.div>
          <motion.div
            className="w-2/3 sm:w-1/3 mt-2 mb-4 sm:my-12"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="w-full rounded-xl"
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>

        {/* second section  */}
        <div className="flex flex-wrap justify-center items-center sm:flex-row-reverse mb-24">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" w-full sm:w-2/3 font-medium max-w-[400px] sm:max-w-none sm:pl-[10%] px-8 sm:px-0"
          >
            <div className="text-center font-bold 2xl:text-4xl lg:text-3xl text-2xl mb-8">
              LET ME INTRODUCE MYSELF
            </div>
            <div className=" mb-4 2xl:text-lg lg:text-base text-sm">
              I fell in love with{" "}
              <span className="text-primary">programming</span> and I have at
              least learnt something, I think… 🤷‍♂️
            </div>
            <div className=" mb-4 2xl:text-lg lg:text-base text-sm">
              I am fluent in <span className="text-primary">Javascript</span>,
              both frontend & backend.
            </div>
            <div className=" mb-4 2xl:text-lg lg:text-base text-sm">
              My field of Interest&apos;s are building new{" "}
              <span className="text-primary">Web Technologies</span> and{" "}
              <span className=" text-primary">Products</span> and also in areas
              related to <span className="text-primary">Mobile Apps</span>.
            </div>
            <div className=" mb-4 2xl:text-lg lg:text-base text-sm">
              Whenever possible, I also apply my passion for developing products
              with Node.js and Modern Javascript Library and Frameworks like
              React.js and Next.js
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" w-full sm:w-1/3 flex items-center justify-center px-16 py-8 sm:p-0"
          >
            <Image
              src={Avatar}
              alt="avatar"
              className="w-4/5"
              width={1000}
              height={1000}
            />
          </motion.div>
        </div>
      </div>
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
};

export default Home;
