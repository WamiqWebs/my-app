import Link from "next/link"
export default function Icons() {
    return (
        <>
            <div className="bg-gray-900 text-white flex flex-wrap justify-center items-center gap-4 p-2 h-auto rounded-b-2xl">
                <Link href="about-us"  className="text-white hover:text-purple-400 border-b-2 border-transparent hover:border-purple-500">
                    About us
                </Link>
                <Link href="new-items" className="text-white hover:text-purple-400 border-b-2 border-transparent hover:border-purple-500">
                    New Items
                </Link>
                 <Link href="favourites" className="text-white hover:text-purple-400 border-b-2 border-transparent hover:border-purple-500">
                    Favourites
                </Link>

            </div>
        </>
    )
}