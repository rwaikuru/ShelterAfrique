// lib/posts.js
import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = /* GraphQL */ `
    query GetAllPosts {
      posts {
        nodes {
          date
          slug
          title
          excerpt
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const response = await graphqlRequest(query);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function getPostBySlug(slug) {
  const query = /* GraphQL */ `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        slug
        featuredImage {
          node {
            mediaDetails {
              file
              sizes {
                width
                height
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await graphqlRequest(query, { slug });
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    throw error;
  }
}
