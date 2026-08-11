//função que verifica autenticação de usuário via fetch

export const validarToken  = async () => {
    console.log("Verificando se há algum usuário sendo passado")

    try {
        const validar = await fetch("http://localhost:4000/token", {
            credentials: "include",
            method: "GET",

        })

        if(validar.ok) {
            const validado = await validar.json()
            console.log("Usuário existe e foi validado")
            return validado;
        }

        console.log("Usuário não autenticado")
        return null;


    } catch (error) {
        alert("ERRO AO PROCESSAR REQUISIÇÃO")
        console.error("Algo deu errado ao tentar processar a requisição")

    }
}

export const validarTokenObrigatorio  = async (navegar: any) => {
    
   
    console.log("Verificando se há algum usuário sendo passado")

    try {
        const validar = await fetch("http://localhost:4000/token", {
            credentials: "include",
            method: "GET",

        })

        if(validar.status === 404 || validar.status === 401 ) {
            alert("Ops! Parece que algo está errado. Redirecionando para página de entrada")

            navegar("/entrar")
            return;

        }

        const validado = await validar.json()
        console.log("O usuário existe e foi validado")

        return validado;


    } catch (error) {
        alert("ERRO AO PROCESSAR REQUISIÇÃO")
        console.error("Algo deu errado ao tentar processar a requisição")

    }
}