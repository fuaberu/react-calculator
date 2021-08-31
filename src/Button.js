import React from 'react';
import { useEffect } from 'react';

const Button = ({ btn, stateChanger, btnClass, display, calculate }) => {
	const handleClick = () => {
		switch (btn.caracter) {
			case 'AC':
				stateChanger('');
				break;
			case 'Ce':
				if (display.length <= 1 || display === 0) {
					stateChanger('');
				} else {
					stateChanger(display.toString().substring(0, display.length - 1));
				}
				break;
			case '=': //enter
				calculate();
				break;
			case '*': // *
				if (
					display !== 0 &&
					Number.isInteger(parseInt(display.toString().slice(-1)))
				)
					stateChanger(`${display} * `);
				break;
			case '+': // +
				if (
					display !== 0 &&
					Number.isInteger(parseInt(display.toString().slice(-1)))
				)
					stateChanger(`${display} + `);
				break;
			case '-':
				stateChanger(`${display} - `);
				break;
			case '/':
				if (
					display !== 0 &&
					Number.isInteger(parseInt(display.toString().slice(-1)))
				)
					stateChanger(`${display} / `);
				break;
			case '.':
				if (display.toString().indexOf('.') < 0) stateChanger(`${display}.`);
				break;
			default:
				break;
		}
		if (btn.caracter >= 0 && btn.caracter <= 9) {
			if (display === 0) {
				stateChanger(btn.caracter);
			} else {
				stateChanger('' + display + btn.caracter);
			}
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keyPressHandle);
		return () => {
			document.removeEventListener('keydown', keyPressHandle);
		};
	});

	const keyPressHandle = (event) => {
		if (event.keyCode === 46) {
			//Ac
			stateChanger('');
		} else if (event.keyCode === 8) {
			//Ce
			if (parseInt(display).length < 1 || display === 0) {
				stateChanger('');
			} else {
				stateChanger(display.toString().substring(0, display.length - 1));
			}
		} else if (event.keyCode >= 96 && event.keyCode <= 105) {
			if (display === 0) {
				stateChanger(String.fromCharCode(event.keyCode - 48));
			} else {
				console.log(event.keyCode);
				stateChanger('' + display + String.fromCharCode(event.keyCode - 48));
			}
		}
		switch (event.keyCode) {
			case 13: //enter
				calculate();
				break;
			case 106: // *
				if (
					display !== 0 &&
					Number.isInteger(parseInt(display.toString().slice(-1)))
				)
					stateChanger(`${display} * `);
				break;
			case 107: // +
				if (
					display !== 0 &&
					Number.isInteger(parseInt(display.toString().slice(-1)))
				)
					stateChanger(`${display} + `);
				break;
			case 109:
				if (
					display !== 0 &&
					Number.isInteger(parseInt(display.toString().slice(-1)))
				)
					stateChanger(`${display} - `);
				break;
			case 111:
				if (
					display !== 0 &&
					Number.isInteger(parseInt(display.toString().slice(-1)))
				)
					stateChanger(`${display} / `);
				break;
			case 194:
				if (display.toString().indexOf('.') < 0) stateChanger(`${display}.`);
				break;
			default:
				break;
		}
	};

	return (
		<button
			id={btn.key}
			className={btnClass}
			onClick={handleClick}
			key={btn.key}
		>
			{btn.caracter}
		</button>
	);
};

export default Button;
