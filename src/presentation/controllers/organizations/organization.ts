import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class OrganizationController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ["name", "nick", "age", "nationality"];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`),
        };
      }
    }
  }
}
