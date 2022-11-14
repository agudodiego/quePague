import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from "../application/context";
import Spinner from './Spinner';

const EditForm = () => {

  const { pagos, updateItem, getData } = useAppContext();

  const params = useParams();
  const navigate = useNavigate();

  // valores de los inputs
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [pagado, setPagado] = useState();
  const [nuevaFecha, setNuevaFecha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFields = { nombre: nuevoNombre, pagado: pagado, fecha: nuevaFecha };
    await updateItem(params.id, newFields);
    getData();
    navigate('/dashboard');
  }

  useEffect(() => {
    const [pago] = pagos.filter((p) => p.id == params.id);
    setNuevoNombre(pago?.nombre);
    setNuevaFecha(pago?.fecha);
    setPagado(pago?.pagado);
  }, []);

  const elegirFecha = (fecha) => {
    setNuevaFecha(fecha);
    if (fecha != '') {
      setPagado(true)
    } else {
      setPagado(false)
    };
  }

  return (
    <form onSubmit={handleSubmit} className='container text-center mt-5' >

      <div className="col-sm-6 mb-3 m-auto">
        <input value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} type="text" className="form-control" placeholder='nuevo nombre' />
      </div>

      <div className="col-sm-6 mb-3 m-auto">
        <input value={nuevaFecha} onChange={(e) => elegirFecha(e.target.value)} type="date" className="inputFecha form-control" />
      </div>

      <Link to='/dashboard' className="btnCancel btn h-50 m-3">Cancelar</Link>
      <button type="submit" className="btnEdit btn h-50 m-3">Guardar</button>

    </form>
  );
}

export default EditForm;
