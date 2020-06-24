import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./app"

test("full app rendering/navigating", () => {
    const { container } = render(<App />)
    expect(container.innerHTML).toMatch("progressbar")
})
