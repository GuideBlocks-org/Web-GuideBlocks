import { css } from 'lit';

export const CSS_STR = css`
  :host {
    display: block;
  }

  h2 {
    text-align: center;
  }

  .list {
    display: flex;
  }
  .list-item {
    display: inline-flex;
    flex-direction: column;
    flex: 50;
    max-width: 50%;
    height: 300px;
    justify-content: center;
    align-items: center;
  }
`;
