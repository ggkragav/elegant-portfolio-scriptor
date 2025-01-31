import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { FaPen, FaBook, FaFeather, FaQuoteLeft } from 'react-icons/fa';
import { BiBookHeart } from 'react-icons/bi';

type Post = {
  title: string;
  category: string;
  year: string;
  content: string;
  coverImage?: string;
  image?: string;
  author: string;
  readingTime: string;
}

type Posts = {
  [key: string]: Post;
}

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically come from an API or CMS
  const posts: Posts = {
    'the-silent-hour': {
      title: "The Silent Hour",
      category: "Poetry Collection",
      year: "2023",
      content: `A collection of poems exploring the quiet moments between dusk and dawn, where thoughts wander freely and emotions run deep. Each verse captures the essence of solitude and self-discovery.

In the depths of night, when the world falls silent,
Words flow like water, emotions run deep.
Each verse a testament to moments lived,
Stories untold, waiting to be freed.

Through metaphor and rhythm we explore,
The spaces between thoughts and dreams.
Where solitude becomes our teacher,
And silence speaks volumes unseen.`,
      coverImage: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80",
      author: "Kishore Ragav",
      readingTime: "5 min read"
    },
    'urban-whispers': {
      title: "Urban Whispers",
      category: "Short Stories",
      year: "2023",
      content: "Tales of city life and the stories that unfold in the shadows of skyscrapers. A collection that captures the essence of modern urban existence. Each story explores the interconnected lives of city dwellers, their dreams, struggles, and moments of serendipity.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
      author: "Kishore Ragav",
      readingTime: "10 min read"
    },
    'digital-renaissance': {
      title: "Digital Renaissance",
      category: "Tech Essays",
      year: "2023",
      content: "Exploring the intersection of technology and creativity in the modern age. How digital tools are reshaping our creative processes and enabling new forms of artistic expression. A deep dive into the future of digital creativity.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      author: "Kishore Ragav",
      readingTime: "8 min read"
    },
    'mindful-moments': {
      title: "Mindful Moments",
      category: "Personal Blog",
      year: "2023",
      content: "A series of reflections on mindfulness, creativity, and personal growth in the digital age. Exploring the balance between technology and well-being in our fast-paced world.",
      image: "https://images.unsplash.com/photo-1506252374453-ef5237291d83?auto=format&fit=crop&q=80",
      author: "Kishore Ragav",
      readingTime: "7 min read"
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 dark:from-rose-950/40 dark:via-sky-950/40 dark:to-violet-950/40">
        <div className="pt-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl mb-4">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <a
              href="/written-work"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              ← Back to Written Work
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 dark:from-rose-950/40 dark:via-sky-950/40 dark:to-violet-950/40">
        <div className="pt-24 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Link */}
              <a
                href="/written-work"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8"
              >
                ← Back to Written Work
              </a>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.year}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl mb-4">{post.title}</h1>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Author</div>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={post.image || post.coverImage}
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>

              {/* Article Content */}
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <div className="whitespace-pre-line">
                  {post.content}
                </div>
              </article>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-serif text-2xl mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <button className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                    Twitter
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                    LinkedIn
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                    Facebook
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost; 