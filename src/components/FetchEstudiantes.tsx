import { useEffect, useState } from "react";
import axios from 'axios';

interface estudiante {
    identificacion: number;
    nombre: string;
    apellido: string;
    fechanacimiento: string;
    foto: string;
    Ficha: {
        codigo: number;
        fechaincio: string;
        programa: number;
    };
}

export default function FetchEstudiantes() {
    const url: string = "http://localhost:3000/api/estudiantes";
    const [estudiantes, setEstudiantes] = useState<estudiante[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<estudiante[]>(url);
                setEstudiantes(result.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {estudiantes.map((estudiante) => (
                <div key={estudiante.identificacion}>
                    <h2>{estudiante.identificacion}</h2>
                    <h2>{estudiante.nombre}</h2>
                    <br />
                </div>
            ))}
        </div>
    );
}
