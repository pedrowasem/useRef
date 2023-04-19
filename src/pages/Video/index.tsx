import { Button } from '@mui/material';
import { useRef, useState } from 'react';

export default function Video() {
	const [isPlaying, setIsPlaying] = useState(false);
	const ref = useRef<HTMLVideoElement | null>(null);

	function handleClick() {
		const nextIsPlaying = !isPlaying;
		setIsPlaying(nextIsPlaying);

		if (ref.current !== null) {
			if (nextIsPlaying) {
				ref.current.play();
			} else {
				ref.current.pause();
			}
		}
	}

	return (
		<>
			<Button
				variant="contained"
				sx={{ marginBottom: 2 }}
				onClick={handleClick}
			>
				{isPlaying ? 'Pause' : 'Play'}
			</Button>
			<br />
			<video
				width="550"
				ref={ref}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			>
				<source
					src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
					type="video/mp4"
				/>
			</video>
		</>
	);
}
