let catFilter = 'all';
let protFilter = 'all';
let searchTerm = '';

function toggle(card) {
    card.classList.toggle('open');
}

function applyFilters() {
    const cards = document.querySelectorAll('.rcard');
    let n = 0;
    cards.forEach(card => {
        const cat = card.dataset.cat;
        const prot = card.dataset.prot;
        const title = card.querySelector('.rtitle').textContent.toLowerCase();
        const catOk = catFilter === 'all' || cat === catFilter || cat === 'ambos';
        const protOk = protFilter === 'all' || prot === protFilter;
        const srchOk = !searchTerm || title.includes(searchTerm);
        const show = catOk && protOk && srchOk;
        card.style.display = show ? '' : 'none';
        if (show) n++;
    });
    document.getElementById('count').textContent = n + (n === 1 ? ' receita' : ' receitas');
}

function setCat(val, el) {
    catFilter = val;
    document.querySelectorAll('.filter-group:first-child .fb').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    applyFilters();
}

function setProt(val, el) {
    protFilter = val;
    document.querySelectorAll('.filter-group:last-child .fb').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    applyFilters();
}

function setSearch(val) {
    searchTerm = val.trim().toLowerCase();
    applyFilters();
}

// Auto-filtrar por hash (#almoco ou #jantar)
const hash = window.location.hash;
if (hash === '#almoco') setCat('almoco', document.querySelector('.cat-almoco'));
else if (hash === '#jantar') setCat('jantar', document.querySelector('.cat-jantar'));
