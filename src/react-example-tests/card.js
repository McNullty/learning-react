import React, { useEffect } from "react";
/**
 * In this example, a multiple choice panel waits for a selection and advances, timing out if a selection isn’t
 * made in 5 seconds:
 */
export default function Card(props) {
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            props.onSelect(null);
        }, 5000);
        return () => {
            clearTimeout(timeoutID);
        };
    }, [props, props.onSelect]);

    return [1, 2, 3, 4].map(choice => (
        <button
            key={choice}
            data-testid={choice}
            onClick={() => props.onSelect(choice)}
        >
            {choice}
        </button>
    ));
}