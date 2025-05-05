import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, PenTool, Newspaper, User, Mail } from "lucide-react";

const MobileNavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/visual-work", icon: PenTool, label: "Work" },
    { path: "/written-work", icon: Newspaper, label: "Blog" },
    { path: "/about", icon: User, label: "About" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden"
    >
      <div className="px-2 py-3 backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border-primary/10 border rounded-sm shadow-lg">
        <nav className="flex items-center justify-between space-x-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== "/" && location.pathname.startsWith(item.path));
            const isHomeItem = item.path === "/";

            // Special styling for Home button
            if (isHomeItem) {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative flex flex-col items-center justify-center px-3 py-2"
                >
                  <AnimatePresence>
                    {isHome && (
                      <motion.div
                        layoutId="mobileHomeIndicator"
                        className="absolute inset-0 bg-primary/10"
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
                      size={20}
                      className={`transition-colors duration-200 ${
                        isHome ? "text-primary" : "text-accent"
                      }`}
                    />
                  </motion.div>
                  <span
                    className={`text-xs mt-1 font-sans transition-colors duration-200 ${
                      isHome ? "text-primary font-semibold" : "text-accent"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            }

            // Regular items
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
                      className="absolute inset-0 bg-primary/10"
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
                    size={20}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-accent"
                    }`}
                  />
                </motion.div>
                <span
                  className={`text-xs mt-1 font-sans transition-colors duration-200 ${
                    isActive ? "text-primary font-semibold" : "text-accent"
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