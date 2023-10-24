import CharacterTile from "@/app/_components/_dashboard/CharacterTile";
import { getCharacters } from "@/app/_services/getCharacters";

const Page = async () => {
  const characters = await getCharacters();

  return (
    <div className="p-4 min-h-screen">
      <div className="mx-auto">
        <div className="flex flex-wrap">
          {characters.map((character, index) => (
            <CharacterTile
              key={character.id}
              thumbnail={character.thumbnail}
              name={character.name}
              description={""}
              isDead={false}
              index={index}
              id={character.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
