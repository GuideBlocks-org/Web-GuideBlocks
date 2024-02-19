import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { NpsSurveyElement } from '@contextual/web-guideblocks-nps';
import '@contextual/web-guideblocks-nps';
import { CSS_STR } from './app.element.css';

@customElement('app-root')
export class AppElement extends LitElement {
  static styles = [CSS_STR];

  @state() feedbackMockData = FEEDBACK;

  protected render() {
    return html`
      <div class="wrapper">
        <div class="container">
          <!--  WELCOME  -->
          <div id="welcome">
            <h1>Guideblocks Preview</h1>
          </div>

          <div class="list">
            <div class="list-item">
              <h2>NPS</h2>
              <pz-nps .source="${this.feedbackMockData}"></pz-nps>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pz-nps': NpsSurveyElement;
  }
}
