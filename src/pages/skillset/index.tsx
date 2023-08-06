import Image from "next/image";
import { NextSeo } from "next-seo";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Chakra from "../../assets/programming/chakra.svg";
import Git from "../../assets/programming/git.svg";
import GitHub from "../../assets/programming/github.svg";
import Grafana from "../../assets/programming/grafana.png";
import Javascript from "../../assets/programming/javascript.svg";
import Material from "../../assets/programming/material.svg";
import MongoDb from "../../assets/programming/mongo.svg";
import MySql from "../../assets/programming/mysql.png";
import NextJs from "../../assets/programming/nextjs.svg";
import NodeJs from "../../assets/programming/nodejs.svg";
import PHP from "../../assets/programming/php.png";
import PostgreSql from "../../assets/programming/postgresql.svg";
import Postman from "../../assets/programming/postman.png";
import Prometheus from "../../assets/programming/prometheus.png";
import ReactJs from "../../assets/programming/react.svg";
import Redux from "../../assets/programming/redux.svg";
import Sass from "../../assets/programming/sass.svg";
import Sentry from "../../assets/programming/sentry.png";
import UniApp from "../../assets/programming/uniapp.png";
import Uview from "../../assets/programming/uview.png";
import Vercel from "../../assets/programming/vercel.svg";
import VSCode from "../../assets/programming/vscode.svg";
import Vue from "../../assets/programming/vue.svg";
import VueX from "../../assets/programming/vuex.png";

const SkillSet = () => {
  const toolsList = [
    {
      title: "Languages which I speak",
      icons: [
        { src: Javascript, name: "Javascript" },
        { src: NodeJs, name: "NodeJs" },
        { src: PHP, name: "PHP" },
        { src: ReactJs, name: "ReactJs" },
        { src: Sass, name: "SASS" },
        { src: UniApp, name: "Uni-App" },
        { src: Vue, name: "Vue" },
      ],
    },

    {
      title: "Database Tools",
      icons: [
        { src: PostgreSql, name: "PostgreSQL" },
        { src: MongoDb, name: "MongoDB" },
        { src: MySql, name: "MySQL" },
      ],
    },

    {
      title: "Version Control, CI/CD Tools",
      icons: [
        { src: Git, name: "Git" },
        { src: GitHub, name: "GitHub" },
        { src: Vercel, name: "Vercel" },
      ],
    },

    {
      title: "UI Tools",
      icons: [
        { src: Chakra, name: "Chakra UI" },
        { src: Material, name: "Material UI" },
        { src: Uview, name: "UView UI" },
      ],
    },

    {
      title: "Store Management Tools",
      icons: [
        { src: Redux, name: "Redux" },
        { src: VueX, name: "Vuex" },
      ],
    },

    {
      title: "Monitoring Tools",
      icons: [
        { src: Grafana, name: "Grafana" },
        { src: Prometheus, name: "Prometheus" },
        { src: Sentry, name: "Sentry" },
      ],
    },

    {
      title: "Other Tools",
      icons: [
        { src: NextJs, name: "NextJs" },
        { src: Postman, name: "Postman" },
        { src: VSCode, name: "Visual Studio Code" },
      ],
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
        {toolsList.map((tool) => (
          <div key={tool.title} className="my-8" style={{}}>
            <div className="font-bold text-2xl sm:text-3xl">{tool.title}</div>
            <div className="flex my-8 box-border flex-wrap ">
              {tool.icons.map((icon) => (
                <div
                  key={icon.name}
                  className=" w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 mb-8 cursor-pointer hover:scale-110 box-border"
                >
                  <div className=" aspect-square box-border mx-auto w-3/5 ">
                    <Image
                      src={icon.src}
                      alt=""
                      width={1000}
                      height={1000}
                      className={`h-full ${
                        ["Uni-App", "PHP"].includes(icon.name)
                          ? "scale-[.8]"
                          : ""
                      } `}
                    />
                  </div>

                  <div className=" font-medium">{icon.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
};

export default SkillSet;
