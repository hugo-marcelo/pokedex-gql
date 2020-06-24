import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import PokemonEvoInfo from "../../../Components/Detail/PokemonEvoInfo";

const mockedHistoryPush = jest.fn();

jest.mock("react-router", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe("Pokemon Evo Info Component", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it("should show pokemon information detail", () => {
    const expectedEvo = [
      {
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
        name: "Ivysaur",
        number: "002",
      },
    ];
    const expectedReq = { amount: 25, name: "Bulbasaur candies" };
    const { container } = render(
      <PokemonEvoInfo evolutions={expectedEvo} requirement={expectedReq} />
    );
    expect(container.innerHTML).toMatch(expectedEvo[0].name);
    expect(container.innerHTML).toMatch(expectedEvo[0].number);
    expect(container.innerHTML).toMatch(expectedEvo[0].image);
    expect(container.innerHTML).toMatch(
      `${expectedReq.name} x ${expectedReq.amount}`
    );
  });

  it("should go to information detail when button clicked", async () => {
    const evolutions = [
      {
        id: "UG9rZW1vbjowMjY=",
        number: "026",
        name: "Raichu",
      },
    ];

    const { getByRole } = render(<PokemonEvoInfo evolutions={evolutions} />);
    const button = getByRole("button");

    fireEvent.click(button);

    await wait(() => {
      expect(mockedHistoryPush).toBeCalled();
    });
  });
});
