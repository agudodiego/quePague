import React from 'react';
import PagoCard from './PagoCard';
import { useAppContext } from "../application/context";

const PagosList = () => {

  const {pagos} = useAppContext();

  return (
    <>
      {
        pagos.map((pago, index) => {
          return (
            <PagoCard key={index} pago={pago} />
          )
        })
      }
    </>
  );
}

export default PagosList;
