import React from 'react';
import { useNavigate } from 'react-router-dom';
import cover from '../assets/books/adventure3/cover.jpg';
import page1 from '../assets/books/adventure3/page1.jpg';
import page2 from '../assets/books/adventure3/page2.jpg';
import page3 from '../assets/books/adventure3/page3.jpg';

const BookDetail3 = () => {
  const navigate = useNavigate();
  const images = [cover, page1, page2, page3];

  return (
    <section className="min-h-screen w-full px-4 py-10 bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-block text-blue-600 hover:underline text-lg font-medium"
        >
          ← Back to Books
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
          <h2 className="text-4xl font-extrabold text-green-700 mb-4 text-center">
            📚 Adventure Book 3
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-8">
            Get ready to giggle and gasp! 🌟 Each page is bursting with fun, silly creatures,
            and heartfelt lessons. A great companion for bedtime reading and story time!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {images.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={src}
                  alt={`Adventure 3 page ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail3;
