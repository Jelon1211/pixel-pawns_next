"use client";
import CharacterTile from "@/app/_components/_dashboard/CharacterTile";
import { getCharacters } from "@/app/_services/getCharacters";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [characters, setCharacters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters();
        if (!response) {
          router.push(`"/auth/refresh"`);
        }
        setCharacters(response);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="p-4 min-h-screen">
      <div className="mx-auto">
        <div className="flex flex-wrap">
          {characters.map((character: any, index) => (
            <CharacterTile
              key={character._id}
              img={character.img}
              name={character.name}
              description={character.description}
              hp={character.hp}
              atk={character.atk}
              isAlive={character.isAlive}
              id={character._id}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
