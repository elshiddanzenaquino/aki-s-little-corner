import React from 'react';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  
  const books = [
  {
    id: 1,
    title: "Adventure Book 1",
    image: book1,
    route: "/book/adventure1",
  },
  {
    id: 2,
    title: "Adventure Book 2",
    image: book2,
    route: "/book/adventure2",
  },
  {
    id: 3,
    title: "Adventure Book 3",
    image: book3,
    route: "/book/adventure3",
  },
];

  return (
    
    <section className="min-h-screen w-full px-4 py-10 bg-gradient-to-br from-blue-50 via-pink-50 to-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-pink-600 mb-2">📚 Welcome to Aki's World!</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Magical books for kids and young readers. Dive into our little corner of wonder!
        </p>

        {/* Why Books Matter */}
        <section className="w-full px-4 py-8 bg-gradient-to-br from-yellow-50 to-pink-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Why Books Matter for Kids 📚💡
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Books are more than just paper and ink—they’re portals to magical worlds,
              fun adventures, and big dreams! ✨ Reading helps kids spark creativity, 
              build empathy, and grow their imagination. At Aki’s Little Corner, we 
              believe every child deserves to fall in love with stories that make them 
              smile, wonder, and learn. 🌈💖
            </p>
          </div>
        </section>

        {/* Book Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {books.map((book) => (
            <div
            key={book.id}
            onClick={() => navigate(book.route)}
            className="bg-white rounded-xl shadow-md p-5 transition hover:scale-105 hover:shadow-xl cursor-pointer"
            >
            <img
                src={book.image}
                alt={book.title}
                className="h-48 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">{book.title}</h3>
            <p className="text-sm text-gray-600 mt-2">
                Fun stories that spark creativity and joy.
            </p>
            </div>
        ))}
        </div>

        {/* Facebook CTA */}
        <button
          onClick={() =>
            window.open('https://www.facebook.com/profile.php?id=100064919905385')
          }
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all text-lg shadow-lg"
        >
          🌐 Visit Our Facebook Page
        </button>
      </div>
    </section>
  );
}

export default Dashboard;
