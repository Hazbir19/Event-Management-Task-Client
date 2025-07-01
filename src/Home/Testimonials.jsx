const testimonials = [
  {
    name: "Shakil H.",
    message: "I found a bootcamp through this platform that changed my career!"
  },
  {
    name: "Rehana A.",
    message: "Great for discovering nearby events and communities."
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-10">What People Are Saying</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-md">
            <p className="italic text-gray-700">“{t.message}”</p>
            <p className="mt-4 font-semibold text-gray-900">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
