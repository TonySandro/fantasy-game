import { MissingParamError } from "../../errors/missing-param-error";
import { success } from "../../helpers/http/http-helper";
import { HttpRequest } from "../../protocols";
import { ChampionshipController } from "./championship";

const makeFakeRequest = (): HttpRequest => ({
  body: {
    organizations: [],
    championshipName: "any_name",
    award: 10000.0,
    matches: [],
  },
});

const makeSut = () => {
  return new ChampionshipController();
};

describe("Championship Controller", () => {
  test("Should return 400 if no championshipName is provided", async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        award: 10000.0,
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError("championshipName")
    );
  });

  test("Should return 400 if no award is provided", async () => {
    const sut = makeSut();

    const httpRequest = {
      body: {
        championshipName: "any_name",
      },
    };

    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("award"));
  });

  test("Should return 200 if valid data is provided", async () => {
    const sut = makeSut();
    const httpResponse = await sut.handle(makeFakeRequest());

    expect(httpResponse).toEqual(success(makeFakeRequest().body));
  });
});
