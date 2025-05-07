import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, PenTool, User } from "lucide-react";

const MobileNavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/visual-work", icon: PenTool, label: "Work" },
    { path: "/about", icon: User, label: "About" }
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden"
    >
      <div className="px-6 py-3 backdrop-blur-xl bg-white/40 border-[#7EB6CD]/10 border rounded shadow-[0_4px_15px_rgba(126,182,205,0.3)]">
        <nav className="flex items-center justify-between space-x-8 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== "/" && location.pathname.startsWith(item.path));
            const isHomeItem = item.path === "/";

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center justify-center px-3 py-2"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavIndicator"
                      className="absolute inset-0 bg-[#3A7393]/10 rounded shadow-[0_0_10px_rgba(126,182,205,0.2)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <item.icon
                    size={22}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-[#2A5B76] drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]" : "text-[#3A7393]"
                    }`}
                  />
                </motion.div>
                <span
                  className={`text-xs font-['Manrope'] font-bold tracking-wide transition-colors duration-200 ${
                    isActive ? "text-[#2A5B76] drop-shadow-[0_1px_2px_rgba(126,182,205,0.3)]" : "text-[#3A7393]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileNavBar; 