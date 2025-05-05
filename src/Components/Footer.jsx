import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">AI Quiz Master</h2>
          <p className="mt-2 text-sm text-gray-400">
            Test your programming skills with AI-generated questions. Fast, smart, and fun.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/setup" className="hover:text-white transition">Start Quiz</Link></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#reviews" className="hover:text-white transition">Reviews</a></li>
          </ul>
        </div>

        {/* Contact or Feedback */}
        <div>
          <h3 className="text-lg font-semibold text-blue-300 mb-2">Get in Touch</h3>
          <p className="text-sm text-gray-400">
            Found a bug or have a feature idea? Reach out at:
          </p>
          <p className="text-blue-400 mt-1">work.manohar@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} AI Quiz Master. Built with 💙 by Manohar Kumar.
      </div>
    </footer>
  );
};

export default Footer;
