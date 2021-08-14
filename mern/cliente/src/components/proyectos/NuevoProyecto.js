import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // State para el proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre de proyecto
    const { nombre } = proyecto;

    // Lee los contenidos del imput
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        
        //Validar proyecto
        if(nombre === '') {
            mostrarError();
            return;
        }

        //Agregar al state
        agregarProyecto(proyecto)

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }


    return(
        <>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
            Nuevo Proyecto</button>

           {formulario 
           ? 
            (
                    <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />

                    <input 
                        type="submit" 
                        className="btn btn-primario btn-block" 
                        value="Agregar Proyecto"
                    />

                </form>
            ) : null
           }
        
        {errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null}
        </>
    );
}

export default NuevoProyecto;