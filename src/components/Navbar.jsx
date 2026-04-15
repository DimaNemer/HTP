// "use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { Linkedin, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     useEffect(() => {
//   if (isMobileOpen) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }

//   return () => {
//     document.body.style.overflow = "";
//   };
// }, [isMobileOpen]);

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (pathname === "/story") return null;

//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "About Us", href: "/about" },
//     { label: "What we do", href: "/what-we-do" },
//     { label: "Contact Us", href: "/contact" },
//     { label: "Blog", href: "/blog" },
//   ];

//   return (
//     // <header
//     //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//     //     isScrolled
//     //       ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-borderLight py-3"
//     //       : "bg-white md:bg-transparent py-3 md:py-5 border-b border-borderLight md:border-b-0"
//     //   }`}
//     // >
//     <header
//   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//     isMobileOpen
//       ? "bg-white shadow-sm border-b border-borderLight py-3"
//       : isScrolled
//       ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-borderLight py-3"
//       : "bg-white md:bg-transparent py-3 md:py-5 border-b border-borderLight md:border-b-0"
//   }`}
// >
//       <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center group">
//           <div className="relative w-48 h-10 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105">
//             <div className="relative w-48 h-14">
//               <Image
//                 src="/logo.png"
//                 alt="HTP Consultancy Logo"
//                 fill
//                 className="object-contain object-left"
//                 priority
//               />
//             </div>
//           </div>
//         </Link>

//         {/* Desktop / tablet nav stays the same */}
//   <nav className="hidden md:flex items-center gap-4 lg:gap-8">
//           {navLinks.map((link) => {
//             const isContact = link.label === "Contact Us";

//             return (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className={`font-medium transition-all uppercase text-md tracking-wide ${
//                   isContact
//                     ? "bg-cta hover:bg-ctaHover active:bg-[#C91F00] text-white px-5 py-2 rounded-lg font-semibold shadow-[0_4px_10px_rgba(255,42,0,0.25)] hover:shadow-[0_6px_18px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
//                     : isScrolled
//                     ? "text-primary hover:text-accent"
//                    : "text-white drop-shadow-sm hover:text-white"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}

//           <div className="flex items-center gap-4 ml-2">
//             <Link
//               href="https://www.linkedin.com/company/htp-consultancy/"
//               target="_blank"
//               className={`transition-colors ${
//                 isScrolled
//                   ? "text-textMuted hover:text-accent"
//                   : "text-white/70 hover:text-white"
//               }`}
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5" />
//             </Link>
//           </div>
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden transition-colors text-primary hover:text-accent"
//           onClick={() => setIsMobileOpen(true)}
//           aria-label="Open menu"
//         >
//           <Menu className="w-7 h-7" />
//         </button>
//       </div>

//       {/* Mobile Overlay */}
//       {isMobileOpen && (
//         <div
//           className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 md:hidden"
//           onClick={() => setIsMobileOpen(false)}
//         />
//       )}

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed inset-y-0 right-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
//           isMobileOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden flex flex-col p-8 overflow-y-auto`}
//       >
//         <button
//           className="absolute top-6 right-6 text-primary hover:text-accent transition-colors"
//           onClick={() => setIsMobileOpen(false)}
//           aria-label="Close menu"
//         >
//           <X className="w-7 h-7" />
//         </button>

//         <div className="relative w-45 h-20 mb-10 mt-2">
//           <Image
//             src="/logo.png"
//             alt="HTP Consultancy Logo"
//             fill
//             className="object-contain object-left"
//             priority
//           />
//         </div>

//         <div className="flex flex-col gap-5">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="text-base text-primary hover:text-accent font-medium transition-colors uppercase tracking-wide border-b border-borderLight pb-4"
//               onClick={() => setIsMobileOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}

//           <div className="flex items-center gap-6 mt-4 pt-4">
//             <Link
//               href="https://www.linkedin.com/company/htp-consultancy/"
//               target="_blank"
//               className="text-textMuted hover:text-accent transition-colors"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-6 h-6" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  if (pathname === "/story") return null;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "What we do", href: "/what-we-do" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isMobileOpen
          ? "bg-white shadow-sm border-b border-borderLight py-3"
          : isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-borderLight py-3"
          : "bg-white md:bg-transparent py-3 md:py-5 border-b border-borderLight md:border-b-0"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-48 h-10 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-48 h-14">
              <Image
                src="/logo.png"
                alt="HTP Consultancy Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => {
            const isContact = link.label === "Contact Us";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition-all uppercase text-md tracking-wide ${
                  isContact
                    ? "bg-cta hover:bg-ctaHover active:bg-[#C91F00] text-white px-5 py-2 rounded-lg font-semibold shadow-[0_4px_10px_rgba(255,42,0,0.25)] hover:shadow-[0_6px_18px_rgba(255,42,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                    : isScrolled
                    ? "text-primary hover:text-accent"
                    : "text-white drop-shadow-sm hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="flex items-center gap-4 ml-2">
            <Link
              href="https://www.linkedin.com/company/htp-consultancy/"
              target="_blank"
              className={`transition-colors ${
                isScrolled
                  ? "text-textMuted hover:text-accent"
                  : "text-white/70 hover:text-white"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </nav>

        <button
          className="md:hidden transition-colors text-primary hover:text-accent"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col p-8 overflow-y-auto`}
      >
        <button
          className="absolute top-6 right-6 text-primary hover:text-accent transition-colors"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="relative w-45 h-20 mb-10 mt-2">
          <Image
            src="/logo.png"
            alt="HTP Consultancy Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-primary hover:text-accent font-medium transition-colors uppercase tracking-wide border-b border-borderLight pb-4"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-6 mt-4 pt-4">
            <Link
              href="https://www.linkedin.com/company/htp-consultancy/"
              target="_blank"
              className="text-textMuted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}