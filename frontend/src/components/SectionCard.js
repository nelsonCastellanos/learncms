import { css, html, LitElement } from 'lit';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/elevation/elevation.js';
import '@material/web/icon/icon.js';
import {gridStyles} from "../styles/global";

class SectionCard extends LitElement {
    static styles = [...gridStyles,  css`
        .card {
            --shine-background-color: linear-gradient(136deg,transparent 10%,var(--md-sys-color-on-secondary) 10%,var(--md-sys-color-on-secondary) 40%,transparent 40%,transparent 53%,var(--md-sys-color-on-secondary) 53%,var(--md-sys-color-on-secondary) 71%,transparent 71%), var(--md-sys-color-surface);
            background: var(--shine-background-color);
            border: 2px solid var(--md-sys-color-secondary-container);
            border-radius: 16px;
        }
        
        :root{
            --md-sys-color-background: transparent
        }
    `];

    render() {
        return html`
          <div class="card p-4">
              <div class="row">
                <div class="col-7">
                    <h3>Ver detalle</h3>
                    <h1>Section 1</h1>
                    <div class="tertiary-text flex justify-start align-center">
                        <md-icon slot="start" class="p-3">local_library</md-icon>
                        <h4>Completo!</h4>
                    </div>
                </div>
                <div class="col-5 flex justify-end align-center">
                  <md-outlined-button @click="${this.handleClick}">REPASAR</md-outlined-button>
                </div>
              </div>
          </div>
    `;
    }

    handleClick() {
        console.log('Button clicked');
    }
}

customElements.define('section-card', SectionCard);

export { SectionCard };
