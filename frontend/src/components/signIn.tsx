import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { z } from "zod";
import { api,checkError } from "@/lib/api";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/contextAuth";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "lucide-react";


  const signInSchema = z
  .object({
    email: z.string().email("email invalido"),
    senha: z.string().min(8, "esse campo tem que ter pelo menos 8 caracteres"),
  })
  

type signInSchema = z.infer<typeof signInSchema>;
type signInProps = {
  setMudarPage: (value: boolean) => void;
};

export default function SingIn({setMudarPage}:signInProps) {


  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<signInSchema>({ resolver: zodResolver(signInSchema) });

  const ContextAuth = useAuth();
  const router = useRouter();
  
  async function handleSignIn(data: signInSchema) {
    try {
     
      const response = await api.post('/agentes/login', data);
      ContextAuth.login(response.data.token);
      console.log("deu certo");
    } catch (error) {
      checkError(
        error,
        (message) => toast.error(message),
        () => toast.error('Erro ao fazer login: ' + (error || 'Ocorreu um erro.'))
      );
    }
  }
 
  return (
    <div>
      <section className="flex flex-col w-screen h-screen  absolute z-40 items-center bg-[#f2f7f5] justify-center gap-3 ">
        <h1 className="text-[#00473e] text-7xl font-bold">HOTS</h1>
        <h2 className="text-[#00473e] bg-[#faae2b] p-1.5 rounded-3xl">
          Heath organization Task System
        </h2>
      
          <form
           onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="xl:w-[568px]   w-[90vw] h-[60vh] md:w-[60vw] relative  border-2 border-[#00332c]  rounded-4xl flex flex-col items-center   justify-center  shadow-xl shadow-[#00332c] ">
              <div className="relative xl:w-[568px]   w-[90vw] h-[60vh] md:w-[60vw]  ">
              <h3 className="text-[] w-[200px] h-16 inline  bg-[#00332c]  absolute left-1/3 top-0 xl:top-0 text-3xl text-center text- rounded-b-4xl shadow-xl ">
                Login
              </h3>
              <button  onClick={() => setMudarPage(false)}  className=" inline  absolute top-4 right-4  ">
                  <ArrowRightIcon size={40} color="#00332c"/>
              </button>
              </div>
            
              

              <div className="flex  items-center flex-col gap-7 py-9 ">
                <Input
                 disabled={isSubmitting}
                  placeholder="Email"
                  {...register("email")}
                  className={` ${errors.email ? "ring-2 ring-red-500" : "xl:w-[355px] w-[80vw]  h-[7vh]  absolute top-1/3 md:w-[40vw] border-2 border-[#00332c]  text-[#475d5b] hover:ring-1"}`} 
                />
               {errors.email?.message && toast.error(errors.email.message)}

                <Input
                 disabled={isSubmitting}
                  placeholder="Senha"
                  {...register("senha")}
                  className= {` ${errors.email ? "ring-2 ring-red-500" :" xl:w-[355px] h-[7vh] w-[80vw] absolute top-1/2 md:w-[40vw] border-2 border-[#00332c] text-[#475d5b] hover:ring-1"}`}
                />
                {errors.senha?.message && toast.error(errors.senha.message)}
              <button  onClick={() => setMudarPage(true)} className="text-[#00332c] self-start absolute  left-[41vw] top-[70vh] hover:text-neutral-400" >Não tem cadastro</button>
          
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-[#faae2b] xl:w-[300px] h-[40px] w-[30vh]  md:w-[40vw] absolute bottom-1/6 rounded-4xl  shadow-xl hover:ring hover:ring-amber-500 hover:ring-offset-4 text-[#f2f7f5]"
              >
                {" "}
                {isSubmitting ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>
      </section>
      {/* <img    src="/teste.png" className='absolute top-0 left-0 tranform  -translate-y-40 -translate-x-40'/>
        <img    src="/teste.png" className='absolute bottom-0 right-0 tranform  translate-y-56 translate-x-56'/> */}
    </div>
  );
}
