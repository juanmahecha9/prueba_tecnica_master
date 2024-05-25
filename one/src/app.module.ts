import { Module } from "@nestjs/common";
import { MainModule } from "./project/main/main.module";
import { GithubModule } from "./project/github/github.module";

@Module({
  imports: [MainModule, GithubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
