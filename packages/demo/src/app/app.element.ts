import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import * as nps from '@contextual/web-guideblocks-nps';
import { FEEDBACK } from './mock';
import CSS from './app.element.css';

console.log(nps);
@customElement('ctx-app-root')
export class AppElement extends LitElement {
  static styles = [unsafeCSS(CSS)];

  @state() feedbackMockData = FEEDBACK;

  protected render() {
    return html`
      <div class="wrapper flex">
        <div class="container mx-auto px-4 py-4">
          <!--  WELCOME  -->
          <div id="welcome">
            <h1>Guideblocks Preview</h1>
          </div>

          <div class="list">
            <div class="list-item">
              <h2>NPS</h2>
              <ctx-nps .source="${this.feedbackMockData}"></ctx-nps>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ctx-app-root': AppElement;
  }
}
