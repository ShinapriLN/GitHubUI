"use server";

import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ user: string }> }
) {
  const user = (await params).user;

  const octokit = new Octokit({
    auth: process.env.GIT_TOKEN,
  });

  try {
    // const rest = await octokit.request("GET /search/users", {
    //   q: user,
    //   per_page: 1,
    //   page: 1,
    //   headers: {
    //     "X-GitHub-Api-Version": "2022-11-28",
    //   },
    // });

    const searchResult = await octokit.request("GET /search/users", {
      q: user,
      per_page: 1,
      page: 1,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const username = searchResult.data.items[0].login;
    if (username) {
      const userInfo = await octokit.request("GET /users/{username}", {
        username: username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      return NextResponse.json({
        search: searchResult,
        userinfo: userInfo,
      });
    } else {
      return console.log("No user found");
    }

    // Return the GitHub user data as JSON
  } catch (error) {
    console.error("Error fetching GitHub user:", error);

    // Handle errors gracefully
    return NextResponse.json(
      {
        error:
          "Unable to fetch user data. Please check the username or try again later.",
      },
      { status: 500 }
    );
  }
}
