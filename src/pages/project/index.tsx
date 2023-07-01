import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Project() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project");
  const router = useRouter();

  useEffect(() => {
    if (!project) router.push("");
  }, []);

  return <div></div>;
}
