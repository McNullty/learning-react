import React from "react";
import {fireEvent, render} from "@testing-library/react";
import { Search } from "./Search";
import {unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

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

test('Testing Search component', () => {
    act(() => {
        render(
            <Search />,
            container
        );
    });

    const input = document.querySelector("[id=search]");

    act(() => {
        fireEvent(
            input,
            new MouseEvent('click', {
                bubbles: true,
            })
        )
    });

    expect(result.state().value).toBe('1234567890!!!' );
});