// pages/api/projects.js

export default async function handler(req, res) {
    const { country } = req.query;
  
    if (!country) {
      return res.status(400).json({ error: 'Country parameter is required' });
    }
  
    try {
      // Fetch projects from WordPress based on the country
      const response = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/projects?country=${country}`);
      const projects = await response.json();
  
      if (!response.ok) {
        throw new Error(`Error fetching projects: ${projects.message}`);
      }
  
      // Return the projects data
      res.status(200).json(projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  }
  