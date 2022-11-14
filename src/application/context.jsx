import React, { useContext, useMemo, useState, useEffect } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "./firebase-config";
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [mostrarSpinner, setMostrarSpinner] = useState(false);

    
    // ******************** AUTHENTICATION **************************

    const [loggedUser, setLoggedUser] = useState({});

    onAuthStateChanged(auth, (current) => {
        setLoggedUser(current);
    })

    /**
     * Funcion para logearse en la app a traves de Firebase
     * @param {event} e
     * @param {String} loginEmail 
     * @param {String} loginPassword 
     */
    const login = async (event, loginEmail, loginPassword) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    // **************** CRUD *********************
    const [pagos, setPagos] = useState([]);

    // CREATE
    const createItem = async (obj) => {
        const pagosCollectionRef = collection(db, 'pagos');
        addDoc(pagosCollectionRef, obj);
    }

    // GET
    const getData = async () => {
        const pagosCollectionRef = collection(db, 'pagos');
        const data = await getDocs(pagosCollectionRef);
        const pagosArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPagos(pagosArray);
    }

    // DELETE
    const deleteItem = async (id) => {
        const pagosCollectionRef = collection(db, 'pagos');
        await deleteDoc(doc(pagosCollectionRef, id));
    }

    // UPDATE
    const updateItem = async (id, obj) => {
        const pagosCollectionRef = collection(db, 'pagos');
        await updateDoc(doc(pagosCollectionRef, id), obj)
    }

    // **************** FIN CRUD *********************

    // const inicializar = async () => {
    //     setMostrarSpinner(true);
    //     await getData();
    //     setMostrarSpinner(false);
    // }

    // useEffect(() => {
    //     getData()
    // }, []);

    // VALUE
    const value = useMemo(() => ({
        loggedUser,
        pagos,
        mostrarSpinner,
        setPagos,
        getData,
        deleteItem,
        updateItem,
        createItem,
        setMostrarSpinner,
        login,
        logout
    }),
        [loggedUser, pagos, mostrarSpinner]
    );

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}