export function objToArray<T extends Record<string, any>, K extends keyof T>(
  enumObj: T,
  config: { flLabel?: boolean } = { flLabel: true }
): { value: T[K]; label: K | string }[] {
  return Object.entries(enumObj)
    .filter((item) => !/^[0-9]/.test(item[0]))
    .map((item: any) => ({
      value: item[1],
      label: config.flLabel ? item[0].split('_').join(' ') : item[0],
    })) as any;
}

export function applyStyle(style: CSSStyleDeclaration, properties: any) {
  objToArray(properties as Record<string, any>).forEach((prop) => {
    let value: any;
    if (
      typeof prop.value === 'number' &&
      !isNaN(prop.value) &&
      !['z-index'].includes(prop.label)
    ) {
      value = prop.value + 'px';
    } else {
      value = prop.value;
    }
    style.setProperty(prop.label, value);
  });
}

const DF_OPTIONS = { bubbles: true, composed: true };

export function buildEvent(type: string, options?: CustomEventInit) {
  return new CustomEvent(type, { ...DF_OPTIONS, ...options });
}

export function clearStyle(style: CSSStyleDeclaration) {
  style.cssText = '';
}