import { useEffect, useState, memo } from "react";
import { Mail, Phone, Dribbble } from "lucide-react";

// Types
interface MousePosition {
  x: number;
  y: number;
}

interface SocialLink {
  icon: JSX.Element | string;
  url: string;
  username: string;
  isImage?: boolean;
}

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <Dribbble className="text-blue-500" />,
    url: "https://dribbble.com/logosolve",
    username: "logosolve"
  },
  {
    icon: "./behance.svg",
    url: "https://behance.net/logosolve",
    username: "logosolve",
    isImage: true
  }
];

// Memoized gradient component
const GradientFollower = memo(({ mousePosition }: { mousePosition: MousePosition }) => (
  <div
    className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
    style={{
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    }}
  />
));

// Extracted components
const ProfileImage = () => (
  <div className="relative lg:col-span-1 aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
    <img
      src="./raihan.png"
      alt="Profile"
      className="w-full h-full hover:mix-blend-normal transition-all duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
  </div>
);

const ContactInfo = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <Mail className="text-blue-500" />
      <a href="mailto:raihanchy8421@gmail.com" className="hover:text-blue-500 transition-colors">
        raihanchy8421@gmail.com
      </a>
    </div>
    <div className="flex items-center gap-3">
      <Phone className="text-blue-500" />
      <a href="tel:+8801884276759" className="hover:text-blue-500 transition-colors">
        +88 01884276759
      </a>
    </div>
  </div>
);

function App() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <GradientFollower mousePosition={mousePosition} />

      <div className="relative z-20 container mx-auto px-6 py-16">
        {/* Logo */}
        <div className="flex justify-center mb-20">
          <div className="flex items-center gap-2">
            <img src="./logoslove.png" className="rounded-lg w-1/3 mx-auto" alt="logoslove" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <ProfileImage />

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold">
                <span className="text-blue-500">Hi, I am</span>
                <span className="ml-2">Raihan</span>
              </h1>
              <h2 className="text-2xl text-gray-400">
                A professional Logo & Brand Identity Designer
              </h2>
            </div>

            {/* Portfolio Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-500">My Portfolio:</h3>
              <div className="space-y-4">
                {SOCIAL_LINKS.map((link, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {link.isImage ? (
                      <img src={link.icon as string} alt={link.username} />
                    ) : (
                      link.icon
                    )}
                    <a href={link.url} className="block hover:text-blue-500 transition-colors">
                      {link.username}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <ContactInfo />
          </div>
        </div>

        {/* Logo Samples */}
        <div className="mt-32">
          <h3 className="lg:text-3xl text-xl font-bold text-center text-blue-500 mb-16">
            Logo Sample
          </h3>
          <img src="./logo.png" alt="logo sample" className="mx-auto rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default App;


