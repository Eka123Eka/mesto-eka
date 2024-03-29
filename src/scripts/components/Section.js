export default class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  };

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  };

  addItem(element, append = false) {
    append ? this._container.append(element)
           : this._container.prepend(element)
  };
}
