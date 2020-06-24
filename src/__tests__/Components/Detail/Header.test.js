import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import Header from "../../../Components/Detail/Header";

const mockedHistoryBack = jest.fn();

jest.mock("react-router", () => {
  return {
    useHistory: () => ({
      goBack: mockedHistoryBack,
    }),
  };
});

describe("Header Detail Component", () => {
  beforeEach(() => {
    mockedHistoryBack.mockClear();
  });

  it("should show name on headers", () => {
    const expected = "Bulbasaur";
    const { getByRole } = render(<Header name={expected} />);
    expect(getByRole("heading").innerHTML).toBe(expected);
  });

  it("should go back when button on header clicked", async () => {
    const { getByRole } = render(<Header />);
    const button = getByRole("button");

    fireEvent.click(button);

    await wait(() => {
      expect(mockedHistoryBack).toBeCalled();
    });
  });
});
