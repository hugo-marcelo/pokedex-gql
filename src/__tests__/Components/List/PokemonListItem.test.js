import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import PokemonListItem from "../../../Components/List/PokemonListItem";

const mockedHistoryPush = jest.fn();
const mockedApolloClientRead = jest.fn();
const mockedApolloClientWrite = jest.fn();

jest.mock("react-router", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock("@apollo/react-hooks", () => {
  return {
    useApolloClient: () => ({
      readFragment: mockedApolloClientRead,
      writeFragment: mockedApolloClientWrite,
    }),
  };
});

describe("Pokemon List Item Component", () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockedApolloClientRead.mockClear();
    mockedApolloClientWrite.mockClear();
  });

  it("should show pokemon List Item Card", () => {
    const expected = {
      classification: "Seed Pokémon",
      id: "UG9rZW1vbjowMDE=",
      image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      name: "Bulbasaur",
      number: "001",
      types: ["Grass", "Poison"],
      __typename: "Pokemon",
    };

    const { container } = render(<PokemonListItem pokemon={expected} />);
    expect(container.innerHTML).toMatch(expected.name);
    expect(container.innerHTML).toMatch(expected.number);
    expect(container.innerHTML).toMatch(expected.image);
    expect(container.innerHTML).toMatch(expected.classification);
    expect(container.innerHTML).toMatch(expected.types[0]);
    expect(container.innerHTML).toMatch(expected.types[1]);
  });

  it("should go to list item when card button clicked", async () => {
    const pokemon = {
      id: "UG9rZW1vbjowMjY=",
      number: "026",
      name: "Raichu",
    };

    const { getByTestId } = render(<PokemonListItem pokemon={pokemon} />);
    const button = getByTestId("card-button");

    fireEvent.click(button);

    await wait(() => {
      expect(mockedHistoryPush).toBeCalled();
    });
  });

  it("should show form to edit pokemon name when edit button clicked", async () => {
    const pokemon = {
      id: "UG9rZW1vbjowMjY=",
      number: "026",
      name: "Raichu",
    };

    const { getByTestId, container } = render(
      <PokemonListItem pokemon={pokemon} />
    );
    const editButton = getByTestId("edit-button");

    fireEvent.click(editButton);

    await wait(() => {
      expect(container.innerHTML).toContain("Editar Pokemon");
    });
  });

  it("should hide form to edit pokemon name when cancel button clicked", async () => {
    const pokemon = {
      id: "UG9rZW1vbjowMjY=",
      number: "026",
      name: "Raichu",
    };

    const { getByTestId, container } = render(
      <PokemonListItem pokemon={pokemon} />
    );
    const editButton = getByTestId("edit-button");

    fireEvent.click(editButton);

    const editCancel = getByTestId("edit-cancel");

    fireEvent.click(editCancel);

    await wait(() => {
      expect(container.innerHTML).not.toContain("Editar Pokemon");
    });
  });

  it("should update pokemon name when confirm button clicked", async () => {
    const pokemon = {
      id: "UG9rZW1vbjowMjY=",
      number: "026",
      name: "Raichu",
    };

    const { container, getByTestId, getByLabelText } = render(
      <PokemonListItem pokemon={pokemon} />
    );
    const editButton = getByTestId("edit-button");

    fireEvent.click(editButton);

    const inputNewName = getByLabelText("Novo Nome");

    fireEvent.change(inputNewName, {
      target: { value: "Pikachu" },
    });

    const editConfirm = getByTestId("edit-confirm");

    fireEvent.click(editConfirm);

    await wait(() => {
      expect(container.innerHTML).not.toContain("Editar Pokemon");
    });
  });

  it("should not update pokemon name when input is empty", async () => {
    const pokemon = {
      id: "UG9rZW1vbjowMjY=",
      number: "026",
      name: "Raichu",
    };

    const { container, getByTestId } = render(
      <PokemonListItem pokemon={pokemon} />
    );
    const editButton = getByTestId("edit-button");

    fireEvent.click(editButton);

    const editConfirm = getByTestId("edit-confirm");

    fireEvent.click(editConfirm);

    await wait(() => {
      expect(container.innerHTML).toContain("Editar Pokemon");
    });
  });
});
