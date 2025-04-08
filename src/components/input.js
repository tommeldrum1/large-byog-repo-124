// Input component
class Input {
  constructor(placeholder) {
    this.placeholder = placeholder;
  }
  render() {
    return `<input placeholder="${this.placeholder}">`;
  }
}