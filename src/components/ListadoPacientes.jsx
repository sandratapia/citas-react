import React from 'react';
import { useEffect } from 'react';
import Paciente from './Paciente.jsx';

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0){
      console.log('Nuevo paciente');
    }
  }, [pacientes]);

  const hayPacientes = 'Listado Pacientes';
  const noHayPacientes = 'No hay Pacientes';

  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">{pacientes && pacientes.length ? hayPacientes : noHayPacientes}</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus  {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <div className="h-screen overflow-y-scroll">
        { pacientes.map( (paciente) => {
          return(
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          );
        }) }
        
      </div>
    </div>
  );
};

export default ListadoPacientes;
