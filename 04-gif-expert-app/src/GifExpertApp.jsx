import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp= ()=>{

    const [categorias, setCategorias] =  useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = () =>{
        
        setCategorias( [ ...categorias , 'Valorant' ] )
        // setCategorias( cat => [...cat, 'Valorant'])
    };

    return(
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}
                <AddCategory/>
            {/* Listado de Gifs */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categorias.map( category => {
                    return <li key={ category }>{category}</li>
                } )}
                {/* <li>ABC</li>
                <li>123</li>
                <li></li>
                <li></li> */}
            </ol>
                {/* Gif Item */}
        </>
    )
}