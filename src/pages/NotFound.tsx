import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <div className="pt-24 px-4 min-h-screen">
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-6xl font-serif text-primary mb-6">404</h1>
            <p className="text-xl font-mono text-foreground mb-6">The page you're looking for seems to have been misplaced.</p>
            <Link to="/" className="font-mono text-accent hover:text-primary border-b border-accent pb-1 transition-colors">
              Return to the Library
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
