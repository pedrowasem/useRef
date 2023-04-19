import { Button, Grid } from '@mui/material';
import React, { useRef } from 'react';

const Contador: React.FC = () => {
	const contadorRef = useRef(0);

	function somarRef() {
		contadorRef.current = contadorRef.current + 1;
	}

	return (
		<Grid container justifyContent="space-evenly">
			<Grid item>
				<Button variant="contained" onClick={somarRef}>
					Adicionar ao contador
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					onClick={() => {
						alert('Você clicou ' + contadorRef.current + ' vezes!');
					}}
				>
					{' '}
					Mostrar quantidade de cliques
				</Button>
			</Grid>
		</Grid>
	);
};

export default Contador;
