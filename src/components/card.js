// Card component
class Card {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  render() {
    return `<div class="card"><h3>${this.title}</h3><p>${this.content}</p></div>`;
  }
}