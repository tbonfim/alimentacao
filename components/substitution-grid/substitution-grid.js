(function () {
    function renderSubstitutionCard(card) {
        const rows = card.rows.map(row => {
            if (row.type === 'intro') {
                return `<tr><td colspan="2" class="sub-intro">${row.text}</td></tr>`;
            }
            if (row.type === 'section') {
                return `<tr><td class="sect" colspan="2">${row.text}</td></tr>`;
            }
            return `<tr><td>${row.name}</td><td>${row.qty}</td></tr>`;
        }).join('');

        return `
            <div class="sub-card">
                <div class="sub-head ${card.group}">${card.title}</div>
                <table>${rows}</table>
            </div>
        `;
    }

    class SubstitutionGrid extends HTMLElement {
        connectedCallback() {
            const cards = (window.MEAL_PLAN && window.MEAL_PLAN.substitutions) || [];
            this.innerHTML = `<div class="sub-grid">${cards.map(renderSubstitutionCard).join('')}</div>`;
        }
    }

    customElements.define('substitution-grid', SubstitutionGrid);
})();
