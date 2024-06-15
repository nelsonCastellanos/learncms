import {css, html, LitElement} from "lit";
import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/filled-button.js';
import {gridStyles} from "../styles/global";

class BottomBar extends LitElement{
    static styles = [...gridStyles,  css`
        .bottom-bar{
            position: fixed;
            bottom: 0;
            width: 89%;
            z-index: 210;
        }
    `]

    render() {
        return html`
            <div class="row bottom-bar p-3">
                <div class="col-2">
                    <md-icon-button>
                        <md-icon>local_library</md-icon>
                    </md-icon-button>    
                </div>
                <div class="col-2">
                    <md-icon-button>
                        <md-icon>exercise</md-icon>
                    </md-icon-button>
                </div>
                <div class="col-4  text-center">
                    <md-icon-button>
                        <md-icon>handshake</md-icon>
                    </md-icon-button>
                </div>
                <div class="col-2">
                    <md-icon-button>
                        <md-icon>storefront</md-icon>
                    </md-icon-button>
                </div>
                <div class="col-2"> 
                    <md-icon-button>
                        <md-icon>sentiment_very_satisfied</md-icon>
                    </md-icon-button>
                </div>
            </div>
        `
    }
}

customElements.define('bottom-bar', BottomBar);

export {BottomBar};