import { LitElement, html, css } from 'lit';

class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--my-element-text-color, black);
    }
  `;

  static properties = {
    message: { type: String }
  };

  constructor() {
    super();
    this.message = 'Loading...';
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchMessage();
  }

  async fetchMessage() {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      this.message = data.message;
    } catch (error) {
      this.message = 'Error fetching message';
    }
  }

  render() {
    return html`<h1>${this.message}</h1>`;
  }
}

customElements.define('home-page', HomePage);
