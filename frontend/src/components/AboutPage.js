import { LitElement, html } from 'lit';

class AboutPage extends LitElement {
  render() {
    return html`<h1>About Page</h1>`;
  }
}

customElements.define('about-page', AboutPage);
