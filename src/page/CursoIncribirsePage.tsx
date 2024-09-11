import { useParams } from "react-router-dom";
import { useQuery } from "react-query"
import { listCursouno } from "../api/CursoApi";
import { Curso } from "../types";
import ComponentCursoIncripion from "../components/ComponentCursoIncripion";
import ListEstudiante from "../components/ListEstudiante";


const CursoIncribirsePage = () => {
    const { id_curso } = useParams();

    const { data, isLoading } = useQuery<Curso[]>({
        queryKey: ['curso', id_curso],
        queryFn: () => listCursouno(id_curso)
    });


    if (isLoading) return 'Loading...'


    return (
        <div className="w-full">
            {data?.map(curso => <ComponentCursoIncripion key={id_curso} curso={curso} />)}
            <ListEstudiante></ListEstudiante>
        </div>
    )
}

export default CursoIncribirsePage