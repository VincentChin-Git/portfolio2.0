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

export default function Project() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project");
  const router = useRouter();
  const config =
    project == "1"
      ? dataProject1
      : project == "2"
      ? dataProject2
      : project == "3"
      ? dataProject3
      : { title: "", desc: "", imgList: [] };

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
        <div className=" flex flex-wrap  items-center gap-y-8 ">
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
