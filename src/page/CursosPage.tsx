import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { listCursoIns } from "../api/IncripcricionesApi";
import {  IncripcionesCurso } from "../types";

const CursosPage = () => {
    const { id_curso } = useParams();

    const { data, isLoading } = useQuery<IncripcionesCurso>({
        queryKey: ['cursoIns', id_curso],
        queryFn: () => listCursoIns(id_curso!)
    });

    if (isLoading) return 'Loading...'
    console.log(data);

    return (
        <div className="block">
            <h1>Estudiantes inscrito al curtos {data?.nombre_curso}</h1>
            <div>{data?.usuarios.map(usu => <p>{usu.primer_nombre}</p>)}</div> 
        </div>
    )
}

export default CursosPage