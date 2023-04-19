import { Box, Button, Grid } from '@mui/material';
import React, { useRef } from 'react';

const Focus: React.FC = () => {
	const inputElement = useRef<HTMLInputElement | null>(null);

	function focusInput() {
		if (inputElement.current !== null) {
			inputElement.current.focus();
		}
	}

	return (
		<Grid>
			<Box>
				<input ref={inputElement} />
				<Button onClick={focusInput}>Focar no input</Button>
			</Box>
		</Grid>
	);
};

export default Focus;
