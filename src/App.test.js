import React from "react";
import { render } from "@testing-library/react";
import { App, helloWorld0, helloWorld1 } from "./App";

//Default test
// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("testing hello world function", () => {
  const result = helloWorld0();

  expect(result).toMatchInlineSnapshot(`
    <div>
      <h1>
        Hello World!
      </h1>
    </div>
  `);
});


test("testing hello world 1 function", () => {
  const result = helloWorld1();

  expect(result).toMatchInlineSnapshot(`
    <div>
      <h1>
        Hello 
        React
      </h1>
    </div>
  `);
});