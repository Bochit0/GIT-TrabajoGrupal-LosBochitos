class Button extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        const label = this.getAttribute('label');
        const href = this.getAttribute('href');
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="components/button/button.css">
            <button class="btn">
                ${label}
            </button>
        `
        this.shadowRoot.querySelector('.btn').addEventListener('click', () => {
            if (href) {
                window.location.href = href;
            }
        });
    }
}

customElements.define('our-button', Button);