import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center">
        <div className="flex flex-col bg-gray-800 gap-4 w-1/4 p-10 rounded-lg  shadow-md shadow-white/10">
          <Image src="/logo.png" alt="Logo" width={150} height={150} className="mx-auto mb-3"/>
          <p className="text-white text-center font-sans text-2xl">CCS Sitin Monitoring System</p>
          <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center" >Login</Link>
          <Link href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Registration</Link>
        </div>
    </div>
  );
}
