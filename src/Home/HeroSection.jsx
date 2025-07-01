export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Events that Matter</h1>
      <p className="text-lg mb-6 max-w-xl mx-auto">Discover, join, or create events and grow your network through meaningful experiences.</p>
      <div className="space-x-4">
        <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded hover:bg-gray-200">Browse Events</button>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded hover:bg-gray-200">Add Your Event</button>
      </div>
    </section>
  );
}
