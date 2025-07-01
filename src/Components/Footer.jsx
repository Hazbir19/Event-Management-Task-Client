export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-xl font-bold mb-2 text-white">Eventify</h4>
          <p>Your go-to platform for creating and joining impactful events.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">Quick Links</h5>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Add Event</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-white">Contact</h5>
          <p>Email: support@eventify.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">© {new Date().getFullYear()} Eventify. All rights reserved.</div>
    </footer>
  );
}
