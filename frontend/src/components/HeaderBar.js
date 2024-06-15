import {css, html, LitElement} from 'lit';
import '@material/web/button/filled-button.js';
import {gridStyles} from "../styles/global";


class HeaderBar extends LitElement {
    static styles = [...gridStyles,  css``];

    render() {
        return html`
            <navigation class="container">
                Header, ;)
            </navigation>
        `;
    }
}

customElements.define('header-bar', HeaderBar);

export {HeaderBar};
