import { NextSeo } from "next-seo";

import P1 from "@/assets/projects/p1.png";
import P2 from "@/assets/projects/p2.png";
import P3 from "@/assets/projects/p3.jpg";
// import P4 from "@/assets/projects/p4.png";
// import P5 from "@/assets/projects/p5.png";
import P6 from "@/assets/projects/p6.jpg";
import P7 from "@/assets/projects/p7.jpg";
import P8 from "@/assets/projects/p8.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import ProjectElem from "./ProjectElem";

export default function Project() {
  const projects = [
    { title: "Purrchaser", cover: P7, url: "/project?project=4" },
    {
      title: "Purrchaser Manage",
      cover: P8,
      url: "https://ecom-fe-manage.vercel.app/",
    },
    { title: "Expense Tracker", cover: P6, url: "/project?project=3" },
    { title: "Administration System", cover: P1, url: "/project?project=1" },
    { title: "E-Commerce Website", cover: P2, url: "/project?project=2" },
    {
      title: "To Do List",
      cover: P3,
      url: "https://vincentchin-git.github.io/todolist-react-scss/",
    },
    // {
    //   title: "Cat Facts",
    //   cover: P4,
    //   url: "https://vincentchin-git.github.io/cute-cat/",
    // },
    // {
    //   title: "Just a Casual Page",
    //   cover: P5,
    //   url: "https://vincentchin-git.github.io/startup-project/",
    // },
  ];
  return (
    <div className=" flex flex-col min-h-screen ">
      <NextSeo
        title="Vincent Chin | Portfolio"
        description="This is a portfolio website made by Vincent"
      />
      <Header />

      <div className=" container mx-auto mt-12 text-center">
        <div className="my-8 font-bold text-2xl sm:text-3xl">
          My Recent Projects
        </div>

        <div className="my-8 sm:text-xl mx-4">
          <span>During my career, I have done 3 major projects </span>
          <span className=" font-bold">independently</span>
          <span>. One of them is an </span>
          <span className=" font-bold">e-commerce website </span>
          <span>
            for the printing industry, which includes product category, product
            details, item checkout etc. We design different product types for
            our clients.
          </span>
        </div>

        <div className="my-8 sm:text-xl mx-4">
          <span>Another one is the </span>
          <span className=" font-bold">administration system</span>
          <span>
            , which was built for internal use of our clients. We provide a few
            major functions like customer management, quotation & invoices,
            product & stock management and staff management, just to name a few.
          </span>
        </div>

        <div className="my-8 sm:text-xl mx-4">
          <span>There&apos;s an </span>
          <span className=" font-bold">expense tracker mobile app </span>
          <span>I developed using </span>
          <span className=" font-bold">React Native</span>,
          <span className=" font-bold"> Redux</span>
          <span>, and </span>
          <span className=" font-bold">Firebase</span>
          <span>
            . This app features expense and income recording, budget setting,
            and monthly data analysis capabilities. It aids in tracking and
            provides insights into your financial flow.
          </span>
        </div>

        <div className="my-8 sm:text-xl mx-4">
          <span>
            And finally, it is an e-commerce mobile app developed using
          </span>
          <span className=" font-bold"> React Native</span>
          <span> and </span>
          <span className=" font-bold">Stripe API </span>
          <span>
            to process the payment. This e-commerce platform is managed using an
            web administration system which developed using
          </span>
          <span className=" font-bold"> React</span>
          <span>. Both of this mobile app and web system are using</span>
          <span className=" font-bold"> Golang </span>
          <span>as their backend, and </span>
          <span className=" font-bold">MongoDB </span>
          <span>as their database, deployed using</span>
          <span className=" font-bold"> AWS EC2</span>
          <span> and </span>
          <span className=" font-bold">Docker</span>.
        </div>

        <div className="my-8 sm:text-xl mx-4 text-left">
          PS: Current career&apos;s projects are excluded.
        </div>

        <div className="  box-border flex flex-wrap items-center my-8">
          {projects.map((project, pIndex) => (
            <ProjectElem
              key={pIndex}
              cover={project.cover}
              title={project.title}
              url={project.url}
            />
          ))}
        </div>

        <div className="text-center sm:text-xl my-8">And More...</div>
      </div>

      <div className="flex-1"></div>
      <Footer />
    </div>
  );
}
