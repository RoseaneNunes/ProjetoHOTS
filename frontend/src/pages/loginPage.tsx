import SingUp from "@/components/signUp";
import SingIn from "@/components/signIn";
import { useState } from "react";


export default function LoginPage() {
const [mudarPage, setMudarPage] = useState(true);

return(
  <div>
     {mudarPage ? (<SingIn setMudarPage={setMudarPage}/>) : (<SingUp setMudarPage={setMudarPage}/>)}
  </div>
  )
}
  

