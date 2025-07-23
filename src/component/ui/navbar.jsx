import { Link } from "react-router-dom";
import bookLogo from '../../assets/book.jpg'; // Make sure file name and path are correct

function NavBar() {
  return (
    <header className="w-full bg-gradient-to-r from-pink-100 via-blue-100 to-green-100 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img src={bookLogo} alt="Logo" className="w-12 h-12 object-contain rounded-full shadow" />
          <div>
            <h1 className="text-2xl font-extrabold text-blue-800">Aki's Little Corner</h1>
            <p className="text-xs text-gray-700">Where Imagination Begins</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm font-medium text-gray-800 mt-4 md:mt-0">
           <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <a href="https://www.facebook.com/profile.php?id=100064919905385" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
