import {css, html, LitElement} from "lit";
import {gridStyles} from "../styles/global";

class CatalogPage extends LitElement{
    static styles = [...gridStyles,  css``]

    render() {
        return html`
            <p>Catalog Page</p>
        `
    }
}

customElements.define('catalog-page', CatalogPage);

export {CatalogPage};