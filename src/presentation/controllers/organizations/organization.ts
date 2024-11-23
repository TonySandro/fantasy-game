import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, success } from "../../helpers/http/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class OrganizationController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.orgName) {
      return badRequest(new MissingParamError("orgName"));
    }

    const requiredFields = ["name", "nick", "age", "nationality"];
    const orgMembers = httpRequest.body.members;

    for (let index = 0; index < orgMembers.length; index++) {
      for (const field of requiredFields) {
        if (!orgMembers[index][field]) {
          return badRequest(new MissingParamError(field));
        }
      }
    }

    return success(httpRequest.body);
  }
}
