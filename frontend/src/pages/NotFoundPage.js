import { LitElement, html } from 'lit';

class NotFoundPage extends LitElement {
  render() {
    return html`<h1>404 - Not Found</h1>`;
  }
}

customElements.define('not-found-page', NotFoundPage);
