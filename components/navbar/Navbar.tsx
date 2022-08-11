import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between  w-full mx-auto py-6 px-4 max-w-7xl items-center">
      <div className="uppercase font-extrabold text-xl cursor-pointer">
        <Link href="/">
          <a>Yolk's</a>
        </Link>
      </div>
      <ul className="flex space-x-8">
        <li className="text-lg text-gray-600 hover:text-gray-900 font-semibold">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="text-lg text-gray-600 hover:text-gray-900 font-semibold">
          <Link href="/business">
            <a>Business</a>
          </Link>
        </li>
        <li className="text-lg text-gray-600 hover:text-gray-900 font-semibold">
          <Link href="/sports">
            <a>Sports</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
