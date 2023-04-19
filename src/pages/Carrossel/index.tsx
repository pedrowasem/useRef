import { Box, Button } from '@mui/material';
import React, { useRef } from 'react';

const Carrossel: React.FC = () => {
	const listRef = useRef<HTMLUListElement | null>(null);

	function scrollToIndex(index: number) {
		if (listRef.current !== null) {
			const listNode = listRef.current;
			const imgNode = listNode.querySelectorAll('li > img')[index];
			imgNode.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center',
			});
		}
	}

	return (
		<>
			<Box display="flex" justifyContent="center">
				<Button onClick={() => scrollToIndex(0)}>Tom</Button>
				<Button onClick={() => scrollToIndex(1)}>Maru</Button>
				<Button onClick={() => scrollToIndex(2)}>Jellylorum</Button>
			</Box>

			<Box sx={{ height: 300, display: 'flex' }} justifyContent="center">
				<ul
					ref={listRef}
					style={{
						display: 'flex',
						gap: '5px',
						listStyle: 'none',
						width: '300px',
						overflow: 'hidden',
					}}
				>
					<li>
						<img
							src="https://placekitten.com/g/200/200"
							alt="Tom"
						/>
					</li>
					<li>
						<img
							src="https://placekitten.com/g/300/200"
							alt="Maru"
						/>
					</li>
					<li>
						<img
							src="https://placekitten.com/g/250/200"
							alt="Jellylorum"
						/>
					</li>
				</ul>
			</Box>
		</>
	);
};

export default Carrossel;
