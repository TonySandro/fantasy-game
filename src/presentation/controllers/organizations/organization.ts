import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class OrganizationController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ["name", "nick", "age", "nationality"];

    for (const field of requiredFields) {
      if (!httpRequest.body.members[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
