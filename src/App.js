import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";


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

    return (
        <div>
            <Translate />
        </div>
    );
};