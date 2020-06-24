import React from "react";
import { render } from "@testing-library/react";

import PokemonInfo from "../../../Components/Detail/PokemonInfo";

describe("Pokemon Info Component", () => {
  it("should show pokemon information detail", async () => {
    const expected = {
      classification: "Seed Pokémon",
      id: "UG9rZW1vbjowMDE=",
      image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
      name: "Bulbasaur",
      number: "001",
      types: ["Grass", "Poison"],
      resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
      weight: { maximum: "7.76kg", minimum: "6.04kg" },
    };

    const { container } = render(<PokemonInfo pokemon={expected} />);
    expect(container.innerHTML).toMatch(expected.name);
    expect(container.innerHTML).toMatch(expected.number);
    expect(container.innerHTML).toMatch(expected.image);
    expect(container.innerHTML).toMatch(expected.classification);
    expect(container.innerHTML).toMatch(
      `${expected.weight.minimum} - ${expected.weight.maximum}`
    );
    expect(container.innerHTML).toMatch(expected.classification);
    for (let i = 0; i < expected.types.length; i++) {
      expect(container.innerHTML).toMatch(expected.types[i]);
    }
    for (let i = 0; i < expected.resistant.length; i++) {
      expect(container.innerHTML).toMatch(expected.resistant[i]);
    }
    for (let i = 0; i < expected.weaknesses.length; i++) {
      expect(container.innerHTML).toMatch(expected.weaknesses[i]);
    }
  });
});
