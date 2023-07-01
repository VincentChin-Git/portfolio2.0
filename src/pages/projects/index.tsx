import { NextSeo } from "next-seo";

import P1 from "@/assets/projects/p1.png";
import P2 from "@/assets/projects/p2.png";
import P3 from "@/assets/projects/p3.jpg";
import P4 from "@/assets/projects/p4.png";
import P5 from "@/assets/projects/p5.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import ProjectElem from "./ProjectElem";

export default function Project() {
  const projects = [
    { title: "Administration System", cover: P1, url: "" },
    { title: "E-Commerce Website", cover: P2, url: "" },
    {
      title: "To Do List",
      cover: P3,
      url: "https://vincentchin-git.github.io/todolist-react-scss/",
    },
    {
      title: "Cat Facts",
      cover: P4,
      url: "https://vincentchin-git.github.io/cute-cat/",
    },
    {
      title: "Just a Casual Page",
      cover: P5,
      url: "https://vincentchin-git.github.io/startup-project/",
    },
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
          My Recent Project
        </div>

        <div className="my-8 sm:text-xl mx-4">
          During my career, I have done 2 major projects independently. One of
          them is an e-commerce website for the printing industry, which
          includes product category, product details, item checkout etc. We
          design different product types for our clients.
        </div>

        <div className="my-8 sm:text-xl mx-4">
          Another one is the administration system, which was built for internal
          use of our clients. We provide a few major functions like customer
          management, quotation & invoices, product & stock management and staff
          management, just to name a few.
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
