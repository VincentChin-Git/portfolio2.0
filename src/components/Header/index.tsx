import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import LinesIcon from "@/assets/svg/LinesIcon";
import XIcon from "@/assets/svg/XIcon";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [emailInfo, setEmailInfo] = useState({ name: "", email: "", msg: "" });
  const router = useRouter();
  const toast = useToast();
  const handleSentEmail = async () => {
    try {
      const res = await fetch("/api/sendemail", {
        body: JSON.stringify({ ...emailInfo }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      await res.json();
      if (res.ok) {
        setEmailInfo({ name: "", email: "", msg: "" });
        setShowContact(false);
        return toast({
          title: "Success",
          description:
            "Thank you for your interest. I will contact you shortly.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const navs = [
    { do: () => router.push("/"), title: "Home" },
    { do: () => router.push("/skillset"), title: "Skills Set" },
    { do: () => router.push("/projects"), title: "Projects" },
    { do: () => setShowContact(!showContact), title: "Contact Me" },
  ];
  return (
    // switch to mobile mode in md
    <div className="mx-auto container relative ">
      <div className="relative flex justify-between items-center h-[70px] bg-[#fffbed] z-50 px-8">
        <div
          className="font-bold text-2xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          VINCENT
        </div>
        <div className=" flex-1"></div>
        <div className="relative hidden md:flex  items-center gap-10 text-lg animated">
          {navs.map((item) => {
            return (
              <div
                className=" hover:text-primary cursor-pointer font-medium"
                key={item.title}
                onClick={item.do}
              >
                {item.title}
              </div>
            );
          })}
        </div>

        <div
          className="cursor-pointer md:hidden"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <XIcon color={"#333"} size="40" />
          ) : (
            <LinesIcon color={"#333"} size="40" />
          )}
        </div>
      </div>
      <div
        className={`sm:hidden absolute top-[70px] overflow-hidden px-8 ${
          show ? "h-[260px]" : "h-0"
        } animated w-screen bg-[#fffbed]`}
        style={{
          boxShadow: show
            ? "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
            : undefined,
        }}
      >
        {navs.map((nav) => (
          <div
            key={nav.title}
            className=" font-medium my-8 cursor-pointer hover:font-bold"
            onClick={nav.do}
          >
            {nav.title}
          </div>
        ))}
      </div>

      {showContact && (
        <div
          className="fixed left-0 top-0 right-0 bottom-0 bg-black z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          onClick={() => setShowContact(false)}
        >
          <div
            className=" bg-white rounded-xl max-w-[500px] w-[90%] p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" flex justify-between items-center">
              <div className=" font-bold text-lg sm:text-xl ml-2">
                Contact Me
              </div>
              <div
                className=" cursor-pointer"
                onClick={() => setShowContact(false)}
              >
                <XIcon size="40px" color="#333" />
              </div>
            </div>

            {/* input box */}
            <div className=" my-4 mx-2 flex flex-col gap-y-4">
              <Input
                value={emailInfo.name}
                onChange={(e) =>
                  setEmailInfo({ ...emailInfo, name: e.target.value })
                }
                placeholder="Name"
              />

              <Input
                value={emailInfo.email}
                onChange={(e) =>
                  setEmailInfo({ ...emailInfo, email: e.target.value })
                }
                placeholder="Email"
              />

              <Textarea
                placeholder="Leave your msg here..."
                rows={8}
                value={emailInfo.msg}
                onChange={(e) =>
                  setEmailInfo({ ...emailInfo, msg: e.target.value })
                }
              />
            </div>
            <div className=" mx-2 my-4">
              <Button
                bg={"#D6E8DB"}
                _hover={{ backgroundColor: "#C1D0B5" }}
                px={6}
                onClick={handleSentEmail}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
