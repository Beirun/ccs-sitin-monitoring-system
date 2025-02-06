import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center">
        <div className="bg-opacity-50 z-10 flex flex-col bg-gray-800 gap-4 xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-2/7 p-10 rounded-lg  shadow-md shadow-white/5">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto mb-3"
          />
          <h5 className="text-white text-center font-sans text-2xl">
            CCS Sitin Monitoring System
          </h5>
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition-colors duration-300"
          >
            Registration
          </Link>
        </div>
        <div className="blob-c z-0">
          <div className="shape-blob one"></div>
          <div className="shape-blob three"></div>
        </div>
      </div>
    </>
  );
}
