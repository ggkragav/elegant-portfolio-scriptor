import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, PenTool, User } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/visual-work", icon: PenTool, label: "Work" },
    { path: "/about", icon: User, label: "About" }
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center hidden md:block"
    >
      <div className="px-6 py-3 backdrop-blur-xl bg-white/40 border-[#7EB6CD]/10 border rounded shadow-[0_4px_15px_rgba(126,182,205,0.25)] max-w-fit mx-auto">
        <nav className="flex items-center justify-between space-x-8">
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
                      className="absolute inset-0 bg-[#3A7393]/10 rounded shadow-[0_0_10px_rgba(126,182,205,0.2)]"
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
                    size={17}
                    className={`mr-1.5 transition-colors duration-200 ${
                      isActive ? "text-[#2A5B76] drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]" : "text-[#3A7393]"
                    }`}
                  />
                  <span
                    className={`text-sm md:text-base font-['Manrope'] font-bold tracking-wide transition-colors duration-200 ${
                      isActive ? "text-[#2A5B76] drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]" : "text-[#3A7393]"
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