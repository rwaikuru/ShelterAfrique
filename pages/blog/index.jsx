import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Herosection from "../Herosection";
import { getAllPosts } from "../../lib/posts";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const allPostsData = await getAllPosts();

  return {
    props: {
      initialPosts: allPostsData.posts.nodes || [],
    },
    revalidate: 10, 
  };
}

export default function BlogHome({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        if (data && data.posts) {
          setPosts(data.posts.nodes);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); 
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Blog - Our Website</title>
      </Head>
      <Herosection />
      <section className="post-list mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-white bg-opacity-70 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative pb-2/3">
                {post.featuredImage && post.featuredImage.node && (
                  <Image
                    src={post.featuredImage.node.mediaDetails.file}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <div className="p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <div className="text-gray-700 line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </section>
    </>
  );
}
