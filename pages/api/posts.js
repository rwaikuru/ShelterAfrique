// pages/api/posts.js
import { getAllPosts } from '../../lib/posts';

export default async function handler(req, res) {
  try {
    const allPostsData = await getAllPosts();
    res.status(200).json({ posts: allPostsData.posts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
