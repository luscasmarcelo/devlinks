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