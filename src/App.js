import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JS framework'
    },
    {
        title: 'What is use of React?',
        content: 'React is a favourite library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use  React by crating Components'
    }
];

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                /> : null}
        </div>
    );
};