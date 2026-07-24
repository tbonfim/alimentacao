(function () {
    const DAY_ORDER = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    function renderTimeline(timeline) {
        if (!timeline || !timeline.steps.length) return '';

        const steps = timeline.steps.map((step, index) => {
            const variant = step.variant ? ' ' + step.variant : '';
            const sep = index < timeline.steps.length - 1 ? '<div class="tl-sep">→</div>' : '';
            return `
                <div class="tl-item${variant}">
                    <div class="tl-hora">${step.time}</div>
                    <div class="tl-label">${step.label}</div>
                </div>${sep}
            `;
        }).join('');

        const warning = timeline.warning
            ? `<div class="timeline-warn">${timeline.warning}</div>`
            : '';

        return `
            <div class="timeline">
                <div class="timeline-title">${timeline.title}</div>
                <div class="timeline-row">${steps}</div>
                ${warning}
            </div>
        `;
    }

    function renderDayPlan(day) {
        const header = day.header ? `
            <div class="day-header ${day.header.theme}">
                <div class="dh-icon">${day.header.icon}</div>
                <div>
                    <div class="dh-title">${day.header.title}</div>
                    <div class="dh-sub">${day.header.subtitle}</div>
                </div>
            </div>
        ` : '';

        const meals = day.meals.map(meal => window.renderMealSection(meal)).join('');

        return `
            <div id="${day.id}" class="day-plan">
                ${header}
                ${renderTimeline(day.timeline)}
                ${meals}
            </div>
        `;
    }

    class MealPlanner extends HTMLElement {
        connectedCallback() {
            if (!window.MEAL_PLAN) return;
            this.render();
            this.bindTabs();
            this.showToday();
        }

        render() {
            const plan = window.MEAL_PLAN;
            const infoHtml = plan.infoStats.map(stat => `
                <div class="info-card">
                    <div class="lbl">${stat.lbl}</div>
                    <div class="val">${stat.val}</div>
                    <div class="val-sub">${stat.valSub}</div>
                </div>
            `).join('');

            const tabsHtml = plan.tabs.map(tab => `
                <div class="semana-dia" id="btn-${tab.id}" data-day="${tab.id}">
                    <div class="sd-icon">${tab.icon}</div>
                    <div class="sd-nome">${tab.label}</div>
                    <div class="sd-tipo">${tab.type}</div>
                </div>
            `).join('');

            const daysHtml = DAY_ORDER
                .filter(id => plan.days[id])
                .map(id => renderDayPlan(plan.days[id]))
                .join('');

            this.innerHTML = `
                <div class="info-bar">${infoHtml}</div>
                <div class="semana">
                    <div class="semana-title">Selecione o dia</div>
                    <div class="semana-grid">${tabsHtml}</div>
                </div>
                ${daysHtml}
            `;
        }

        bindTabs() {
            this.querySelectorAll('.semana-dia').forEach(tab => {
                tab.addEventListener('click', () => this.showDay(tab.dataset.day));
            });
        }

        showDay(id) {
            this.querySelectorAll('.day-plan').forEach(plan => plan.classList.remove('active'));
            this.querySelectorAll('.semana-dia').forEach(tab => tab.classList.remove('active'));
            const plan = this.querySelector('#' + id);
            const tab = this.querySelector('#btn-' + id);
            if (plan) plan.classList.add('active');
            if (tab) tab.classList.add('active');
        }

        showToday() {
            const todayId = DAY_ORDER[new Date().getDay()];
            const tab = this.querySelector('#btn-' + todayId);
            if (tab) tab.classList.add('today');
            this.showDay(todayId);
        }
    }

    customElements.define('meal-planner', MealPlanner);
})();
