import { CharacterTileProps } from "@/app/_types/game";
import Image from "next/image";

const CharacterTile = ({ thumbnail, name }: CharacterTileProps) => {
  return (
    <div className="w-1/4 p-2 flex flex-col items-center justify-center">
      <Image
        src={thumbnail}
        alt={name}
        className="aspect-square object-cover rounded-md"
        width={256}
        height={256}
      />
      <h3 className="mt-2 text-sm text-white text-center truncate">{name}</h3>
    </div>
  );
};

export default CharacterTile;
