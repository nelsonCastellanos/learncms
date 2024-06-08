import { LitElement, html, css } from 'lit';


class ProtectedPage extends LitElement {
    static styles = css`
        /* Estilos aquí */
      `;

    async fetchProtectedData() {
        const response = await fetch('/api/protected');

        if (response.ok) {
            const data = await response.json();
            console.log('Protected data:', data);
        } else {
            console.error('Failed to fetch protected data');
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchProtectedData();
    }

    render() {
        return html`
      <div>Protected Page</div>
    `;
    }
}

customElements.define('protected-page', ProtectedPage);
