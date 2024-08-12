"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import ImgSuid from "../../../public/download (2).png";
import { useRouter } from "next/navigation";

const NavbarPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (scrollPosition > currentScrollPos || currentScrollPos <= 0) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-orange-600 bg-opacity-70 backdrop-blur-md`}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
          <div className="relative flex h-16 items-center justify-between">
            {/* Gambar di sebelah kiri */}
            <div className="flex items-center">
              <Image src={ImgSuid} alt="Logo" width={159} height={60} />
            </div>

            {/* Logo dan tautan navigasi di sebelah kanan */}
            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive("/") ? "text-white bg-gray-900 border-b-2 border-white" : "text-gray-300 hover:text-white hover:border-b-4 hover:border-white"
                    }`}
                  >
                    work
                  </a>
                  <a
                    href="/team"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive("/team") ? "text-white bg-gray-900 border-b-5 border-white" : "text-gray-300 hover:text-white hover:border-b-4 hover:border-white"
                    }`}
                  >
                    about
                  </a>
                  <a
                    href="/projects"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive("/projects") ? "text-white bg-gray-900 border-b-2 border-white" : "text-gray-300 hover:text-white hover:border-b-4 hover:border-white"
                    }`}
                  >
                    services
                  </a>
                  <a
                    href="/calendar"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive("/calendar") ? "text-white bg-gray-900 border-b-2 border-white" : "text-gray-300 hover:text-white hover:border-b-4 hover:border-white"
                    }`}
                  >
                    ideas
                  </a>
                  <a
                    href="/calendar"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive("/calendar") ? "text-white bg-gray-900 border-b-2 border-white" : "text-gray-300 hover:text-white hover:border-b-4 hover:border-white"
                    }`}
                  >
                    careers
                  </a>
                  <a
                    href="/calendar"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive("/calendar") ? "text-white bg-gray-900 border-b-2 border-white" : "text-gray-300 hover:text-white hover:border-b-4 hover:border-white"
                    }`}
                  >
                    contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;
