import { valueUnit } from '@contextual/web-guideblocks-core';

class FeedbackElementBase<T> {
  c?: Array<string>;
  i: 0 | 1 | number = 0;
}

export class FeedbackElementWeb extends FeedbackElementBase<FeedbackElementWeb> {
  // Web only
  layout?: any;
  type?: any;
  text?: string;
  label?: number;
  label1?: string;
  label2?: string;
  color?: string;
  'padding-top'?: string;
  'padding-right'?: string;
  'padding-bottom'?: string;
  'padding-left'?: string;
  'margin-top'?: string;
  'margin-right'?: string;
  'margin-bottom'?: string;
  'margin-left'?: string;
  'font-size'?: string;
  'font-family'?: string;
  'font-weight'?: string;
  'text-align'?: string;
  'line-height'?: number;
  'corner-radius'?: number;
  'border-width'?: number;
  'border-color'?: string;

  constructor(data: Partial<FeedbackElementWeb>) {
    super();
    this.apply(data);
  }

  protected apply(data: any): void {
    if (data) {
      Object.assign(this, JSON.parse(JSON.stringify(data)));
    }
  }

  get css(): any {
    return {
      'text-align': 'center',
      'box-sizing': 'border-box',
      color: this.color,
      'border-style': 'solid',
      'border-color': this['border-color'],
      'border-width': valueUnit(this['border-width'] || 0, 'px'),
      'border-radius': valueUnit(this['corner-radius'], 'px'),
      'font-family': this['font-family'] || '',
      'font-size': valueUnit(this['font-size'], 'px'),
      'font-weight': this['font-weight'] || '',
      'line-height': valueUnit(this['line-height'], '%'),
      'margin-bottom': valueUnit(this['margin-bottom'], 'px'),
      'margin-left': valueUnit(this['margin-left'], 'px'),
      'margin-right': valueUnit(this['margin-right'], 'px'),
      'margin-top': valueUnit(this['margin-top'], 'px'),
      'padding-bottom': valueUnit(this['padding-bottom'], 'px'),
      'padding-left': valueUnit(this['padding-left'], 'px'),
      'padding-right': valueUnit(this['padding-right'], 'px'),
      'padding-top': valueUnit(this['padding-top'], 'px'),
    };
  }
}
