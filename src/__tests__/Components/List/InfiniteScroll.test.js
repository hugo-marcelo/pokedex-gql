import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";

import InfiniteScroll from "../../../Components/List/InfiniteScroll";
import Loader from "../../../Components/Loader";

window.scrollTo = jest.fn();
window.addEventListener = jest.fn();

describe("Infinite Scroll Component", () => {
  it("should be able to render an infinite scroll", () => {
    InfiniteScroll.prototype.handleScroll = jest.fn();

    render(
      <InfiniteScroll
        refs="pokemonList"
        hasMore={true}
        loader={<Loader key={0} />}
      />
    );

    window.addEventListener("scroll", InfiniteScroll.prototype.handleScroll);
    fireEvent.scroll(window);

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it("should be able to show error on infinite scroll", () => {
    render(
      <InfiniteScroll
        refs="pokemonList"
        hasMore={true}
        loader={<Loader key={0} />}
        error={"Erro"}
      />
    );

    expect(window.scrollTo).toHaveBeenCalled();
  });

  it("should call scrollTo when infinite scroll was updated", () => {
    let node = document.createElement("div");
    ReactDOM.render(<InfiniteScroll refs="pokemonList" />, node);
    jest.spyOn(window, "scrollTo");
    ReactDOM.render(
      <InfiniteScroll
        refs="pokemonList"
        loadMore={() => {}}
        hasMore={true}
        isLoading={false}
      />,
      node
    );

    expect(window.scrollTo).toHaveBeenCalled();
  });
});
