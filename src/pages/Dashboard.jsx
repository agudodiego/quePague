import React, { useEffect } from 'react';
import AddForm from '../components/AddForm';
import PagosList from '../components/PagosList';
import Spinner from '../components/Spinner';
import { useAppContext } from "../application/context";

const Dashboard = () => {

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    const mes = new Date();

    const { pagos, getData, mostrarSpinner, setMostrarSpinner, updateItem, logout } = useAppContext();

    const inicializar = async () => {
        setMostrarSpinner(true);
        await getData();
        setMostrarSpinner(false);
    }

    const resetearMes =  () => {
        const respuesta = window.confirm('estas seguro de resetear los datos?');
        if (respuesta) {
            pagos.forEach(async (element )=> {
                const newFields = { pagado: false, fecha: '' };
                await updateItem(element.id, newFields);            
            });
            getData();
        }
    }

    useEffect(() => {
        inicializar();
    }, []);

    return (
        <div className='container text-center'>
            <h3 className='mes'>{meses[mes.getMonth()].toUpperCase()}</h3>
            <AddForm />
            <button onClick={resetearMes} className='btnLogout btn m-1'>Resetear Mes</button>
            {mostrarSpinner ? <Spinner /> : <PagosList />}
            <button onClick={logout} className='btnLogout btn m-3'>Logout</button>
        </div>
    );
}

export default Dashboard;
