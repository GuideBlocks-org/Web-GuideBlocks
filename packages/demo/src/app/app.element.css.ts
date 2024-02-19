import { css } from 'lit';

export const CSS_STR = css`
  :host {
    display: block;
    background-color: white;
    padding: 24px 32px;
  }

  .list {
    display: flex;
  }
  .list-item {
    display: inline-flex;
    flex: 50;
    height: 300px;
    justify-content: center;
    align-items: center;
  }
`;
