// Define the base URL for API routes
const API_BASE_URL = '/api';

// Define the API routes
export const API_ROUTES = {
  BLOG_SEO_ARTICLE: `${API_BASE_URL}/blog-seo-article`,
  COLD_EMAIL: `${API_BASE_URL}/cold-email`,
  // Add more routes as needed
};

// Helper function to get the full URL for a route
export const getApiUrl = (route: keyof typeof API_ROUTES): string => {
  return API_ROUTES[route];
};

// Export individual route constants for direct use
export const BLOG_SEO_ARTICLE_ROUTE = API_ROUTES.BLOG_SEO_ARTICLE;
export const COLD_EMAIL_ROUTE = API_ROUTES.COLD_EMAIL;