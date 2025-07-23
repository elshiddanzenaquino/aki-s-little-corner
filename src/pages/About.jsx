
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 text-center mb-6">
          About Aki's Little Corner
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Where Imagination Begins and Young Minds Grow ✨📚
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">Who We Are</h2>
            <p className="text-gray-700">
              Aki’s Little Corner started as a dream of making reading fun and magical for every Filipino child.
              We are a small, passionate team of parents and educators who love books and believe in their power to shape bright futures.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To ignite a lifelong love of reading in young hearts by offering handpicked storybooks filled with imagination, kindness, and creativity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>📘 Storybooks for toddlers to pre-teens</li>
              <li>🎨 Activity books to develop creativity</li>
              <li>🧠 Learning materials for fun education</li>
              <li>💬 Local and international titles in Filipino and English</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>❤️ Child-safe and parent-approved</li>
              <li>🛍️ Easy to browse and order via our Facebook</li>
              <li>🚀 Regularly updated selection</li>
              <li>🧒 Curated with kids in mind</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">Meet Aki</h2>
            <p className="text-gray-700">
              This little corner was inspired by Aki’s love for books. Aki represents every curious child who dreams big and finds joy in every story.
            </p>
          </div>

          
        </section>
      </div>
    </div>
  );
};

export default About;
