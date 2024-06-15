import {css, html, LitElement} from 'lit';
import '@material/web/button/filled-button.js';
import {gridStyles} from "../styles/global";


class ReturnBack extends LitElement {
    static styles = [...gridStyles,  css`
        .return_back_1{
            display: flex;
            position: relative;
        }
    
        .return_back {
            top: 0;
            position: fixed !important;
            z-index: 1;
        }
        
        .container {
            display: flex;
            align-items: center;
        }
        .image {
            margin-right: 8px;
        }
        
        navigation{
            height: 8vh;
        }
        
        .link_return_back{
            color: rgb(var(--md-sys-color-surface-container-highest))
        }
    `];

    render() {
        return html`
            <navigation class="return_back_1">
                <div class="return_back background w-100">
                    <a href="/learn" class="flex align-center link_return_back">
                        <md-icon slot="start">arrow_back</md-icon>
                        <h3 class="p-4">Regresar</h3>
                    </a>
                </div>
            </navigation>
        `;
    }
}

customElements.define('return-back', ReturnBack);

export {ReturnBack};
