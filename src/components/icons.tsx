import Link from "next/link"
export default function Icons() {
    return (
        <>
            <div className="w-screen ml-[calc(50%-50vw)] flex justify-center items-center">
                <div className="bg-gray-900 text-white flex flex-wrap justify-center items-center gap-4 p-2 h-auto rounded-b-2xl shadow shadow-purple-400 fixed top-15 w-sm z-50 text-xs sm:text-sm md:text-base">
                    <Link href="about-us" className="text-white hover:text-purple-400 border-b-2 border-transparent hover:border-purple-500">
                        About us
                    </Link>
                    <Link href="new-items" className="text-white hover:text-purple-400 border-b-2 border-transparent hover:border-purple-500">
                        New Items
                    </Link>
                    <Link href="favourites" className="text-white hover:text-purple-400 border-b-2 border-transparent hover:border-purple-500">
                        Favourites
                    </Link>
                </div>
            </div>
        </>
    )
}