import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Carrossel from '../../pages/Carrossel';
import Contador from '../../pages/Contador';
import Focus from '../../pages/Focus';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Contador />} />
				<Route path="/ex2" element={<Focus />} />
				<Route path="/ex3" element={<Carrossel />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
