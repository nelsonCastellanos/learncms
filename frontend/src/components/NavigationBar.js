import { LitElement, html, css } from 'lit';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/list/list-item.js';
import '@material/web/list/list.js';
import { gridStyles } from "../styles/global";

class NavigationBar extends LitElement {
    static styles = [gridStyles, css``];

    render() {
        return html`
        <div class="row container">
          <md-standard-icon-button class="col-3">
            <md-icon>menu</md-icon>
          </md-standard-icon-button>
          <div class="col-6">
            <img src="path/to/your/logo.png" alt="App Icon" class="app-icon" />
          </div>
          <div class="col-3">
            <md-list>
              <md-list-item class="nav-item">Precios</md-list-item>
              <md-list-item class="nav-item">Iniciar Sesión</md-list-item>
            </md-list>
          </div>
        </div>
    `;
    }
}

customElements.define('navigation-bar', NavigationBar);

export { NavigationBar };
