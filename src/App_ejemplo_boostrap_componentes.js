import React from 'react';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
	return (
		/**
		 * En ReactJS no utilizamos class para referirinos a una clase
		 * de diseño css, en su lugar utilizamos
		 * className
		 */
		<div className='container'>
			<div className='row'>
				<div className='col-sm-4 bg-danger'>
					<Inicio />
				</div>
				<div className='col-sm-4 bg-warning'>
					<Login />
				</div>
				<div className='col-sm-4 bg-success'>
					<Registro />
				</div>
			</div>
		</div>
	);
}

export default App;
