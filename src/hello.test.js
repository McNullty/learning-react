import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Hello from "./hello";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
    act(() => {    render(<Hello />, container);  });
    expect(container.textContent).toBe("Hey, stranger");

    act(() => {
        render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act(() => {
        render(<Hello name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
});

it("should render a greeting", () => {
  act(() => {
    render(<Hello />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<span>Hey, stranger</span>"`
  ); /* ... gets filled automatically by jest ... */
  act(() => {
    render(<Hello name="Jenny" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Hello, Jenny!</h1>"`
  ); /* ... gets filled automatically by jest ... */

  act(() => {
    render(<Hello name="Margaret" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>Hello, Margaret!</h1>"`
  ); /* ... gets filled automatically by jest ... */
});
