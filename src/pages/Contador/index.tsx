import { Button } from '@mui/material';
import React, { useRef } from 'react';

const Contador: React.FC = () => {
	const contadorRef = useRef(0);

	function somarRef() {
		contadorRef.current = contadorRef.current + 1;
	}

	return (
		<div>
			<Button onClick={somarRef}>Contador</Button>
			<Button
				onClick={() => {
					alert('Você clicou ' + contadorRef.current + ' vezes!');
				}}
			>
				{' '}
				Mostrar quantidade de cliques
			</Button>
		</div>
	);
};

export default Contador;
