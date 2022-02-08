import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error.jsx';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0){
      setMascota(paciente.mascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  },[paciente])

  const mensaje = 'Por favor, rellena todos los campos';

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)
    return random + fecha;
  }

  const handleMascotaName = event => {
    setMascota(event.target.value)
  }

  const handlePropietarioName = event => {
    setPropietario(event.target.value)
  }

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handleFecha = event => {
    setFecha(event.target.value)
  }

  const handleSintomas = event => {
    setSintomas(event.target.value)
  }

  const resetFormulario = ( ) => {
    setMascota('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  const handleSubmit = event => {
    event.preventDefault();

    //VALIDACION DEL FORMULARIO
    if([mascota, propietario, email, fecha, sintomas].includes('')){ 
      setError(true);
      return;
    }
    setError(false);

    //OBJETO DE PACIENTE
    const objetoPaciente = {
      mascota, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId(),
    }

    if(paciente.id){
      //EDITANDO EL REGISTRO
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacientesActualizados);
      setPaciente({})
    }else{
      //NUEVO REGISTRO
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //REINICIAR FORMULARIO
    resetFormulario();
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''} 
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        { error && <Error mensaje={mensaje}/> }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" id="mascota" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={mascota} onChange={handleMascotaName}/>
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input type="text" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario} onChange={handlePropietarioName}/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input type="email" id="email" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={handleEmail}/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={handleFecha}/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea name="" id="sintomas" placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={sintomas} onChange={handleSintomas}/>
        </div>

        <input type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"/>
      </form>
    </div>
  );
};

export default Formulario;
