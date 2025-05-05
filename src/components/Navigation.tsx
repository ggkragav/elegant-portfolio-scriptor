import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, PenTool, Newspaper, User, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/visual-work", icon: PenTool, label: "Work" },
    { path: "/written-work", icon: Newspaper, label: "Blog" },
    { path: "/about", icon: User, label: "About" },
    { path: "/contact", icon: Mail, label: "Contact" }
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center hidden md:block"
    >
      <div className="px-5 py-2.5 bg-gradient-to-r from-[#e0f7ff] via-[#f0f5ff] to-[#e6e6ff] backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(155,215,255,0.4)] border border-[#d0edff]/40 max-w-fit mx-auto">
        <nav className="flex items-center justify-between space-x-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== "/" && location.pathname.startsWith(item.path));
            const isHomeItem = item.path === "/";
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId={isHomeItem ? "homeNavIndicator" : "desktopNavIndicator"}
                      className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  className="relative z-10 flex items-center" 
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <item.icon
                    size={16}
                    className={`mr-1.5 transition-colors duration-200 ${
                      isActive ? "text-black dark:text-white" : "text-[#5d7b9a] dark:text-[#9ca9b3]"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-black dark:text-white font-semibold" : "text-[#5d7b9a] dark:text-[#9ca9b3]"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Navigation;