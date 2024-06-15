import {css, html, LitElement} from "lit";
import {gridStyles} from "../styles/global";
import '../components/SiteBar.js';
import '../components/BottomBar.js';
import '../components/SectionCard.js';
import '../components/ReturnBack.js';

class SectionPage extends LitElement{
    static styles = [...gridStyles,  css`
        .sidebar {
            left: 0;
            position: fixed !important;
            z-index: 1;
        }
    `]

    render() {
        return html`
            <div class="row">
                <div class="col-md-2 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <site-bar class="sidebar"></site-bar>    
                </div>
                <div class="col-12 col-md-8 flex justify-center">
                    <div class="w-100 w-md-90 w-lg-80">
                        <return-back></return-back>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                        <section-card class="p-3"></section-card>
                    </div>
                </div>
                <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block col-12 col-md-2 flex justify-center">
                    Holas, aca van tus objetivos
                </div>
            </div>
            <div class="d-block d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
                <bottom-bar></bottom-bar>
            </div>
        `
    }
}

customElements.define('section-page', SectionPage);

export {SectionPage};