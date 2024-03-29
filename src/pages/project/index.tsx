import { Image } from "antd";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dataProject1 from "@/utils/project_1";
import dataProject2 from "@/utils/project_2";
import dataProject3 from "@/utils/project_3";
import dataProject4 from "@/utils/project_4";

export default function Project() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project");
  const router = useRouter();
  let config: {
    title: string;
    desc: string;
    imgList: { src: string; name: string }[];
    downloadLink: string;
  };
  switch (project) {
    case "1":
      config = dataProject1;
      break;
    case "2":
      config = dataProject2;
      break;
    case "3":
      config = dataProject3;
      break;
    case "4":
      config = dataProject4;
      break;
    default:
      config = { title: "", desc: "", imgList: [], downloadLink: "" };
  }

  useEffect(() => {
    if (!project) router.push("/");
  });

  return (
    <div className=" flex flex-col min-h-screen ">
      <NextSeo
        title="Vincent Chin | Portfolio"
        description="This is a portfolio website made by Vincent"
      />
      <Header />

      <div className=" container mx-auto my-12 text-center">
        <div className=" font-bold my-8 text-2xl sm:text-3xl">
          {config.title}
        </div>
        <div className=" my-8 sm:text-xl mx-4">{config.desc}</div>
        {config.downloadLink && (
          <a
            className="text-primary font-semibold underline"
            href={config.downloadLink}
          >
            App Preview
          </a>
        )}
        <div className=" flex flex-wrap  items-center gap-y-8 my-8">
          {config.imgList.map((img, iIndex) => {
            return (
              <div className=" w-full lg:w-1/2 box-border px-4 " key={iIndex}>
                <Image
                  className="hover:scale-110 cursor-pointer max-h-[400px] object-contain"
                  src={img.src}
                  alt=""
                />
                <div className=" my-4">{img.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1"></div>
      <Footer />
    </div>
  );
}
