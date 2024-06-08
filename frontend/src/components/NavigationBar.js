import { LitElement, html, css } from 'lit';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/list/list-item.js';
import '@material/web/list/list.js';

class NavigationBar extends LitElement {
    static styles = css`
    :host {
      display: block;
      --mdc-theme-primary: #6200ea;
      --mdc-theme-on-primary: white;
    }

    .app-icon {
      width: 24px;
      height: 24px;
    }

    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
    }

    .nav-item {
      margin: 0 8px;
    }
  `;

    render() {
        return html`
      <div class="row">
        <div slot="navigationIcon" class="nav-content">
          <md-standard-icon-button class="app-icon">
            <md-icon>menu</md-icon>
          </md-standard-icon-button>
          <div class="app-icon">
            <img src="path/to/your/logo.png" alt="App Icon" class="app-icon" />
          </div>
          <div>
            <md-list>
              <md-list-item class="nav-item">Precios</md-list-item>
              <md-list-item class="nav-item">Iniciar Sesión</md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    `;
    }
}

customElements.define('navigation-bar', NavigationBar);

export { NavigationBar };
