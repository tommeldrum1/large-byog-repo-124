// Button component
class Button {
  constructor(text) {
    this.text = text;
  }
  render() {
    return `<button>${this.text}</button>`;
  }
}