const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {mascota, propietario, email, fecha, sintomas, id} = paciente;

    const handleModificarPaciente = () => {
        setPaciente(paciente);
    }

    const handleEliminarPaciente = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-4 ml-3">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{mascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-around">
                <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={handleModificarPaciente}>Editar</button>
                <button className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg" onClick={handleEliminarPaciente}>Eliminar</button>
            </div>
        </div>
    );
};

export default Paciente;
