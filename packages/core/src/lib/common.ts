import { LitElement } from 'lit';

export class CommonElement extends LitElement {
  show(): Promise<void> {
    this.visible();
    this.requestUpdate();
    return Promise.resolve(void 0);
  }

  hide(): Promise<void> {
    this.invisible();
    return Promise.resolve(void 0);
  }

  visible() {
    this.style.setProperty('visibility', '');
    this.style.setProperty('pointerEvents', '');
  }

  invisible() {
    this.style.setProperty('visibility', 'hidden');
    this.style.setProperty('pointerEvents', 'none');
  }
}
