import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Microarea {
  id: number;
  nome: string;
  descricao: string;
}
interface Agente {
  id: number;
}

const pacienteSchema = z.object({
  nome: z.string().nonempty("o nome é um campo obrigatorio"),
  cpf: z.string().nonempty("o cpf é um campo obrigatorio"),
  agente_id: z.number().min(1, "agente é um campo obrigatorio"),
  endereco: z.string().nonempty("o endereço é obrigatorio"),
  /*Rua: z.string().nonempty("rua é um campo obrigatorio"),
    Numero: z
      .number()
      .nonnegative()
      .min(1, "numero é um campo obrigatio não negativo"),
    bairro: z.string().nonempty("bairro é um campo obrigatio"),*/
  comorbidades: z.string(),
  situação: z.string(),
  microarea_id: z.number(),
});

type pacienteSchema = z.infer<typeof pacienteSchema>;

export function CadastroDePaciente() {
  const [microareas, setMicroareas] = useState<Microarea[]>([]);

  const [agentIds, setAgentIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchAgentes = async () => {
      try {
        const response = await api.get<Agente[]>(
          "http://localhost:3333/api/agentes"
        );
        const ids = response.data.map((agent) => agent.id);
        setAgentIds(ids);
      } catch (error) {
        console.error("Erro ao carregar agentes:", error);
      }
    };

    fetchAgentes();
  }, []);

  useEffect(() => {
    const fetchMicroareas = async () => {
      try {
        const response = await api.get("http://localhost:3333/api/microareas");
        setMicroareas(response.data);
      } catch (error) {
        console.error("Erro ao carregar microáreas:", error);
      }
    };

    fetchMicroareas();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<pacienteSchema>({ resolver: zodResolver(pacienteSchema) });

  async function handleRegiterUser(data: pacienteSchema) {
    try {
      console.log("Enviando dados:", data);

      const response = await api.post(
        "http://localhost:3333/api/pacientes",
        data
      );
      toast.success("paciente registrado com sucesso!");
    } catch (error) {
      console.error("erro completo:", error);
      toast.error("ocorreu um erro ao criar um paciente " + error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <PlusIcon className="inline bg-[#faae2b] rounded-4xl absolute top-0 -right-7 hover:ring-1 hover:ring-offset-4 hover:ring-[#faae2b] " />
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(handleRegiterUser)}>
          <DialogHeader>
            <DialogTitle>Cadastro de paciente</DialogTitle>
            <DialogDescription className=" grid gap-1">
              preencha os campos a baixo:
              <div className=" grid gap-2">
                <Input
                  className={` ${errors.nome ? "ring-2 ring-red-500" : ""}`}
                  placeholder="Nome Completo"
                  disabled={isSubmitting}
                  {...register("nome")}
                />
                <Input
                  className={` ${errors.cpf ? "ring-2 ring-red-500" : ""}`}
                  placeholder="cpf"
                  disabled={isSubmitting}
                  {...register("cpf")}
                />
                <Controller
                  name="agente_id"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value ? String(field.value) : undefined}
                      onValueChange={(value) => field.onChange(Number(value))}
                    >
                      <SelectTrigger
                        className={`xl:w-[355px] w-[80vw] h-[5vh] md:w-[40vw] ${
                          errors.agente_id ? "ring-2 ring-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Selecione o id do agente" />
                      </SelectTrigger>
                      <SelectContent className="text-[#475d5b] shadow-2xs">
                        <SelectGroup>
                          {agentIds.map((id) => (
                            <SelectItem
                              key={id}
                              value={String(id)}
                              className="text-[#475d5b]"
                            >
                              {id}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              endereço:
              <div className="grid gap-2  ">
                <Input
                  className={` ${errors.endereco ? "ring-2 ring-red-500" : ""}`}
                  placeholder="Endereço"
                  disabled={isSubmitting}
                  {...register("endereco")}
                />
                <Controller
                  name="microarea_id"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value ? String(field.value) : undefined}
                      onValueChange={(value) => field.onChange(Number(value))}
                      disabled={isSubmitting} 
                    >
                      <SelectTrigger
                        className={`xl:w-[355px] w-[80vw] h-[5vh]  md:w-[40vw] ${
                          errors.microarea_id ? "ring-2 ring-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Selecione a microárea" />
                      </SelectTrigger>
                      <SelectContent className="text-[#475d5b] shadow-2xs">
                        <SelectGroup>
                          {microareas.map((microarea) => (
                            <SelectItem
                              key={microarea.id}
                              value={String(microarea.id)}
                              className="text-[#475d5b] shadow-2xs"
                            >
                              {microarea.nome}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              Saude:
              <div className="grid gap-2">
                <Input
                  className={` ${
                    errors.comorbidades ? "ring-2 ring-red-500" : ""
                  }`}
                  placeholder="comorbidades"
                  disabled={isSubmitting}
                  {...register("comorbidades")}
                />
                <Textarea placeholder="situação" {...register("situação")} />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="text-center bg-[#faae2b] text-[#fffffe] h-8  rounded-4xl hover:ring-2 "
              >
                {isSubmitting ? "Carregando..." : "Cadastrar paciente"}
              </button>
            </DialogDescription>
          </DialogHeader>
        </form>
      </DialogContent>
    </Dialog>
  );
}
