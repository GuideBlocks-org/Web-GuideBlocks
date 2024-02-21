import { html, PropertyValues, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { FeedbackElementWeb } from './model';
import { buildEvent, CommonElement } from '@contextual/web-guideblocks-core';
import CSS from './nps.element.css';

enum Stage {
  List = 1,
  Input,
}

enum Platform {
  Web = 'web',
}

const DF_CUSTOM_INPUT_TITLE =
  'Thanks for your response. \n' +
  'Could you please explain why you chose that response?';

const CLASS_NAME = {
  item: {
    detractors: 'detractors',
    neutrals: 'neutrals',
    promoters: 'promoters',
  },
};

export enum Events {
  After_Show = 'ctxAfterShow',
  Select = 'ctxSelect',
  Submit = 'ctxSubmit',
}

@customElement('ctx-nps')
export class NpsSurveyElement extends CommonElement {
  static override styles = [unsafeCSS(CSS)];

  @property() source?: {
    css: any;
    title: string;
    message: string;
    c: Array<string>;
    i: number;
    layout: string;
    label: number;
    label1: string;
    label2: string;
    text: string;
    extra_json: {};
  };
  @property() disableInteraction?: boolean = false;
  @state() private _stage: Stage = Stage.List;

  @query('.options-list-wrapper') optionWrapperEl?: HTMLElement;
  @query('#submit-btn') submitBtnEl?: HTMLElement;
  @query('#cancel-btn') cancelBtnEl?: HTMLElement;
  @query('#input') textAreaEle?: HTMLTextAreaElement;

  private _selected?: string;

  protected override createRenderRoot(): Element | ShadowRoot {
    const root = super.createRenderRoot();

    root.addEventListener('click', (event) => {
      const target: HTMLElement = event.target as HTMLElement;

      if (target.classList.contains('option-item')) {
        return this._onClickOption(target);
      }

      if (target.id === this.submitBtnEl?.id) {
        return this._onSubmit();
      }

      if (target.id === this.cancelBtnEl?.id) {
        return this._onSubmit(false);
      }
    });

    return root;
  }

  private _onClickOption(target: HTMLElement) {
    this._selected = target.dataset['option'];
    !this.disableInteraction && this.changeStage(Stage.Input);

    this.dispatchEvent(
      buildEvent(Events.Select, {
        detail: { title: this._selected },
      })
    );

    if (!this.source?.i) {
      this._onSubmit(false);
    }
  }

  private _onSubmit(includeText = true) {
    const detail: any = {
      title: this._selected,
    };

    if (includeText) {
      detail.contents = this.textAreaEle?.value;
    }

    this.dispatchEvent(
      buildEvent(Events.Submit, {
        detail,
      })
    );
  }

  protected override willUpdate(_changedProperties: PropertyValues) {
    super.willUpdate(_changedProperties);

    // TODO: Remove it later after SDK use step.model
    if (
      _changedProperties.has('source') &&
      this.source &&
      !(this.source instanceof FeedbackElementWeb)
    ) {
      this.source = new FeedbackElementWeb(this.source as any) as any;
    }
  }

  override render() {
    return this._stage === Stage.List
      ? this._getListStageTpl()
      : this._getInputStageTpl();
  }

  private _getListStageTpl() {
    return html` ${this._getWebTpl()} `;
  }

  private _getWebTpl() {
    return html`
      ${this._getOptionsList()}
      ${this._stage === Stage.Input ? this._getInputStageTpl() : ''}
    `;
  }

  private _getOptionsList() {
    const isHorizontal = this.source?.layout == 'horizontal';
    const isVertical = this.source?.layout == 'vertical';
    const classes = {
      horizontal: isHorizontal,
      vertical: isVertical,
      'has-label': !!this.source?.label,
    };
    const labelStyle = isHorizontal
      ? {
          label1: { 'margin-left': this.source?.css['margin-left'] },
          label2: { 'margin-right': this.source?.css['margin-right'] },
        }
      : { label1: {}, label2: {} };

    return html` <div class="options-list-wrapper ${classMap(classes)}">
      <div>
        <!--Vertical label 1-->
        ${isVertical && this.source?.label
          ? this._getVerticalLabel(1, labelStyle)
          : ''}

        <!--Options-->
        <div class="options-list-container">
          ${this.source?.c?.map(
            (item: string, index) => html`
              <div
                class="option-item ${classMap({
                  [CLASS_NAME.item.detractors]: index < 7,
                  [CLASS_NAME.item.neutrals]: index >= 7 && index < 9,
                  [CLASS_NAME.item.promoters]: index >= 9,
                })}"
                style="${styleMap(this.source?.css)}"
                data-option="${index}"
              >
                ${item}
              </div>
            `
          )}
        </div>

        <!--Vertical label 2-->
        ${isVertical && this.source?.label
          ? this._getVerticalLabel(2, labelStyle)
          : ''}

        <!--Horizontal labels-->
        ${isHorizontal && this.source?.label
          ? this._getHorizontalLabel(labelStyle)
          : ''}
      </div>
    </div>`;
  }

  private _getInputStageTpl() {
    return html`
      <div>
        <p>${this.source?.text}</p>

        <div id="input-container">
          <textarea
            name="content"
            id="input"
            placeholder="Content"
            rows="5"
          ></textarea>
        </div>

        <div class="button-container">
          <button id="cancel-btn" type="button" class="cancel-button">
            Dismiss
          </button>

          <button id="submit-btn" type="button" class="submit-button">
            Submit
          </button>
        </div>
      </div>
    `;
  }

  private _getHorizontalLabel(labelStyle: { label1: any; label2: any }) {
    return html`
      <div class="labels-container">
        <div class="label1" style="${styleMap(labelStyle.label1)}">
          ${this.source?.label1}
        </div>
        <div class="label2" style="${styleMap(labelStyle.label2)}">
          ${this.source?.label2}
        </div>
      </div>
    `;
  }

  private _getVerticalLabel(index: number, labelStyle: any) {
    const name = `label${index}`;
    return html` <div
      class="${classMap({ [name]: true })}"
      style="${styleMap(labelStyle[name])}"
    >
      ${(this.source as any)?.[name]}
    </div>`;
  }

  protected override firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);

    this.show();
  }

  private changeStage(stage: Stage) {
    this._stage = stage;
  }

  override show(): Promise<void> {
    return super.show().then(() => {
      this.dispatchEvent(buildEvent(Events.After_Show));
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ctx-nps': NpsSurveyElement;
  }
}
