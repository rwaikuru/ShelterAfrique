// lib/graphqlRequest.js
export default async function graphqlRequest(query, variables = {}) {
    const url = "http://172.23.241.235/graphql";
    const headers = { 'Content-Type': 'application/json' };
  
    const res = await fetch(url, {
      headers,
      method: 'POST',
      body: JSON.stringify({ query, variables }),
    });
  
    if (!res.ok) {
      throw new Error(`GraphQL request failed with status ${res.status}`);
    }
  
    const resJson = await res.json();
    return resJson;
  }
  