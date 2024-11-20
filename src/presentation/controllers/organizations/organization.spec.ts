import { OrganizationController } from "./organization";

const makeSut = () => {
  const sut = new OrganizationController();

  return {
    sut,
  };
};

describe("Organization Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const { sut } = makeSut();

    const httpRequest = {
      body: {
        nick: "player_nick",
        age: 16,
        nationality: "any_nationality",
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
