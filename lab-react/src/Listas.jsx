import Cards from "./Cards";
import { useState } from "react";

const  Listas = () => {
    const musicas = [
        {id: 1, nombre: 'Kumbia Kings', imagen: 'ay_amor.jpg'},
        {id: 2, nombre: 'Rei y Quevedo', imagen: 'fernet.jpg'},
        {id: 3, nombre: 'Farruko', imagen: 'intimidad.jpg'}
    ];

    const [total, setTotal] = useState(0);
    const [busqueda, setBusqueda] = useState("");

    const musicasFiltradas = musicas.filter((musica) => 
        musica.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div
            style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h1>Total de Likes de Musicas Favoritas: {total}</h1>

            <input 
                style={{
                    padding: "10px", 
                    marginBottom: "10px", 
                    width: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }} 
                type="text" 
                placeholder="Ingrese nombre de la música"
                value={busqueda}
                onChange={(e) => {
                    setBusqueda(e.target.value);
                }}
            />

            <div style={{display: "flex", gap: '10px'}}>
                
                {musicasFiltradas.length === 0 && (
                    <p style={{ color: "#ccc", fontSize: "20px"}}>
                        No se encontraron musicas con el nombre "{busqueda}"
                    </p>
                )}

                {musicasFiltradas.map((musica)=> {
                    return (
                        <Cards 
                            key={musica.id} 
                            nombre={musica.nombre} 
                            img={musica.imagen} 
                            onLine={() => {
                                setTotal(total + 1);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Listas;