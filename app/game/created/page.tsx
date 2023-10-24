"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [isNewCharacter, setIsNewCharacter] = useState<boolean>(true);
  const [character, setCharacter] = useState({ name: "" });

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const search = searchParams.get("name");
    if (!search) {
      setIsNewCharacter(false);
    }
    setCharacter((prevState) => ({ ...prevState, name: search }));
  }, []);

  return (
    <>
      {isNewCharacter ? (
        <div>{character.name}</div>
      ) : (
        router.push(`/game/dashboard`)
      )}
    </>
  );
};

export default Page;
