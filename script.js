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
