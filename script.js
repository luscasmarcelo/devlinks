const btn = document.getElementById('btn-tema');
const html = document.documentElement;

if  (localStorage.getItem('tema') === 'claro') {
    html.classList.add('tema-claro');
        btn.textContent = '☀️';
    }
    btn.addEventListener('click', () => {
        html.classList.toggle('tema-claro');
        const temaAtual = html.classList.contains('tema-claro');
        btn.textContent = temaAtual ? '☀️' : '🌙';
        localStorage.setItem('tema', temaAtual ? 'claro' : 'escuro');
    });


const linksIniciais = [
{
    id: "1",
    titulo: "GitHub",
    url: "https://github.com/luscasmarcelo",
    icone: "fab fa-github",
},
{
    id: "2",
    titulo: "LinkedIn",
    url: "https://linkedin.com/in/luscasmarcelo",
    icone: "fab fa-linkedin",
},
{
    id: "3",
    titulo: "DevLinks",
    url: "#",
    icone: "fas-fa-code",
},
];

const titulos = linksIniciais.map(link => link.titulo);
console.log("títulos extraidos: ", titulos);

const comUrl = linksIniciais.filter(link => link.url !== "#");
console.log("links com URL: ", comUrl);

const github = linksIniciais.find(link => link.titulo === "GitHub");
console.log("Link do github: ", github);

linksIniciais.forEach(link => console.log(link.titulo));

linksIniciais.push({
    id: "4",
    titulo: "Meu portifólio",
    url: "#",
    icone: "fas fa-laptop-code",
});
console.log("Array atualizado (agora tem quatro itens.): ", linksIniciais);

const gerarId = () => Date.now().toString();
const urlValida = (url) => {
    try {
        new URL(url);
        return true;
        } catch {
        return false;
    }
}
console.log(gerarId());
console.log(urlValida("https://google.com"));