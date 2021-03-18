import React from 'react';

/**
 * Agregamos las librerías de Router Dom para
 * poder generar una app web con navegacion
 * por rutas
 */
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import AdminApp from './components/AdminApp';

/**
 * La estructura de un arbol de navegación de ReactJS es el siguiente:
 * Router ----> Contenedor de un arbol de navegación
 * Switch ----> Indica los elementos qye van a generar un cambio
 *              de contenido en la url
 * Route ----> Contenido que va a cambiar
 */

import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
	return (
		<Router>
			<Switch>
				{/**
				 * Un route (eq. Screen)
				 * 1.- Url con la que mostraremos este componente
				 * ******2.- Si la url es exacta o no
				 */}
				<Route path='/' exact>
					<Inicio />
				</Route>

				<Route path='/login' exact>
					<Login />
				</Route>

				<Route path='/registro'>
					<Registro />
				</Route>

				{/**
				 * Sección de Admin (Panel)
				 */}
				<Route path='/admin'>
					<AdminApp />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
