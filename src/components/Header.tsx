import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">
        <Link to ="/guillermo-garijo.github.io/">Home</Link>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li><Link to="/guillermo-garijo.github.io/about">About</Link></li>
          <li><Link to="/guillermo-garijo.github.io/projects">Projects</Link></li>
          <li><Link to="/guillermo-garijo.github.io/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
