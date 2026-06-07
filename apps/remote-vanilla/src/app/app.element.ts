import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'remote-vanilla';
    this.innerHTML = `
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome ${title} 👋
          </h1>
        </div>
      </div>
    </div>
      `;
  }
}
customElements.define('vanilla-root', AppElement);
