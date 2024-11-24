import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
    <div className="container grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <img
            src="3.jpeg"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-3 py-1 text-sm">
            New
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Creative Card 1
          </h2>
          <p className="text-gray-600">
            This is the first card in the row. It uses Tailwind CSS for styling.
          </p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <img
            src="hoodie1.jpeg"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-3 py-1 text-sm">
            Featured
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Creative Card 2
          </h2>
          <p className="text-gray-600">
            This is the second card, styled the same as the first.
          </p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <img
            src="hoodie2.jpeg"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-3 py-1 text-sm">
            Trending
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Creative Card 3
          </h2>
          <p className="text-gray-600">
            This is the third card, completing the row.
          </p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
    
    
  
  
  
  );
}
