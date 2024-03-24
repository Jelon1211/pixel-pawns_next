"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/_components/_UI/_animation/Loading";

const RefreshPage = () => {
  const router = useRouter();

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/auth/refresh`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const bearerToken = await response.json();

        if (bearerToken.accessToken) {
          document.cookie = `bearerToken=${bearerToken.accessToken}; max-age=1800; path=/; Secure`;
          router.push("/game/dashboard");
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        throw new Error(`Error refreshing auth:, ${error}`);
      }
    };

    refreshAuth();
  }, [router]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Loading text="Game loading..." />
      </div>
      ;
    </>
  );
};

export default RefreshPage;
