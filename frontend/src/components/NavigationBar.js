import {css, html, LitElement} from 'lit';
import '@material/web/button/filled-button.js';
import {gridStyles} from "../styles/global";


class NavigationBar extends LitElement {
    static styles = [...gridStyles,  css`
        .header{
            height: 7vh;
            color: #f0dedf;
        }
        
        .app-icon{
            height: 50px;
        }
    `];

    handleLogin() {
        const redirectURL = window.location.origin + '/protected';
        window.location.href = `api/auth/google/login?redirect=${encodeURIComponent(redirectURL)}`;
    }

    render() {
        return html`
            <navigation class="container">
                <div>
                    <nav class="flex justify-between p-5 align-center header">
                        <div class="flex align-center">
                            <a href="http://localhost:3000">
                                <img src="assets/img.png" alt="App Icon" class="app-icon"/>
                            </a>
                            <h1>StoryLing</h1>
                        </div>
                        <div>
                            <md-filled-button @click="${this.handleLogin}">Iniciar sesion</md-filled-button>
                        </div>
                    </nav>
                </div>
            </navigation>
        `;
    }
}

customElements.define('navigation-bar', NavigationBar);

export {NavigationBar};
