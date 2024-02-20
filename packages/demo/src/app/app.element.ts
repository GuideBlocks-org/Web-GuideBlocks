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
      <div>
        <div class="container p-4">
          <!--  WELCOME  -->
          <div id="welcome">
            <h1 class="text-center">Guideblocks Preview</h1>
          </div>

          <div class="flex">
            <div
              class="inline-flex flex-col w-1/2 h-80 justify-center items-center"
            >
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
