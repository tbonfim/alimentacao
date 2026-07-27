(function () {
    function renderMealSection(meal) {
        const themeClass = meal.theme && meal.theme !== 'default' ? ' ' + meal.theme : '';
        const badgeHtml = meal.badge ? `<span class="badge">${meal.badge}</span>` : '';
        const timingHtml = meal.timing ? `<span class="timing">${meal.timing}</span>` : '';
        const recipesHtml = meal.recipesLink
            ? `<a class="recipes-link" href="receitas-jul2026.html">Receitas</a>`
            : '';
        const rightHtml = (recipesHtml || timingHtml)
            ? `<span class="sec-right">${recipesHtml}${timingHtml}</span>`
            : '';

        const rows = meal.items.map(item => {
            const qtyClass = item.qtyHighlight ? ' class="qty destaque"' : ' class="qty"';
            return `<tr><td>${item.name}</td><td${qtyClass}>${item.qty}</td></tr>`;
        }).join('');

        const thead = '<thead><tr><th>Alimento</th><th class="r">Quantidade</th></tr></thead>';

        const noteHtml = meal.note
            ? `<div class="note${meal.note.variant !== 'default' ? ' ' + meal.note.variant : ''}">${meal.note.text}</div>`
            : '';

        return `
            <div class="sec-title${themeClass}">${meal.title}${badgeHtml}${rightHtml}</div>
            <div class="meal"><table>${thead}<tbody>${rows}</tbody></table>${noteHtml}</div>
        `;
    }

    class MealSection extends HTMLElement {
        set meal(data) {
            this._meal = data;
            this.render();
        }

        render() {
            if (!this._meal) return;
            this.innerHTML = renderMealSection(this._meal);
        }
    }

    window.renderMealSection = renderMealSection;
    customElements.define('meal-section', MealSection);
})();
