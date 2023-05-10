const isDebugMode = false;

const url = isDebugMode ? "http://localhost:5000/" : "https://fenix-nu.vercel.app/";

// função para verificar se o usuário está logado
const isLoggedIn = () => {
    if (isDebugMode || localStorage.getItem("token")) {
        return true;
    }
    return false;
}

// função para converter data br para data us
const convertDateUS = (date) => {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
}

// função para converter data us para data br
const convertDateBR = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}