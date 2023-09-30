import Form from "@/app/_components/_auth/Form";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Link href="/">
          <Image
            src="/images/6632848.png"
            width={100}
            height={100}
            alt=""
            priority
          />
        </Link>
        <Form />
      </div>
    </>
  );
};

export default Page;
