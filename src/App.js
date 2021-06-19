import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";


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

export default () => {
    return (
        <div>
            <Search />
        </div>
    );
};