import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class OrganizationController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 400,
      body: {},
    };
  }
}
