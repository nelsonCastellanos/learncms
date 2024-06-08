import { LitElement, html, css } from 'lit';
import '@material/web/button/filled-button.js';

class LoginPage extends LitElement {
    static styles = css`
    /* Estilos aquí */
  `;

    handleLogin() {
        const redirectURL = window.location.origin + '/protected';
        window.location.href = `api/auth/google/login?redirect=${encodeURIComponent(redirectURL)}`;
    }

    render() {
        return html`
      <md-filled-button @click="${this.handleLogin}">Login with Google</md-filled-button>
    `;
    }
}

customElements.define('login-page', LoginPage);
