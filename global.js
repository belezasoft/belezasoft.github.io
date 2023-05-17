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




class Rodape extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        // Get template content from DOM
        const rodapeDiv = document.createElement("p");
        rodapeDiv.innerHTML = `    
            <div class="divFooter">
            <h4 style="color: blanchedalmond; font-weight: bold; text-align: right; padding-right: 2%;">Desenvolvido por João Kleber, Juan Pablo e Rafael Tadeu
            <br/>© 2023 - belezasoft@gmail.com</h4>
        </div>`

        // Create new Shadow Root
        shadow.appendChild(rodapeDiv);

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'style2.css');

        shadow.appendChild(linkElem);
    }
}
customElements.define("meu-rodape", Rodape);