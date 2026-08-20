/* Project Service - Handles fetching real estate projects */

import { fetchApi } from './api';
import { projects as localProjects } from '../data/projects';

export const projectService = {
  /**
   * Fetch all projects with optional filtering parameters
   * @param {object} filters - Filter criteria (type, status, location, etc.)
   * @returns {Promise<Array>}
   */
  async getProjects(filters = {}) {
    try {
      // Attempt API fetch
      const queryParams = new URLSearchParams(filters).toString();
      const data = await fetchApi(`/projects?${queryParams}`);
      return data.projects || data;
    } catch {
      // Fallback to local filtering
      let result = [...localProjects];
      
      if (filters.type && filters.type !== 'all') {
        result = result.filter(p => p.type.toLowerCase() === filters.type.toLowerCase());
      }
      
      if (filters.status && filters.status !== 'all') {
        result = result.filter(p => p.status.toLowerCase() === filters.status.toLowerCase());
      }

      if (filters.location && filters.location !== 'all') {
        result = result.filter(p => p.location.toLowerCase() === filters.location.toLowerCase());
      }

      if (filters.configuration && filters.configuration !== 'all') {
        result = result.filter(p => p.configurations.includes(filters.configuration));
      }

      if (filters.search) {
        const query = filters.search.toLowerCase();
        result = result.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.location.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        );
      }

      return result;
    }
  },

  /**
   * Get project details by unique URL slug
   * @param {string} slug
   * @returns {Promise<object|null>}
   */
  async getProjectBySlug(slug) {
    try {
      return await fetchApi(`/projects/${slug}`);
    } catch {
      const found = localProjects.find(p => p.slug === slug);
      return found || null;
    }
  },

  /**
   * Get featured flagship projects for home page
   * @returns {Promise<Array>}
   */
  async getFeaturedProjects() {
    try {
      return await fetchApi('/projects/featured');
    } catch {
      return localProjects.filter(p => p.featured);
    }
  }
};
