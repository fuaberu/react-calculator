import React from 'react';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Button from './Button';
import './App.scss';

const numbers = [
	{
		key: 'clear',
		caracter: 'AC',
	},
	{
		key: 'delete',
		caracter: 'Ce',
	},
	{
		key: 'divide',
		caracter: '/',
	},
	{
		key: 'multiply',
		caracter: '*',
	},
	{
		key: 'seven',
		caracter: 7,
	},
	{
		key: 'eight',
		caracter: 8,
	},
	{
		key: 'nine',
		caracter: 9,
	},
	{
		key: 'subtract',
		caracter: '-',
	},
	{
		key: 'four',
		caracter: 4,
	},
	{
		key: 'five',
		caracter: 5,
	},
	{
		key: 'six',
		caracter: 6,
	},
	{
		key: 'add',
		caracter: '+',
	},
	{
		key: 'one',
		caracter: 1,
	},
	{
		key: 'two',
		caracter: 2,
	},
	{
		key: 'three',
		caracter: 3,
	},
	{
		key: 'equals',
		caracter: '=',
	},
	{
		key: 'zero',
		caracter: 0,
	},
	{
		key: 'decimal',
		caracter: '.',
	},
];

function App() {
	const [display, setDisplay] = useState('');

	const calculate = () => {
		setDisplay(evaluate(display));
	};

	return (
		<div className="calculator">
			<div id="display">{display}</div>
			{numbers.map((btn) => (
				<Button
					btnClass="buttons"
					id={btn.key}
					btn={btn}
					caracter={btn.caracter}
					stateChanger={setDisplay}
					display={display}
					key={btn.key}
					calculate={calculate}
				/>
			))}
		</div>
	);
}

export default App;
