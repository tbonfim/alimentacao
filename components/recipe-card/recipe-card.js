(function () {
    const PROTEIN_LABELS = {
        frango: '🍗 Frango',
        peixe: '🐟 Peixe',
        carne: '🥩 Carne',
        ovos: '🥚 Ovos',
        especial: '✨ Especial'
    };

    const CAT_LABELS = {
        ambos: 'Almoço & Jantar',
        almoco: 'Almoço',
        jantar: 'Jantar'
    };

    function renderRecipeCard(recipe) {
        const noteHtml = recipe.note ? `<div class="rnote">${recipe.note}</div>` : '';
        const ingredients = recipe.ingredients.map(item => `<li>${item}</li>`).join('');
        const steps = recipe.steps.map(step => `<li>${step}</li>`).join('');

        return `
            <article class="rcard" data-cat="${recipe.cat}" data-prot="${recipe.prot}">
                <div class="rhead">
                    <div class="rh-main">
                        <span class="rtitle">${recipe.title}</span>
                        <span class="rchev">▼</span>
                    </div>
                    <div class="rbadges">
                        <span class="badge b-${recipe.prot}">${PROTEIN_LABELS[recipe.prot] || recipe.prot}</span>
                        <span class="badge b-${recipe.cat}">${CAT_LABELS[recipe.cat] || recipe.cat}</span>
                        <span class="rtime">⏱ ${recipe.timeMin} min</span>
                    </div>
                </div>
                <div class="rbody">
                    <div class="rcols">
                        <div class="ring">
                            <h4>Ingredientes (1 porção)</h4>
                            <ul>${ingredients}</ul>
                        </div>
                        <div class="rprep">
                            <h4>Modo de preparo</h4>
                            <ol>${steps}</ol>
                        </div>
                    </div>
                    <div class="rserve">${recipe.serving}</div>
                    ${noteHtml}
                </div>
            </article>
        `;
    }

    class RecipeCard extends HTMLElement {
        set recipe(data) {
            this._recipe = data;
            this.render();
            this.bindToggle();
        }

        render() {
            if (!this._recipe) return;
            this.innerHTML = renderRecipeCard(this._recipe);
        }

        bindToggle() {
            const head = this.querySelector('.rhead');
            if (!head) return;
            head.addEventListener('click', () => {
                this.querySelector('.rcard').classList.toggle('open');
            });
        }
    }

    window.renderRecipeCard = renderRecipeCard;
    customElements.define('recipe-card', RecipeCard);
})();
