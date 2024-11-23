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
        orgName: "any_orgName",
        members: {
          nick: "player_nick",
          age: 16,
          nationality: "any_nationality",
        },
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
        orgName: "any_orgName",
        members: {
          name: "any_name",
          age: 16,
          nationality: "any_nationality",
        },
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("nick"));
  });

  test("Should return 400 if no age is provided", async () => {
    const { sut } = makeSut();

    const httpRequest = {
      body: {
        orgName: "any_orgName",
        members: {
          name: "any_name",
          nick: "player_nick",
          nationality: "any_nationality",
        },
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("age"));
  });

  test("Should return 400 if no nationality is provided", async () => {
    const { sut } = makeSut();

    const httpRequest = {
      body: {
        orgName: "any_orgName",
        members: {
          name: "any_name",
          nick: "player_nick",
          age: 16,
        },
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("nationality"));
  });

  test("Should return 400 if no orgName is provided", async () => {
    const { sut } = makeSut();

    const httpRequest = {
      body: {
        members: {
          name: "any_name",
          nick: "player_nick",
          age: 16,
          nationality: "any_nationality",
        },
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("orgName"));
  });
});
