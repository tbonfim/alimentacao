(function () {
    class CollapsiblePanel extends HTMLElement {
        connectedCallback() {
            if (this.dataset.ready) return;
            this.dataset.ready = 'true';

            const title = this.getAttribute('title') || '';
            const headingTag = this.getAttribute('variant') === 'subs' ? 'h2' : 'h3';
            const collapsed = this.hasAttribute('collapsed');
            let bodyContent = this.innerHTML.trim();

            if (this.getAttribute('source') === 'guidelines' && window.MEAL_PLAN) {
                bodyContent = '<ul>' + window.MEAL_PLAN.guidelines
                    .map(item => `<li>${item}</li>`)
                    .join('') + '</ul>';
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
