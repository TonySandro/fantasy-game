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
  test("Should return 200 if valid data is provided", async () => {
    const sut = makeSut();
    const httpResponse = await sut.handle(makeFakeRequest());

    expect(httpResponse).toEqual(success(makeFakeRequest().body));
  });
});
