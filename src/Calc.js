import React from 'react';
import './App.scss';
import { useState } from 'react';

const Calc = () => {
	const [expression, setExpression] = useState('0');

	const display = (element) => {
		if (expression.toString().slice(0, 1) === '0') {
			setExpression(element);
		} else {
			setExpression((prevElement) => prevElement + element);
		}
	};

	const decimalBtn = () => {
		const expressionArray = expression.toString().split(' ');
		if (expressionArray[expressionArray.length - 1].indexOf('.') < 0) {
			display('.');
		}
	};

	const operators = (element) => {
		const regex = /\s[*+/-]\s/g;
		let fixedElement = element.slice();
		console.log('regex', fixedElement.indexOf('-'));
		if (element.match(regex)) {
			let regexArray = element.match(regex);
			let minusRegex1 = /[-]\s\d/g;
			let minusRegex2 = /\d\s[-]/g;
			if (
				fixedElement.indexOf('-') !== -1 &&
				(minusRegex1.test(fixedElement) === true ||
					minusRegex2.test(fixedElement) === true)
			) {
				let filterRegex = regexArray.filter((caracter) => caracter !== '-');
				for (let i = 0; i < filterRegex.indexOf('-'); i++) {
					fixedElement = fixedElement.replace(filterRegex[i], '');
				}
				console.log('- entrer');
			} else {
				console.log('- no entrer');
				for (let i = 0; i < regexArray.length - 1; i++) {
					fixedElement = fixedElement.replace(regexArray[i], '');
				}
				console.log(fixedElement);
			}
			return fixedElement;
		}
	};

	const calculation = () => {
		setExpression(eval(operators(expression)));
	};

	const allClear = () => {
		setExpression('0');
	};
	const clear = () => {
		setExpression((prev) => prev.slice(0, prev.length - 1));
	};

	return (
		<div className="calculator">
			<div id="display-container">
				<input type="text" id="display" value={expression} disabled />
			</div>
			<button onClick={allClear} id="clear">
				AC
			</button>
			<button onClick={clear} id="delete">
				Ce
			</button>
			<button onClick={() => display(' / ')} id="divide">
				/
			</button>
			<button onClick={() => display(' * ')} id="multiply">
				*
			</button>
			<button onClick={() => display('7')} id="seven">
				7
			</button>
			<button onClick={() => display('8')} id="eight">
				8
			</button>
			<button onClick={() => display('9')} id="nine">
				9
			</button>
			<button onClick={() => display(' - ')} id="subtract">
				-
			</button>
			<button onClick={() => display('4')} id="four">
				4
			</button>
			<button onClick={() => display('5')} id="five">
				5
			</button>
			<button onClick={() => display('6')} id="six">
				6
			</button>
			<button onClick={() => display(' + ')} id="add">
				+
			</button>
			<button onClick={() => display('1')} id="one">
				1
			</button>
			<button onClick={() => display('2')} id="two">
				2
			</button>
			<button onClick={() => display('3')} id="three">
				3
			</button>
			<button onClick={calculation} id="equals">
				=
			</button>
			<button onClick={() => display('0')} id="zero">
				0
			</button>
			<button onClick={() => decimalBtn()} id="decimal">
				.
			</button>
		</div>
	);
};

export default Calc;
