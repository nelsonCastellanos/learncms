import {css, html, LitElement, unsafeCSS} from 'lit';
import '../components/NavigationBar.js';
import {gridStyles} from "../styles/global";

class HomePage extends LitElement {
    static styles = [...gridStyles,  css`
        .img-banner{
            width: 100%;
        }
        
        .banner{
            height: 80vh;
        }
    `];

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="container">
                <navigation-bar></navigation-bar>
                <div class="row banner w-80">
                    <div class="col-12 col-md-6 flex align-center">
                        <img src="/assets/banner.png" class="img-banner"/>
                    </div>
    
                    <div class="col-12 col-md-6 flex align-center text-center">
                        <h1>
                            Explora y aprende con cada página en StoryLing. Deja que la tecnología despierte tu curiosidad y disfruta de grandes historias
                        </h1>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('home-page', HomePage);
