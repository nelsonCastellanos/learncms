import {css, html, LitElement} from "lit";
import {gridStyles} from "../styles/global";
import '../components/SiteBar.js';
import '../components/BottomBar.js';
import '../components/SectionCard.js';

class ReadPage extends LitElement{
    static styles = [...gridStyles,  css``]

    render() {
        return html`
            <div class="row">
                <div class="col-md-2 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <site-bar></site-bar>    
                </div>
                <div class="col-10">
                    <p>Read Page</p>
                    <section-card></section-card>
                </div>
            </div>
            <div class="d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
                <bottom-bar></bottom-bar>
            </div>
        `
    }
}

customElements.define('read-page', ReadPage);

export {ReadPage};