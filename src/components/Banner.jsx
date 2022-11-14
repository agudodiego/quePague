import React from 'react';
import { useAppContext } from "../application/context";

const Banner = () => {

  const {loggedUser} = useAppContext();

  return (
    <div>
      <h1 className='titulo text-center'>QuePagué 🤔</h1>
      {loggedUser ? <p className='user text-center'>usuario: {loggedUser.email}</p> : null}
    </div>
  );
}

export default Banner;
