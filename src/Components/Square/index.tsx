import { useState } from 'react';
import './Square.css';

interface Props {
	value: string;
	onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Square({ value, onSquareClick }: Props) {
	return (
		<button className='square' onClick={onSquareClick}>
			{value}
		</button>
	);
}
