"use server";

import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

export async function GET(
  req: NextRequest,
  { params }: { params: { repo: string } }
) {
  const user = params.repo;

  const octokit = new Octokit({
    auth: process.env.GIT_TOKEN,
  });

  try {
    // Fetch user data from GitHub API
    const response = await octokit.request("/users/{username}/repos", {
      username: user, // Pass the dynamic username
      per_page: 4,
      page: 1,
      sort: "updated", // เรียงลำดับตามการอัปเดตล่าสุด
      direction: "desc", // จากใหม่ไปเก่า
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    // Return the GitHub user data as JSON
    return NextResponse.json(response.data);
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
