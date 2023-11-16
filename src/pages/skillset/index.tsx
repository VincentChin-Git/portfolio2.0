import Image from "next/image";
import { NextSeo } from "next-seo";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import AwsEC2 from "../../assets/programming/aws_ec2.jpeg";
import AwsRoute53 from "../../assets/programming/aws_route53.png";
import AwsS3 from "../../assets/programming/aws_s3.svg";
import Firebase from "../../assets/programming/firebase.svg";
import Git from "../../assets/programming/git.svg";
import GitHub from "../../assets/programming/github.svg";
import Golang from "../../assets/programming/go.svg";
import Grafana from "../../assets/programming/grafana.png";
import Javascript from "../../assets/programming/javascript.svg";
import Lalamove from "../../assets/programming/lalamove.png";
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
import Sentry from "../../assets/programming/sentry.png";
import Stripe from "../../assets/programming/stripe.svg";
import UniApp from "../../assets/programming/uniapp.png";
import Vercel from "../../assets/programming/vercel.svg";
import Vite from "../../assets/programming/vite.png";
import VSCode from "../../assets/programming/vscode.svg";
import Vue from "../../assets/programming/vue.svg";
import VueX from "../../assets/programming/vuex.png";

const SkillSet = () => {
  const toolsList = [
    {
      title: "Languages which I speak",
      icons: [
        { src: Javascript, name: "Javascript" },
        { src: Golang, name: "Go" },
        { src: NodeJs, name: "NodeJs" },
        { src: PHP, name: "PHP" },
        { src: ReactJs, name: "ReactJs" },
        { src: ReactJs, name: "ReactNative" },
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
      title: "AWS",
      icons: [
        { src: AwsEC2, name: "AWS EC2" },
        { src: AwsRoute53, name: "AWS Route 53" },
        { src: AwsS3, name: "AWS S3 Bucket" },
      ],
    },

    {
      title: "Third Party API",
      icons: [
        { src: Lalamove, name: "Lalamove" },
        { src: Stripe, name: "Stripe" },
      ],
    },

    {
      title: "Other Tools",
      icons: [
        { src: Firebase, name: "Firebase" },
        { src: NextJs, name: "NextJs" },
        { src: Postman, name: "Postman" },
        { src: Vite, name: "Vite" },
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
                      className={` rounded-2xl h-full ${
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
