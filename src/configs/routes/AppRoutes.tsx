import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Carrossel from '../../pages/Carrossel';
import Contador from '../../pages/Contador';
import Focus from '../../pages/Focus';
import Video from '../../pages/Video';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Contador />} />
				<Route path="/ex2" element={<Focus />} />
				<Route path="/ex3" element={<Carrossel />} />
				<Route path="/ex4" element={<Video />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
