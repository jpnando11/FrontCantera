interface a {
    text: string
}

const ComponentVacio = ({ text }: a) => {
    return (
        <div className="my-5 h-full w-full flex items-center justify-center">
            <p className="text-center text-2xl font-bold uppercase text-gray-600">{text}</p>
        </div>
    )
}

export default ComponentVacio