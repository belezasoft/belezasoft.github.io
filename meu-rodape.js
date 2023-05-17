// class Rodape extends HTMLElement {
//     constructor() {
//         super();
//         const shadow = this.attachShadow({ mode: "open" });
//         // Get template content from DOM
//         const rodapeDiv = document.createElement("div");
//         rodapeDiv.innerHTML = `    
//             <div class="divFooter waves-light pink">
//             <h6 style="color: blanchedalmond; font-weight: bold; text-align: right; padding-right: 2%;">Desenvolvido por João Kleber, Juan Pablo e Rafael Tadeu
//             <br/>© 2023 - belezasoft@gmail.com</h6>
//         </div>`

//         // Create new Shadow Root
//         shadow.appendChild(rodapeDiv);
//     }
// }
// customElements.define("meu-rodape", Rodape);