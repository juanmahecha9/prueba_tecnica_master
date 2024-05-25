import { Injectable } from "@nestjs/common";
import { GitHubResponse } from "src/models/github/github";

export interface Answer {
  message: string;
  data: any[];
  status: number;
}

@Injectable()
export class GithubService {
  constructor() {}

  async getInfo(userName: string): Promise<Answer> {
    try {
      const response: any = await fetch(
        `${process.env.GITHUB_API}/${userName}/repos`
      );
      const responseJson: GitHubResponse[] = await response.json();
      return {
        message: "successful",
        data: responseJson,
        status: 1,
      };
    } catch (err) {
      return {
        message: "Error",
        data: err,
        status: 0,
      };
    }
  }
}
