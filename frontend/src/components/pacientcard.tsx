import { api } from "@/lib/api";
import { useEffect, useState } from "react"
import { z } from "zod";
import 'dotenv/config';

const pacienteSchema = z.object({
    nome: z.string().nonempty("o nome é um campo obrigatorio"),
    cpf: z.string().nonempty("o cpf é um campo obrigatorio"),
    agente_id: z.coerce.number().min(1, "agente é um campo obrigatorio"),
    endereco: z.string().nonempty("o endereço é obrigatorio"),
    comorbidades: z.string(),
    situação: z.string().optional(),
    microarea_id: z.coerce.number(),
    
  });
  type props = {
    search: string;
  }
  type pacienteSchema = z.infer<typeof pacienteSchema>;

export function Pacientecard({search}:props){
    const [pacientes, setPacientes] = useState<pacienteSchema[]>([])
    useEffect(()=> {
        const fetchPacientes = async() => {
            try{
                const response = await api.get("/pacientes");
                setPacientes(response.data);
            } catch (error){
                console.error("Erro ao carregar pacientes:", error);
            }
        };
        fetchPacientes();
    },[])
    const pacientesFiltrados = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(search.toLowerCase())
      )

return(
    <div className="grid gap-4 mt-6 justify-center" >
        {pacientesFiltrados.map((paciente) => (
             <div
             key={paciente.cpf}
             className="p-4 bg-white w-[38vw] shadow-md rounded-xl"
           >
             <h2 className="text-lg font-bold">Paciente</h2>
             <p><strong>Nome:</strong> {paciente.nome}</p>
             <p><strong>CPF:</strong> {paciente.cpf}</p>
             <p><strong>Endereço:</strong> {paciente.endereco}</p>
             <p><strong>Comorbidades:</strong> {paciente.comorbidades}</p>
             <p><strong>Situação:</strong> {paciente.situação}</p>
             <p><strong>ID do Agente:</strong> {paciente.agente_id}</p>
             <p><strong>Microárea:</strong> {paciente.microarea_id}</p>
           </div>
        ))}
    </div>
)
}