import {css, html, LitElement, unsafeCSS} from 'lit';
import '../components/NavigationBar.js';

class HomePage extends LitElement {
    static styles = css``;

    static properties = {
        message: {type: String}
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
        return html`
            <navigation-bar></navigation-bar>
        `;
    }
}

customElements.define('home-page', HomePage);
