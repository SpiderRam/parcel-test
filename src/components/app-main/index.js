import { LitElement, html } from 'lit-element';

import css from './style.pcss';
import template from './template';

export default class AppMain extends LitElement {
    static get properties() {
        return {
            name: String,
            route: String,
            appVersion: String,
            ENV: String,
            updateReady: Boolean 
        }
    }

    constructor() {
        super();

    }

    render() {
        return html `<style>${css}</style> ${template(this)}`;
    }


}

window.customElements.define('app-main', AppMain);