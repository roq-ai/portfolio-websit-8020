const mapping: Record<string, string> = {
  blogs: 'blog',
  'job-hires': 'job_hire',
  projects: 'project',
  subscribers: 'subscriber',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
