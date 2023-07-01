import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

// import dataProject1 from "./project_1";

export default function Project() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project");
  const router = useRouter();
  //   const config = dataProject1;

  useEffect(() => {
    if (!project) router.push("/");
  });

  return <div></div>;
}
