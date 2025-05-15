import { Header } from "@/components/header";
import { CadastroDePaciente } from "@/components/cadastroPaciente";
import { Pacientecard } from "@/components/pacientcard";
import { BarraDeBusca } from "@/components/barraDeBusca";
import { useState } from "react";



export default function HomePage() {
  const [search, setSearch] = useState("")

  return (
    <section className="bg-[#00473e] w-screen h-screen  ">
      <Header />
      <div className="flex flex-col-3 h-[90vh] justify-center pt-7  gap-7">
        <div className=" bg-[#f2f7f5] w-[25vw] rounded-3xl text-[#00332c] py-5 justify-items-center">
        <h1 className=" bg-[#faae2b] w-32 h-8 text-center rounded-4xl ">Agenda</h1>
        </div>
        <div className=" bg-[#f2f7f5] w-[40vw] h-auto rounded-3xl text-[#00332c] relative justify-items-center py-5  overflow-y-auto">
          <h1 className=" bg-[#faae2b] w-32 h-8 text-center rounded-4xl ">Pacientes</h1>
          <div className="relative top-5  right-3 w-[36vw]"><BarraDeBusca search={search} setSearch={setSearch}/><CadastroDePaciente/></div>
         <Pacientecard search={search}/>
        </div>
        <div className=" bg-[#f2f7f5] w-[25vw]  rounded-3xl text-[#00332c] py-5 justify-items-center ">
        <h1 className=" bg-[#faae2b] w-32 h-8 text-center rounded-4xl ">Mapa</h1>
        </div>    
      </div>
    </section>
  );
}
