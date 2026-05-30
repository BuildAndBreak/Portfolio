export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-16">
      <div className="font-bold">tiago.dev</div>

      <div className="flex gap-6 text-sm text-gray-600">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
