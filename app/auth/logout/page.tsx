"use client";
import Loading from "@/app/_components/_UI/_animation/Loading";
import loginService from "@/app/_services/loginService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const logOutUser = async () => {
      try {
        const respone = await loginService.logOut();
        if (respone.status === 204) {
          setErrorMsg("You were not logged in!");
        }

        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        router.push("/");
      } catch (err) {
        throw err;
      }
    };
    logOutUser();
  }, [router]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {errorMsg ? (
          <div>{errorMsg}</div>
        ) : (
          <Loading text="Logging out in safe mode..." />
        )}
      </div>
    </>
  );
};

export default Page;
