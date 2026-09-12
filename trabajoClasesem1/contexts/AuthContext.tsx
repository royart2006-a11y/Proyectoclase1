import { Children, createContext , useState} from "react";

//1. Tipado del objeto principal del contexto
type User={
    email: string;
    authToken?: string;
    sessionToken?: string;
    role: string;
}|null
type AuthContextType={
user: User | null;
login: ()=>{};
logout: ()=>{};
}

//2. Creación del contexto
const AuthContext = createContext<AuthContextType | null>(null);

//3.La creación del provider: medio por el cuál manejamos el estado desde otra pantallas.
export const AuthProvider = ({children}:{children: React.ReactNode})=>{
const [user,setUser]= useState<User>(null);
const login=()=>{
     return '';
}
   
    const logout = () =>{ 
          return '';
}
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );

};
//4 Hook personalizado : exposicion del contexto a componentes de la aplicacion.


