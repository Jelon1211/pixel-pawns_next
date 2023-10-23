import Image from "next/image";

interface VideoTileProps {
  thumbnail: string;
  name: string;
  description: string;
  isDead: boolean;
}

function VideoTile({ thumbnail, name }: VideoTileProps) {
  return (
    <div className="w-1/4 p-2">
      <Image
        src={thumbnail}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
        width={48}
        height={48}
      />
      <h3 className="mt-2 text-sm text-white text-center truncate">{name}</h3>
    </div>
  );
}

const Page = () => {
  const videos = [
    {
      id: 1,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 2,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 3,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 4,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 5,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 6,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 7,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 8,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 9,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 10,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 11,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
    {
      id: 12,
      thumbnail:
        "https://files.cults3d.com/uploaders/26529097/illustration-file/749a5fec-ebaa-4ffb-8d4e-3c05370fa78e/GOKU-SSJ4.jpg",
      name: "goku",
      description: "goku ssj4",
      isDead: false,
    },
  ];

  return (
    <div className="p-4 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-2">
          {videos.map((video) => (
            <VideoTile
              key={video.id}
              thumbnail={video.thumbnail}
              name={video.name}
              description={""}
              isDead={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
