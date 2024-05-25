import { All, Controller, Get, Param, Req } from "@nestjs/common";
import { MainService } from "./main.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("/explain")
@ApiTags("Explain")
export class MainController {
  constructor(private mainService: MainService) {}

  @Get()
  index(@Req() _resquest: Request) {
    return this.mainService.index(_resquest.url);
  }
}
