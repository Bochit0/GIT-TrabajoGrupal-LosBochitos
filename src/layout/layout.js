import '/components/header/header.js';
import '/components/navbar/navbar.js';
import '/components/footer/footer.js';

class Layout extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <link rel="stylesheet" href="/layout/layout.css"/>
            <our-header 
                title_header="Game Reviews"
                subtitle_header="Un forastero!">
                <our-navbar></our-navbar>
            </our-header>
            <main class="layout__main">
                <slot></slot>
            </main>
            <our-footer></our-footer>
        `;
    }

}

customElements.define('our-layout', Layout);