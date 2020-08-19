class FakeTensor {
  constructor(values) {
    this.values = values;
  }

  dataSync() {
    return this.values;
  }
}

Object.defineProperty(FakeTensor, Symbol.hasInstance, {
  value: (instance) => {
    return !!instance && instance.values != null;
  }
});

export function makeFakeTensor(values) {
  return new FakeTensor(values);
}