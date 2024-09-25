import { listCurso } from "../api/CursoApi";
import ComponentCurso from "../components/ComponentCurso"
import { useQuery } from 'react-query'
import ComponentVacio from "../components/ComponentVacio";
import { Curso } from "../types";
import CardEstudiante from "../components/CardEstudiante";

const AdministraccionPage = () => {
    const { data, isLoading } = useQuery<Curso[]>({
        queryKey: ['cursos'],
        queryFn: listCurso
    });

    if (isLoading) return <p>Loading...</p>;

    if (data!.length <= 0) {
        return (<ComponentVacio />)
    }


    return (
        <>
            <div className="my-5 h-full w-screen pl-10">
                <div className="grid grid-cols-3 gap-10">

                    {data?.map(curso => <ComponentCurso key={curso.id_curso} curso={curso} />)}
                </div>

                <div className="mt-5 py-10 border-black border-t-2 grid grid-cols-5 gap-10">
                    <CardEstudiante></CardEstudiante>
                    <CardEstudiante></CardEstudiante>
                    <CardEstudiante></CardEstudiante>
                    <CardEstudiante></CardEstudiante>
                    <CardEstudiante></CardEstudiante>
                    <CardEstudiante></CardEstudiante>
                </div>
            </div>


        </>
    )
}

export default AdministraccionPage