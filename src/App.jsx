import { createElement, useState } from 'react';
import './App.css'

function Header() {
	return (
		<header>
			<h1>HEX Colors</h1>
		</header>
	)
}

function Canvas({children, color}) {
	return (
		<section className="section">
			{children}
		</section>
	)
}

function Sidebar({nodeX}) {
	return (
		<div className="sidebar">
			{
				nodeX.map(
					node => 
						<div>{node}</div>
					)
			}
		</div>
	)
}

function Content({color}) {
	return (
		<div className="content" style={{backgroundColor: color}}></div>
	)
}

function Button({setColor, nodeX, setNodeX}) {

	function generateColor() {
		const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
		
		let colorCode = '#';

		for (let i = 0; i < 6; i++) {
			colorCode += characters[Math.floor(Math.random() * 15)];
		}

		setColor(colorCode);

		let colectionX = nodeX;

		let newNode = createElement(
			'div',
			{	className: 'small',
				key: colorCode,
				
			},
			createElement(
				'div',
				{
					className: 'box',
					style: {backgroundColor: colorCode}
				}
			),
			createElement(
				'div',
				{className: 'text'},
				colorCode,
			)
		);

		colectionX.push(newNode);

		setNodeX(colectionX);
	}

	return (
		<button onClick={generateColor}>Generate Color</button>
	)
}

export default function App() {
	const [color, setColor] = useState('#999');
	const [nodeX, setNodeX] = useState([]);
	return (
		<>
			<Header />
			<Canvas color={color}>
				<Sidebar nodeX={nodeX} />
				<Content color={color} />
				<Button setColor={setColor} nodeX={nodeX} setNodeX={setNodeX} />
			</Canvas>
		</>
	)
}