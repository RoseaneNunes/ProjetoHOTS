import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "lucide-react";

interface Microarea {
  id: number;
  nome: string;
  descricao: string;
}

const singUpSchema = z
  .object({
    nome: z.string().nonempty("esse campo é obrigatorio"),
    email: z.string().email("email invalido"),
    senha: z.string().min(8, "esse campo tem que ter pelo menos 8 caracteres"),
    cargo: z
      .string({ required_error: "esse campo é obrigatorio" })
      .nonempty("esse campo é obrigatorio"),
    confirm_password: z.string().nonempty("esse campo é obrigatorio"),
    microarea_id: z.number().optional(),
  })
  .refine((data) => data.senha === data.confirm_password, {
    message: "As senhas não coincidem",
    path: ["confirm_password"],
  });

type singUpSchema = z.infer<typeof singUpSchema>;
type signUpProps = {
  setMudarPage: (value: boolean) => void;
};

export default function SingUp({ setMudarPage }: signUpProps) {
  const [microareas, setMicroareas] = useState<Microarea[]>([]);

  useEffect(() => {
    const fetchMicroareas = async () => {
      try {
        const response = await api.get("/microareas");
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
  } = useForm<singUpSchema>({ resolver: zodResolver(singUpSchema) });

  const router = useRouter();

  async function handleRegiterUser(data: singUpSchema) {
    try {
      const { confirm_password, ...requestData } = data;

      console.log("Enviando dados:", requestData);

      const response = await api.post(
        "http://localhost:3333/api/agentes",
        requestData
      );
      toast.success("usuario registrado com sucesso!");
      router.push("/homePage");
    } catch (error) {
      console.error("erro completo:", error);
      toast.error("ocorreu um erro ao criar um usuario " + error);
    }
  }

  return (
    <div>
      <section className="flex flex-col w-screen h-screen  absolute z-40 items-center bg-[#f2f7f5] justify-center gap-3 ">
        <h1 className="text-[#00473e] text-7xl font-bold">HOTS</h1>
        <h2 className="text-[#00473e] bg-[#faae2b] p-1.5 rounded-3xl">
          Heath organization Task System
        </h2>

        <form onSubmit={handleSubmit(handleRegiterUser)}>
          <div className="xl:w-[568px] relative  w-[90vw] h-[60vh] md:w-[60vw] border-2 border-[#00332c]  rounded-4xl flex flex-col items-center   justify-center  shadow-xl shadow-[#00332c] ">
            <h3 className="text-[] w-[200px] h-16 inline  bg-[#00332c]  absolute left-1/3 top-0 xl:top-0 text-3xl text-center text- rounded-b-4xl shadow-xl ">
              Cadastrar
            </h3>
            <button
              onClick={() => setMudarPage(true)}
              className=" inline  absolute top-4 left-4  "
            >
              <ArrowLeftIcon size={40} color="#00332c" />
            </button>

            <div className="flex  items-center flex-col gap-1.5 py-9 ">
              <Input
                disabled={isSubmitting}
                {...register("nome")}
                placeholder="Nome do usuario"
                className=
                {` ${errors.nome ? "ring-2 ring-red-500" : " xl:w-[355px] w-[80vw] h-[5vh]  md:w-[40vw] border-2 border-[#00332c]  text-[#475d5b] hover:ring-1"}`}
              />

              <Input
                placeholder="Email"
                disabled={isSubmitting}
                {...register("email")}
                className=
                {` ${errors.nome ? "ring-2 ring-red-500" : " xl:w-[355px] w-[80vw]  md:w-[40vw] h-[5vh]  border-2 border-[#00332c]  text-[#475d5b] hover:ring-1"}`}
              />

              <Controller
                name="cargo"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isSubmitting} 
                  >
                    <SelectTrigger className={` ${errors.nome ? "ring-2 ring-red-500" :     "xl:w-[355px] w-[80vw] h-[5vh] md:w-[40vw] border-[#00332c] border-2 text-[#475d5b] hover:ring-1"}`}
                >
                      <SelectValue placeholder="Selecione o cargo" />
                    </SelectTrigger>
                    <SelectContent className="text-[#475d5b] shadow-2xs">
                      <SelectGroup>
                        <SelectItem
                          value="AGT"
                          className="text-[#475d5b] shadow-2xs"
                        >
                          Agente de Saúde
                        </SelectItem>
                        <SelectItem
                          value="ADM"
                          className="text-[#475d5b] shadow-2xs"
                        >
                          Administrador
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              <Controller
                name="microarea_id"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                    value={field.value ? String(field.value) : undefined}
                    disabled={isSubmitting} 
                  >
                    <SelectTrigger className=
                    {` ${errors.nome ? "ring-2 ring-red-500" : "xl:w-[355px] w-[80vw] h-[5vh] md:w-[40vw] border-[#00332c] border-2 text-[#475d5b] hover:ring-1"}`}>
                      <SelectValue placeholder="Selecione a microárea" />
                    </SelectTrigger>
                    <SelectContent className="text-[#475d5b] shadow-2xs ">
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

              <Input
                disabled={isSubmitting}
                placeholder="Senha"
                {...register("senha")}
                className=
                {` ${errors.nome ? "ring-2 ring-red-500" : " xl:w-[355px] w-[80vw] h-[5vh]  md:w-[40vw] border-2 border-[#00332c] text-[#475d5b] hover:ring-1"}`}
              />

              <Input
                disabled={isSubmitting}
                placeholder="Confirme sua Senha"
                {...register("confirm_password")}
                className=
                {` ${errors.nome ? "ring-2 ring-red-500" : " xl:w-[355px] w-[80vw] h-[5vh]  md:w-[40vw] border-2 border-[#00332c] text-[#475d5b] hover:ring-1"}`}
              />
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-[#faae2b] xl:w-[300px] h-[40px] w-[30vh]  md:w-[40vw] absolute bottom-10 rounded-4xl  shadow-xl hover:ring hover:ring-amber-500 hover:ring-offset-4 text-[#f2f7f5]"
            >
              {" "}
              {isSubmitting ? "Carregando..." : "Criar conta"}
            </button>
          </div>
        </form>
      </section>
      {/* <img    src="/teste.png" className='absolute top-0 left-0 tranform  -translate-y-40 -translate-x-40'/>
        <img    src="/teste.png" className='absolute bottom-0 right-0 tranform  translate-y-56 translate-x-56'/> */}
    </div>
  );
}
