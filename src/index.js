// 1- import reactDOM libreria
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// 2- conseguir la referencia div con ID root
const el = document.getElementById('root');
// 3- decir a React que tome el control del elemento
const root  = ReactDOM.createRoot(el);
// 4- crear un componente
function App(){ // --> nombre del componente
    let message = 'Bye there!';
    if(Math.random() > 0.5){
        message = 'cambio'
    }
    const date = new Date();
    const time = date.toLocaleDateString();
    return <h1>{time} - mensaje: {message}
            </h1>;
                       <App/>// dentro de las llaves no solo podemos agregar variables
                           // tambien codigo directamente pero cuyo valor sea string o number
    // prop

}
// 5- mostrar el componente en la pantalla
root.render(<App/>);