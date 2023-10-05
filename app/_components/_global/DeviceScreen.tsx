import Image from "next/image";

const DeviceScreen = () => {
  return (
    <div className="device-notification flex-col items-center justify-center text-white text-center	">
      <a
        className="device-notification--logo flex flex-col items-center justify-center"
        href="/auth/login"
      >
        <Image
          src="/assets/img/logo.png"
          width={50}
          height={50}
          alt="Pixel Pawns"
        />
        <p>Pixel Pawns</p>
      </a>
      <p className="device-notification--message">
        Pixel Pawns has so much to offer that we must request you orient your
        device to horizontal/vertical or find a larger screen. You won't be
        disappointed.
      </p>
    </div>
  );
};

export default DeviceScreen;
