import './Square.css';

function Square({ value }: { value: string }) {
	return <button className='square'>{value}</button>;
}

export default Square;
