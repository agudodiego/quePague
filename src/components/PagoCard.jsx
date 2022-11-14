import React from 'react';
import { RiMoneyDollarCircleFill, RiEditCircleFill, RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAppContext } from "../application/context";

let date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
let hoy = `${year}-${month + 1}-${day}`;

const PagoCard = ({ pago }) => {

  const { getData, deleteItem, updateItem } = useAppContext();

  const borrarPago = async (id) => {
    await deleteItem(id);
    getData();
  }

  const marcarPago = async (pago) => {
    const estadoDelPago = !pago.pagado;
    let fecha;
    if (estadoDelPago) {
      fecha = hoy;
    }else{
      fecha = '';
    }
    const newFields = { pagado: estadoDelPago, fecha: fecha };
    await updateItem(pago.id, newFields);
    getData();
  }

  return (
    <div className={`pagoCard p-2 m-2 d-flex justify-content-between align-items-center ${pago.pagado ? 'opacity' : null}`}>

      <div className='textoCard align-start'>
        <h4 className='text-start m-0'>{pago.nombre.toUpperCase()}</h4>
        <p className='text-start m-0'>{pago.fecha}</p>
      </div>

      <div className='btnsCard'>
        <button onClick={() => marcarPago(pago)} className='btnMoney btn'>
          <RiMoneyDollarCircleFill size={20} color={'green'} />
        </button>

        <Link to={'/edit/' + pago.id} className='btnEdit btn m-1' ><RiEditCircleFill size={20} /></Link>

        <button onClick={() => borrarPago(pago.id)} className='btnDelete btn'><RiDeleteBin2Fill size={20} /></button>
      </div>

    </div>
  );
}

export default PagoCard;
