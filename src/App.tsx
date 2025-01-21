import { useEffect, useState } from "react";
import { Mail, Phone,  Dribbble } from "lucide-react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Gradient follower */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-6 py-16">
        {/* Logo */}
        <div className="flex justify-center mb-20">
          <div className="flex items-center gap-2">
            <img src="./logoslove.png" className="rounded-lg w-1/3 mx-auto" alt="logoslove" />
          </div>
        </div>

     {/* Hero Section */}
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
  {/* Profile Image */}
  <div className="relative lg:col-span-1 aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
    <img
      src="./raihan.png"
      alt="Profile"
      className="w-full h-full hover:mix-blend-normal transition-all duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
  </div>

  {/* Content Section */}
  <div className="lg:col-span-2 space-y-8">
    <div className="space-y-6">
      <h1 className="text-6xl font-bold">
        <span className="text-blue-500">Hi, I am</span>
        <span className="ml-2"> Raihan</span>
      </h1>
      <h2 className="text-2xl text-gray-400">
        A professional Logo & Brand Identity Designer
      </h2>
    </div>

    {/* Portfolio Links */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-blue-500">
        My Portfolio:
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Dribbble className="text-blue-500" />
          <a
            href="https://dribbble.com/logosolve"
            className="block hover:text-blue-500 transition-colors"
          >logosolve</a>
        </div>
        <div className="flex items-center gap-3">
          <img src="./behance.svg" alt="behance" />
          <a
            href="https://behance.net/logosolve"
            className="block hover:text-blue-500 transition-colors"
          >logosolve</a>
        </div>
      </div>
    </div>

    {/* Contact Info */}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="text-blue-500" />
        <a
          href="mailto:raihanchy8421@gmail.com"
          className="hover:text-blue-500 transition-colors"
        >
          raihanchy8421@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="text-blue-500" />
        <a
          href="tel:+8801884276759"
          className="hover:text-blue-500 transition-colors"
        >
          +88 01884276759
        </a>
      </div>
    </div>
  </div>
</div>


        {/* Logo Samples */}
        <div className="mt-32">
          <h3 className="lg:text-3xl text-xl  font-bold text-center text-blue-500 mb-16">
            Logo Sample
          </h3>
          <img
            src="./logo.png"
            alt="logo sample"
            className="mx-auto rounded-2xl"
          />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="aspect-video flex items-center justify-center">
                  <Diamond size={48} className="text-blue-500" />
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
