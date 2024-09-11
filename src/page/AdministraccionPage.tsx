import { listCurso } from "../api/CursoApi";
import ComponentCurso from "../components/ComponentCurso"
import { useQuery } from 'react-query'
import ComponentVacio from "../components/ComponentVacio";
import { Curso } from "../types";

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
            <div className="my-5 grid grid-cols-2 h-full w-screen gap-10">
                {data?.map(curso => <ComponentCurso key={curso.id_curso} curso={curso} />)}

            </div>

        </>
    )
}

export default AdministraccionPage