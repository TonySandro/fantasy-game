import { MissingParamError } from "../../errors/missing-param-error";
import { OrganizationController } from "./organization";

const makeSut = () => {
  const sut = new OrganizationController();

  return {
    sut,
  };
};

describe("Organization Controller", () => {
  test("Should return 400 if no name is provided", async () => {
    const { sut } = makeSut();

    const httpRequest = {
      body: {
        nick: "player_nick",
        age: 16,
        nationality: "any_nationality",
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  test("Should return 400 if no nick is provided", async () => {
    const { sut } = makeSut();

    const httpRequest = {
      body: {
        name: "any_name",
        age: 16,
        nationality: "any_nationality",
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("nick"));
  });
});
