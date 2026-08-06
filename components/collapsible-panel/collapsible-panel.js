(function () {
    function renderFromSource(source, plan) {
        if (source === 'guidelines' && plan.guidelines) {
            return '<ul>' + plan.guidelines.map(item => `<li>${item}</li>`).join('') + '</ul>';
        }

        if (source === 'avoidFoods' && plan.avoidFoods) {
            return '<div class="avoid-grid">' + plan.avoidFoods.map(card => `
                <div class="avoid-card">
                    <div class="avoid-card-title">${card.title}</div>
                    <p>${card.text}</p>
                </div>
            `).join('') + '</div>';
        }

        if (source === 'supplements' && plan.supplements) {
            return '<div class="supp-grid">' + plan.supplements.map(card => `
                <div class="supp-card">
                    <div class="supp-name">${card.name}</div>
                    <div class="supp-dose">${card.dose}</div>
                    <div class="supp-note">${card.note}</div>
                </div>
            `).join('') + '</div>';
        }

        if (source === 'teas' && plan.teas) {
            return '<div class="tea-grid">' + plan.teas.map(card => `
                <div class="tea-card">
                    <div class="tea-name">${card.name}</div>
                    ${card.sections.map(section => `
                        <div class="tea-label">${section.label}</div>
                        <div class="tea-body">${section.body}</div>
                    `).join('')}
                    ${card.warning ? `<div class="tea-obs">${card.warning}</div>` : ''}
                </div>
            `).join('') + '</div>';
        }

        return null;
    }

    class CollapsiblePanel extends HTMLElement {
        connectedCallback() {
            if (this.dataset.ready) return;
            this.dataset.ready = 'true';

            const title = this.getAttribute('title') || '';
            const headingTag = this.getAttribute('variant') === 'subs' ? 'h2' : 'h3';
            const collapsed = this.hasAttribute('collapsed');
            const source = this.getAttribute('source');
            let bodyContent = this.innerHTML.trim();

            if (source && window.MEAL_PLAN) {
                const rendered = renderFromSource(source, window.MEAL_PLAN);
                if (rendered !== null) bodyContent = rendered;
            }

            this.classList.add('collapsible-section');
            if (collapsed) this.classList.add('collapsed');

            this.innerHTML = `
                <div class="coll-hd">
                    <${headingTag}>${title}</${headingTag}>
                    <span class="coll-icon">▼</span>
                </div>
                <div class="coll-body">${bodyContent}</div>
            `;

            this.querySelector('.coll-hd').addEventListener('click', () => {
                this.classList.toggle('collapsed');
            });
        }
    }

    customElements.define('collapsible-panel', CollapsiblePanel);
})();