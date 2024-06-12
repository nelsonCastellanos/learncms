import {css, html, LitElement} from "lit";
import {gridStyles} from "../styles/global";

class Read extends LitElement{
    static styles = [gridStyles,  css``]

    render() {
        return html`
            <p>Read Page</p>
        `
    }
}

customElements.define('read', Read);

export {Read};