import { Link } from "react-router-dom";
import { Curso } from "../types";

interface a {
    curso: Curso
}

const ComponentCurso = ({ curso }: a) => {

    const { nombre_curso, costo_curso, id_curso } = curso;
    return (
        <div className="flex justify-center">
            <div className="bg-custom-curso w-1/2 h-32 flex flex-col justify-end items-center p-5 rounded-lg">
                <p>Curso: {nombre_curso}</p>
                <p>costo: {costo_curso}</p>
                <Link to={`incribir/${id_curso}`}>Ver curso</Link>
            </div>
        </div>
    )
}

export default ComponentCurso