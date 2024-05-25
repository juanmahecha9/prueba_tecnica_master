import { Injectable } from "@nestjs/common";
import { Main } from "src/models/main/main";
@Injectable()
export class MainService {
  index(url: string): Main {
    return {
      message:
        "Para realizar la busqueda de un usuario en particular desde el API de GitHub, se requiere hacer uso del path descrito a acontinuación",
      path: `http://localhost:${process.env.PORT}/github/user/[user_to_search]/[repos_quantity]`,
      methods: ["GET"],
      parameters: [
        { user_to_search: "Usuario a buscar" },
        { repos_quantity: "Cantidad de repositorios a buscar" },
      ],
    };
  }
}
