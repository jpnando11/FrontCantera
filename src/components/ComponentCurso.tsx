import { Link } from "react-router-dom";
import { Curso } from "../types";

interface a {
    curso: Curso
}

const ComponentCurso = ({ curso }: a) => {

    const { nombre_curso, costo_curso, nivel_categorias, id_curso } = curso;
    return (
        <div className="flex justify-center">
            <div className="bg-custom-curso w-full flex flex-col justify-end items-center p-5 rounded-lg">
                <p className="uppercase font-bold text-2xl">{nombre_curso}</p>
                <p className="">{nivel_categorias}</p>
                <p className="text-green-400 font-bold">${costo_curso}</p>
                <Link className="text-blue-500 font-bold hover:text-blue-950" to={`incribir/${id_curso}`}>Ver curso</Link>
            </div>
        </div>
    )
}

export default ComponentCurso