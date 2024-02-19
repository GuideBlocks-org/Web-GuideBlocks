import { css } from 'lit';

export const ELEMENT_CSS = css`
  :host {
    display: block;
    position: relative;
    z-index: 100;
    pointer-events: all;
    width: 400px;
    border: solid 1px red;
    background-color: white;
    padding: 24px 32px;
  }

  .options-list-wrapper {
    display: flex;
    padding: 16px 0;
    justify-content: center;
  }

  .options-list-wrapper.horizontal.has-label {
  }

  .options-list-wrapper.horizontal .options-list-container {
    justify-content: center;
  }

  .options-list-wrapper.vertical .options-list-container {
    flex-direction: column;
  }

  .options-list-wrapper.vertical.has-label {
  }

  .options-list-container {
    display: flex;
    position: relative;
  }

  .option-item {
    cursor: pointer;
  }

  .option-item.detractors {
    color: red !important;
  }

  .option-item.neutrals {
    color: orange !important;
  }

  .option-item.promoters {
    color: green !important;
  }

  .title {
    font-weight: bold;
    text-align: center;
  }

  .message {
    text-align: center;
  }

  /*Label*/

  .labels-container {
    display: flex;
  }

  .label1,
  .label2 {
    color: #7d7d7d;
    font-size: 0.8em;
    white-space: nowrap;
  }

  .options-list-wrapper.horizontal.has-label .label1,
  .options-list-wrapper.horizontal.has-label .label2 {
    flex: 1;
  }

  .options-list-wrapper.horizontal.has-label .label1 {
    padding-right: 16px;
  }

  .options-list-wrapper.horizontal.has-label .label2 {
    text-align: right;
  }

  .options-list-wrapper.vertical.has-label .label1,
  .options-list-wrapper.vertical.has-label .label2 {
    text-align: center;
  }

  /*Custom input*/

  .button-container {
    display: flex;
    justify-content: center;
  }

  #cancel-btn,
  #submit-btn {
    padding: 0 8px;
    margin: 16px;
    color: #0080ff;
    border: 0;
    text-decoration: none;
    text-transform: uppercase;
    border-style: solid;
    background-color: rgba(0, 0, 0, 0);
    background: none;
    cursor: pointer;
  }

  textarea {
    width: calc(100% - 6px);
  }
`;
