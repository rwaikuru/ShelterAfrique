export default function getAllPosts(){
    const query = {
        query: `
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
    }
  }
  categories {
    nodes {
      name
      slug
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}`
    }
}