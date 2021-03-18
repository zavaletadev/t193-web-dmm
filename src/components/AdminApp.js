import React, { useEffect } from 'react';

import {
	Switch,
	Route,
	useRouteMatch,
} from 'react-router-dom';
import Home from '../pages/admin/Home';
import Perfil from '../pages/admin/Perfil';
import AdminHeader from './AdminHeader';
import AdminMenu from './AdminMenu';

const AdminApp = (props) => {
	/**
	 * Constante que nos indique la url homde de admin
	 */
	const adminUrl = useRouteMatch();

	/**
	 * Effecto que se ejecute al inicio para
	 * quitar la imagen de fondo
	 */
	useEffect(() => {
		/**
		 * La variable global --document-- nos permite
		 * acceder al DOM del archivo index del proyecto
		 */
		document.body.style = 'background: none';
	}, []);

	return (
		<div className='container-scroller'>
			<AdminHeader />

			<div className='container-fluid page-body-wrapper'>
				<AdminMenu adminUrl={adminUrl} />

				<div className='main-panel'>
					<div className='content-wrapper'>
						{/**
						 * Indicamos las rutas dentro del panel de admin
						 */}

						<Switch>
							<Route
								path={adminUrl.url}
								exact
							>
								<Home />
							</Route>

							<Route
								path={`${adminUrl.url}/perfil`}
								exact
							>
								<Perfil />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminApp;
