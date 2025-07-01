const steps = [
  {
    title: "Create an Account",
    description: "Sign up and start exploring events instantly."
  },
  {
    title: "Add or Join Events",
    description: "Create your own or join existing events in just a click."
  },
  {
    title: "Get Notified & Attend",
    description: "Receive reminders and manage your event activities."
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
