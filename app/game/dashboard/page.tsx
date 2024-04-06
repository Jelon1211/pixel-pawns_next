"use client";
import CharacterTile from "@/app/_components/_dashboard/CharacterTile";
import { getCharacters } from "@/app/_services/getCharacters";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { downloadBase64File } from "@/app/_lib/downloadBase64File";

const typeToClassMap: any = {
  ground: "text-stone-300",
  air: "text-blue-500",
};

const Page = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const storedCharacters = localStorage.getItem("characters");
        let response;

        if (storedCharacters) {
          response = JSON.parse(storedCharacters);
        } else {
          response = await getCharacters();

          if (!response) {
            router.push("/auth/refresh");
            return;
          }
          localStorage.setItem("characters", JSON.stringify(response));
        }
        setCharacters(response);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    fetchCharacters();
  }, [router]);

  const closeModal = (event: any) => {
    if (event.target.id === "modalBackdrop") {
      setSelectedCharacter(null);
    }
  };

  const haandleDownloadClick = () => {
    if (selectedCharacter && selectedCharacter.img) {
      const fileName = `${selectedCharacter.name.replace(/\s+/g, "_")}.png`;
      downloadBase64File(selectedCharacter.img, fileName);
    }
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="mx-auto">
        <div className="flex flex-wrap">
          {characters.map((character: any, index) => (
            <CharacterTile
              key={character._id}
              img={character.img}
              name={character.name}
              hp={character.hp}
              atk={character.atk}
              isAlive={character.isAlive}
              id={character._id}
              index={index}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>
      </div>
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
              src={selectedCharacter.img}
              alt={selectedCharacter.name}
              className="aspect-square object-cover rounded-md m-auto"
              width={256}
              height={256}
            />
            <div className="flex flex-col justify-center items-center bg-slate-700 rounded-lg p-1.5">
              <ul>
                <li>Name: {selectedCharacter.name}</li>
                <li>Description: {selectedCharacter.description}</li>
                <li>
                  Is Alive:{" "}
                  <span
                    className={
                      selectedCharacter.isAlive
                        ? "text-lime-400"
                        : "text-pink-900"
                    }
                  >
                    {selectedCharacter.isAlive ? "Yes" : "No"}
                  </span>
                </li>
                <li className="">
                  Attack:{" "}
                  <span className="text-black">{selectedCharacter.atk}</span>
                </li>
                <li className="">
                  Health:{" "}
                  <span className="text-rose-500">{selectedCharacter.hp}</span>
                </li>
                <li>
                  Type:{" "}
                  <span
                    className={
                      typeToClassMap[selectedCharacter.type] || "text-gray-500"
                    }
                  >
                    {selectedCharacter.type}
                  </span>
                </li>
              </ul>
              <button
                className="text-black absolute top-5 right-5 text-2xl bg-white rounded-md"
                onClick={() => setSelectedCharacter(null)}
              >
                X
              </button>
              <Image
                src={"/assets/img/download.svg"}
                alt="Download"
                width={30}
                height={30}
                className="text-black absolute top-5 right-12 cursor-pointer bg-white rounded-md"
                onClick={haandleDownloadClick}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
