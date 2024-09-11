import { Curso } from "../types"

interface b {
    curso: Curso
}
const ComponentCursoIncripion = ({ curso }: b) => {
    return (
        <>
            <p className="text-lg"><span className="font-bold text-gray-700">Nombre:</span>  {curso.nombre_curso}</p>
            <p className="text-lg"><span className="font-bold text-gray-700">Categoria:</span> {curso.nivel_categorias}</p>
            <p className="text-lg"><span className="font-bold text-gray-700">Descrición del curso</span>: {curso.descripcion_curso}</p>
            <p className="text-lg"><span className="font-bold text-gray-700">costo:</span> ${curso.costo_curso}</p>
        </>
    )
}

export default ComponentCursoIncripion