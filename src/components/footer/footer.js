class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="./components/footer/footer.css">
      <footer class="footer">
        <p>Los bochitos</p>
      </footer>
    `;
  }
}

customElements.define('our-footer', Footer);