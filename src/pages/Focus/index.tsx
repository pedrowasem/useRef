import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import { Button, Grid, TextField } from '@mui/material';
import React, { useRef } from 'react';

const Focus: React.FC = () => {
	const inputElement = useRef<HTMLInputElement | null>(null);
	const listRef = useRef<HTMLUListElement | null>(null);
	let initialIndex = 0;

	function focusInput() {
		if (inputElement.current !== null) {
			initialIndex = 0;
			inputElement.current.focus();
		}
	}

	function focusOnIndex(index: number) {
		if (listRef.current !== null) {
			initialIndex = initialIndex + index;
			const listNode = listRef.current.querySelectorAll('input');
			if (initialIndex >= listNode.length || initialIndex < 0) {
				initialIndex = initialIndex - index;
			}
			const inputNode = listNode[initialIndex];
			inputNode.focus();
		}
	}

	return (
		<Grid container direction="column" alignItems="center">
			<Grid item>
				<Button onClick={focusInput}>Focar no primeiro input</Button>
			</Grid>
			<br />
			<Grid item>
				<Button onClick={() => focusOnIndex(-1)}>
					<ArrowUpwardSharpIcon />
				</Button>
				<Button onClick={() => focusOnIndex(+1)}>
					<ArrowDownwardSharpIcon />
				</Button>
			</Grid>

			<Grid item ref={listRef}>
				<Grid container direction="column" spacing={2}>
					<Grid item>
						<TextField variant="standard" inputRef={inputElement} />
					</Grid>
					<Grid item>
						<TextField variant="standard" />
					</Grid>
					<Grid item>
						<TextField variant="standard" />
					</Grid>
					<Grid item>
						<TextField variant="standard" />
					</Grid>
					<Grid item>
						<TextField variant="standard" />
					</Grid>
					<Grid item>
						<TextField variant="standard" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Focus;
