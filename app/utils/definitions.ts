export interface User {
  login: string;
  avatar_url: string;
  bio: string | null;
  location: string | "";
  followers: number;
  following: number;
  repos_url: string;
}

export interface Repo {
  name: string;
  description: string;
  license: {
    key: string;
  };
  forks: number;
  stargazers_count: number;
  updated_at: string;
}
