import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '../../lib/posts';

export async function getStaticPaths() {
  const allPostsData = await getAllPosts();
  const paths = allPostsData.posts.nodes.map(post => ({
    params: { postSlug: post.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostBySlug(params.postSlug);

  return {
    props: {
      post: postData.post
    }
  };
}

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <p>Post not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{post.title}</h1>
        {post.featuredImage && post.featuredImage.node && (
          <div className="mb-6">
            <Image
              src={post.featuredImage.node.mediaDetails.file}
              alt={post.title}
              width={post.featuredImage.node.mediaDetails.sizes[0].width}
              height={post.featuredImage.node.mediaDetails.sizes[0].height}
              className="rounded-lg"
            />
          </div>
        )}
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}
