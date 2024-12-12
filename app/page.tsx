"use client";

import Search from "./components/search";
import Profile from "./components/profile";
import Card from "./components/card";
import { useEffect, useState } from "react";
import { repoFetching } from "./api/datafetching";
import { User, Repo } from "./utils/definitions";

export default function Home() {
  const [user, setUser] = useState<User>();
  const [repos, setRepos] = useState<Repo[]>([]);
  useEffect(() => {
    if (user) {
      const datafetching = async () => {
        const result = await repoFetching(user.login);
        setRepos(result);
      };
      datafetching();
    }
  }, [user]);
  return (
    <>
      <div className="flex w-full h-56 bg-cover bg-no-repeat justify-center bg-[url('/resources/hero-image-github-profile.png')]">
        <Search setUser={setUser} />
      </div>
      <div className="w-[100%] px-4 sm:16 lg:px-28 xl:px-36 text-white">
        <Profile user={user} />
        <h1 className="text-[2rem] pt-3 py-1">
          {user ? user?.login : "GitHub"}
        </h1>
        <p>{user ? user.bio : "How people build software."}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 select-none">
          {repos.length > 0 ? (
            repos.map((repo, idx) => (
              <a key={idx} href={repo.html_url} target="_blank">
                <Card repo={repo} />
              </a>
            ))
          ) : (
            <>
              <Card
                name=".github"
                description="Community health files for the @GutHub organization"
                forks={2360}
                stargazers_count={703}
                day_ago={4}
              />
              <Card
                name="accessibility-alt-text-bot"
                description="An action to remind users to add alt text on Issues, Pull Requests, and Discussions"
                license="MIT"
                forks={7}
                stargazers_count={50}
                day_ago={3}
              />
              <Card
                name="accessibility.js"
                description="Client side assessibility error scanner."
                license="MIT"
                forks={72}
                stargazers_count={2181}
                day_ago={4}
              />
              <Card
                name="actions-cheat-sheet"
                description="A cheat sheet for GitHub Actions"
                license="MIT"
                forks={26}
                stargazers_count={194}
                day_ago={4}
              />
            </>
          )}
        </div>
        <div className="justify-self-center pb-16">
          <a
            href={
              user
                ? `https://github.com/${user.login}?tab=repositories`
                : "https://github.com/GitHub?tab=repositories"
            }
          >
            View all repositories
          </a>
        </div>
      </div>
    </>
  );
}
