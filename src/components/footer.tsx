
export default function Footer() {
  return (
    <footer className="bg-gray-900 shadow shadow-purple-400 text-white py-4 text-center rounded-t-2xl" 
    style={{boxShadow: "5px 3px 15px purple "}}>
      <div className="container mx-auto flex flex-col md:flex-row gap-2 justify-center items-center">
        <div className="text-sm md:text-base px-2 py-1 rounded bg-red-400">My Portfolio</div>
        <div className="text-sm md:text-base text-purple-400">© 2023 My Portfolio. All rights reserved.</div>
      </div>
    </footer>
  );
}