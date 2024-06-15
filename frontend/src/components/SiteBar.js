import {css, html, LitElement} from "lit";
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
import '@material/web/divider/divider.js';
import {gridStyles} from "../styles/global";

class SiteBar extends LitElement{
    static styles = [...gridStyles,  css``]

    render() {
        return html`
            <div class="text-center">
                <h2 class="md-typescale-display-small-prominent">StoryLing</h2>
            </div>
            <div>
                <md-list style="max-width: 300px">
                    <md-list-item>
                        APRENDER
                        <md-icon slot="start">local_library</md-icon>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                        PRACTICAR
                        <md-icon slot="start">exercise</md-icon>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                        DESAFIOS
                        <md-icon slot="start">handshake</md-icon>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                        TIENDA
                        <md-icon slot="start">storefront</md-icon>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                        PERFIL
                        <md-icon slot="start">sentiment_very_satisfied</md-icon>
                    </md-list-item>
                </md-list>
            </div>
        `
    }
}

customElements.define('site-bar', SiteBar);

export {SiteBar};