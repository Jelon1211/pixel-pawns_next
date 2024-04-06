"use client";
import CharacterTile from "@/app/_components/_dashboard/CharacterTile";
import getCookie from "@/app/_lib/getCookie";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const typeToClassMap: any = {
  ground: "text-stone-300",
  air: "text-blue-500",
};

const Page = () => {
  const [isNewCharacter, setIsNewCharacter] = useState<boolean>(true);
  const [character, setCharacter] = useState({
    name: "",
    description: "",
    isAlive: true,
    atk: 0,
    hp: 0,
    type: "ground",
    img: "/assets/img/logo.png",
  });
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const search = searchParams.get("name");
    if (!search) {
      setIsNewCharacter(false);
    }
    const bearer = getCookie("bearerToken");
    localStorage.removeItem("characters");

    const fetchCharacter = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_ADRESS}/pawns/${search}`,
        {
          headers: {
            Authorization: `Bearer ${bearer}`,
          },
        }
      );
      setCharacter(response.data);
    };

    fetchCharacter();
  }, []);

  const closeModal = (event: any) => {
    if (event.target.id === "modalBackdrop") {
      setSelectedCharacter(null);
    }
  };

  return (
    <>
      {isNewCharacter ? (
        <div>
          <CharacterTile
            img={character.img}
            name={character.name}
            hp={character.name}
            atk={character.name}
            isAlive={character.name}
            id={character.name}
            index={0}
            onClick={() => setSelectedCharacter(character)}
          />
          {selectedCharacter && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              id="modalBackdrop"
              onClick={closeModal}
            >
              <div
                className="bg-white p-4 rounded relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={character.img}
                  alt={character.name}
                  className="aspect-square object-cover rounded-md m-auto"
                  width={256}
                  height={256}
                />
                <div className="flex flex-col justify-center items-center bg-slate-700 rounded-lg p-1.5">
                  <ul>
                    <li>Name: {character.name}</li>
                    <li>Description: {character.description}</li>
                    <li>
                      Is Alive:{" "}
                      <span
                        className={
                          character.isAlive ? "text-lime-400" : "text-pink-900"
                        }
                      >
                        {character.isAlive ? "Yes" : "No"}
                      </span>
                    </li>
                    <li className="">
                      Attack:{" "}
                      <span className="text-black">{character.atk}</span>
                    </li>
                    <li className="">
                      Health:{" "}
                      <span className="text-rose-500">{character.hp}</span>
                    </li>
                    <li>
                      Type:{" "}
                      <span
                        className={
                          typeToClassMap[character.type] || "text-gray-500"
                        }
                      >
                        {selectedCharacter.type}
                      </span>
                    </li>
                  </ul>
                  <button
                    className="text-black absolute top-5 right-5 text-2xl"
                    onClick={() => setSelectedCharacter(null)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        router.push(`/game/dashboard`)
      )}
    </>
  );
};

export default Page;
