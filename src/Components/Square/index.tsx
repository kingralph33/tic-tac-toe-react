import { useState } from 'react';
import './Square.css';

function Square({
	value,
	onSquareClick,
}: {
	value: string;
	onSquareClick: string;
}) {
	return (
		<button className='square' onClick={onSquareClick}>
			{value}
		</button>
	);
}

export default Square;
