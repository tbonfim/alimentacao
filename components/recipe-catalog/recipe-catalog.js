(function () {
    class RecipeCatalog extends HTMLElement {
        connectedCallback() {
            this.recipes = (window.RECIPES_DATA && window.RECIPES_DATA.recipes) || [];
            this.catFilter = 'all';
            this.protFilter = 'all';
            this.searchTerm = '';
            this.render();
            this.bindEvents();
            this.applyHashFilter();
            this.applyFilters();
        }

        render() {
            const cardsHtml = this.recipes.map(recipe => window.renderRecipeCard(recipe)).join('');

            this.innerHTML = `
                <div class="filters">
                    <div class="filter-group filter-cat">
                        <button class="fb active" data-cat="all">Todas</button>
                        <button class="fb cat-almoco" data-cat="almoco">Almoço</button>
                        <button class="fb cat-jantar" data-cat="jantar">Jantar</button>
                    </div>
                    <div class="filter-group filter-prot">
                        <button class="fb active" data-prot="all">Todas as proteínas</button>
                        <button class="fb" data-prot="frango">🍗 Frango</button>
                        <button class="fb" data-prot="peixe">🐟 Peixe</button>
                        <button class="fb" data-prot="carne">🥩 Carne</button>
                        <button class="fb" data-prot="ovos">🥚 Ovos</button>
                        <button class="fb" data-prot="especial">✨ Especiais</button>
                    </div>
                </div>
                <div class="search-bar">
                    <input type="text" placeholder="Buscar receita..." data-search>
                </div>
                <div class="count" data-count></div>
                <div class="recipe-list">${cardsHtml}</div>
            `;

            this.querySelectorAll('.rcard .rhead').forEach(head => {
                head.addEventListener('click', () => {
                    head.closest('.rcard').classList.toggle('open');
                });
            });
        }

        bindEvents() {
            this.querySelectorAll('.filter-cat .fb').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.catFilter = btn.dataset.cat;
                    this.querySelectorAll('.filter-cat .fb').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.applyFilters();
                });
            });

            this.querySelectorAll('.filter-prot .fb').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.protFilter = btn.dataset.prot;
                    this.querySelectorAll('.filter-prot .fb').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.applyFilters();
                });
            });

            this.querySelector('[data-search]').addEventListener('input', (event) => {
                this.searchTerm = event.target.value.trim().toLowerCase();
                this.applyFilters();
            });
        }

        applyFilters() {
            let visible = 0;
            this.querySelectorAll('.rcard').forEach(card => {
                const cat = card.dataset.cat;
                const prot = card.dataset.prot;
                const title = card.querySelector('.rtitle').textContent.toLowerCase();
                const catOk = this.catFilter === 'all' || cat === this.catFilter || cat === 'ambos';
                const protOk = this.protFilter === 'all' || prot === this.protFilter;
                const searchOk = !this.searchTerm || title.includes(this.searchTerm);
                const show = catOk && protOk && searchOk;
                card.classList.toggle('hidden', !show);
                if (show) visible++;
            });

            this.querySelector('[data-count]').textContent =
                visible + (visible === 1 ? ' receita' : ' receitas');
        }

        applyHashFilter() {
            const hash = window.location.hash;
            if (hash === '#almoco') {
                const btn = this.querySelector('.filter-cat .cat-almoco');
                if (btn) btn.click();
            } else if (hash === '#jantar') {
                const btn = this.querySelector('.filter-cat .cat-jantar');
                if (btn) btn.click();
            }
        }
    }

    customElements.define('recipe-catalog', RecipeCatalog);
})();
