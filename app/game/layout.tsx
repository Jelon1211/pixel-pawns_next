import Sidebar from "../_components/_UI/_sidebar/Sidebar";
import "../../public/assets/css/main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-5/6 ">{children}</div>
      <Sidebar />
    </>
  );
}
