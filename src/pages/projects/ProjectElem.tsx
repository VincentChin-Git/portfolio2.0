import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

import EyeIcon from "@/assets/icons/eye.png";

export default function ProjectElem({
  cover,
  title,
  url,
}: {
  cover: StaticImageData;
  title: string;
  url: string;
}) {
  const router = useRouter();
  return (
    <div className=" relative w-full sm:w-1/2 lg:w-1/3 box-border p-4">
      <Image src={cover} alt="" className=" rounded-xl" />
      <div
        className="absolute right-0 bottom-0 m-auto left-0 top-0 p-4 opacity-0 hover:opacity-100 transition-all cursor-pointer"
        onClick={() => router.push(url)}
      >
        <div
          className="  w-full h-full rounded-xl flex items-center justify-center gap-x-4 "
          style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
        >
          <Image
            src={EyeIcon}
            alt=""
            className=" w-[12.5%] p-1  rounded-full"
          />
          <div className=" text-white">{title}</div>
        </div>
      </div>
    </div>
  );
}
