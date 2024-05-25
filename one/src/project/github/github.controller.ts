import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { GithubService } from "./github.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("github")
@ApiTags("GitHub")
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get(":userName/:reposQuatity")
  async index(
    @Param("userName") userName: string,
    @Param("reposQuatity") reposQuatity: number
  ) {
    if (!userName || !reposQuatity)
      throw new HttpException(
        {
          message: "Parametros no valido",
          data: [],
        },
        HttpStatus.BAD_REQUEST
      );

    const response = await this.githubService.getInfo(userName);
    if (response.status == 0)
      throw new HttpException(
        {
          message: "Is not possible to continue with this request",
          data: response.data,
          status: "not allowed",
        },
        HttpStatus.BAD_REQUEST
      );

    if (response.data.length >= reposQuatity)
      return {
        message: `Data about last ${reposQuatity} repositories`,
        data: response.data.slice(0, reposQuatity),
        total: response.data.slice(0, reposQuatity).length,
        status: "allowed",
      };
    if (response.data.length < reposQuatity)
      return {
        message: `Data about last ${reposQuatity} repositories`,
        data: response.data,
        total: response.data.slice(0, reposQuatity).length,
        status: "allowed",
      };
  }
}
