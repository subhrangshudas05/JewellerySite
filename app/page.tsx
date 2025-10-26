import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
    <main className="flex min-h-screen items-center justify-center"
    
    >
      <div className="flex flex-col text-xl sm:text-2xl federo sm:flex-row gap-4 items-center justify-center">
        {/* Jewellery Shop Button */}
        <Link href="/jewellery">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Jewellery Shop
          </button>
        </Link>

        {/* Clothes Shop Button */}
        <Link href="/clothes">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Clothes Shop
          </button>
        </Link>

        {/* Restaurant Button */}
        <Link href="/restaurant">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Restaurant
          </button>
        </Link>
      </div>
    </main>
  );
}
