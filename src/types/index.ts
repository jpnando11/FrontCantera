export interface Curso {
    id_curso: number,
    nombre_curso: string;
    nivel_categorias: string;
    descripcion_curso: string;
    costo_curso: number;
}


export interface Estudiante {
    id_usuario: number,
    primer_nombre: string,
    segundo_nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    edad: number,
    telefono: string,
    correo: string,
    direccion: string,
    nombre_tutor: string,
    contrasena: string,
    tipo_identificacion: string,
    identificacion: string,
    rol: string
}



export interface Inscripciones {
    id_Estudiante: number,
    id_Curso: number
}


export interface Evento {
    id: number;
    titulo: string;
    fecha: string;
    hora: string;
    descripcion?: string;
    lugar?: string;
    createdAt?: string;
    updatedAt?: string;
}



