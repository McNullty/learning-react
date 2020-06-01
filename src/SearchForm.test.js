import React from "react";
import renderer from "react-test-renderer"

import {SearchForm} from "./SearchForm";
import {InputWithLabel} from "./InputWithLabel";

describe('SearchForm', () => {
    const searchFormProps = {
        searchTerm: 'React',
        onSearchInput: jest.fn(),
        onSearchSubmit: jest.fn(),
    };

    let component;

    beforeEach(() => {
        component = renderer.create(<SearchForm {...searchFormProps} />)
    });

    it('renders the input field with its value', () => {
        const value= component.root.findByType(InputWithLabel).props.value;

        expect(value).toEqual('React');
    });

    it('changes the input field', () => {
       const pseudoEvent = { target: 'Redux' };

       component.root.findByType('input').props.onChange(pseudoEvent);

       expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
       expect(searchFormProps.onSearchInput).toHaveBeenCalledWith(pseudoEvent);
    });

    it('submit the form', () => {
        const pseudoEvent = { };

        component.root.findByType('form').props.onSubmit(pseudoEvent);

        expect(searchFormProps.onSearchSubmit).toHaveBeenCalledTimes(1);
        expect(searchFormProps.onSearchSubmit).toHaveBeenCalledWith(pseudoEvent);
    });

    it('disables the button and prevents submit', () => {
        component.update(<SearchForm {...searchFormProps} searchTerm="" />);

        expect(component.root.findByType('button').props.disabled).toBeTruthy();
    });

});