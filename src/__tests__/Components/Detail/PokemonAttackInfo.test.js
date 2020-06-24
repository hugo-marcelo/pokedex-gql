import React from "react";
import { render } from "@testing-library/react";

import PokemonAttackInfo from "../../../Components/Detail/PokemonAttackInfo";

describe("Pokemon Attack Info Component", () => {
  it("should show pokemon information attack", () => {
    const expectedAttack = [
      {
        name: "Spark",
        type: "Electric",
        damage: "7",
      },
    ];
    const expectedSpecial = [
      {
        name: "Discharge",
        type: "Electric",
        damage: "35",
      },
    ];

    const { container } = render(
      <PokemonAttackInfo fast={expectedAttack} special={expectedSpecial} />
    );
    expect(container.innerHTML).toMatch(expectedAttack[0].name);
    expect(container.innerHTML).toMatch(expectedAttack[0].type);
    expect(container.innerHTML).toMatch(expectedAttack[0].damage);

    expect(container.innerHTML).toMatch(expectedSpecial[0].name);
    expect(container.innerHTML).toMatch(expectedSpecial[0].type);
    expect(container.innerHTML).toMatch(expectedSpecial[0].damage);
  });
});
