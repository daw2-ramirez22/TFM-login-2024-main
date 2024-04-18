import React from "react"
import imagencole from "../assets/img/imagencole.png";
//pagina de "inicio" 
function HomePage() {
    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                    <h1 className="font-extrabold">Proyecto Cristian Ramirez bloc de notas</h1>
                    <img src={imagencole} alt="" />
            </div>
        </div>
    )
}

export default HomePage