import React, { useState } from 'react';
import { RiAddCircleFill } from "react-icons/ri";
import { useAppContext } from "../application/context";

const AddForm = () => {

    const {loggedUser, getData, createItem} = useAppContext();

    const [empresa, setEmpresa] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (empresa != '') {
            await createItem({ nombre: empresa, pagado: false, fecha: '', owner: loggedUser.uid });
            setEmpresa('');
            getData();
        }
    }

    return (
        <form onSubmit={handleSubmit} className='container d-flex justify-content-center align-items-end mt-3 gap-2'>
            <div className="mb-3">
                <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} type="text" className="inputAdd form-control" placeholder='Agregar empresa' />
            </div>
            <button type="submit" className="btnAdd btn h-50 mb-3 "><RiAddCircleFill size={20} color={'#ddd'} /></button>
        </form>
    );
}

export default AddForm;
