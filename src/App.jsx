import { createElement, useState } from 'react';
import './App.css'

function Header() {
	return (
		<header>
			<h1>Color Genarator</h1>
		</header>
	)
}

function Canvas({children, color, nodeX}) {
	return (
		<section className="section">
			{children}
		</section>
	)
}

function Sidebar({newChildren}) {
	return (<div className="sidebar">{newChildren}</div>)
}

function Content({color}) {
	return (
		<div className="content" style={{backgroundColor: color}}></div>
	)
}

function Button({onClick, className, children}) {
	return (
		<button onClick={onClick} className={className}>{children}</button>
	)
}

function App() {
	const [color, setColor] = useState('#999');
	const [allColors, setAllColors] = useState([]);
	const [nodeX, setNodeX] = useState([]);
	const [newChildren, setNewChildren] = useState('');

	function generateColor() {
		const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
		
		let colorCode = '#';

		for (let i = 0; i < 6; i++) {
			colorCode += characters[Math.floor(Math.random() * 15)];
		}

		setColor(colorCode);

	}

	function addFavorite() {
		let colors = allColors;
		let colectionX = nodeX;

		let newNode = createElement(
			'div',
			{	className: 'small',
				key: color,
				
			},
			createElement(
				'div',
				{
					className: 'box',
					style: {backgroundColor: color}
				}
			),
			createElement(
				'div',
				{className: 'text'},
				color,
			)
		);

		if (!colors.includes(color)) {
			colors.push(color);

			setAllColors(colors);

			colectionX.push(newNode);
		}
		
		setNodeX(colectionX);
		
		setNewChildren(
			nodeX.map(
				node => <div>{node}</div>
			)
		);
	}

	return (
		<>
			<Header />
			<Canvas color={color} newChildren={newChildren}>
				<Sidebar newChildren={newChildren} />
				<Content color={color} />
				<Button onClick={generateColor} className={"new"}>Generate Color</Button>
				<Button onClick={addFavorite} className={"add"}>Add to Favorite</Button>
			</Canvas>
		</>
	)
}

export default App