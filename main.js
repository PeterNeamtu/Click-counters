class ClickCounter {
  constructor(cssSelector, click) {
    this.cssSelector = cssSelector;
    this.click = click;
    this.renderCounter();
  }

  addclick(amount = 1) {
    this.click += amount;
    this.renderClicks();
  }

  renderClicks() {
    this.counterValue.innerText = this.click;
  }

  renderCounter() {
    this.clickCounter = document.createElement('div');
    this.clickButton = document.createElement('button');
    this.counterValue = document.createElement('span');

    this.clickButton.innerText = 'Click!';
    this.clickCounter.classList.add('click-counter-container');
    this.counterValue.classList.add('click-counter-display');

    this.clickCounter.appendChild(this.counterValue);
    this.clickCounter.appendChild(this.clickButton);
    this.cssSelector.appendChild(this.clickCounter);

    this.clickButton.addEventListener('click', () => this.addclick());

    this.renderClicks();
  }
}

const clickCounter = document.querySelector('.ui-container');

let click1 = new ClickCounter(clickCounter, 0);
let click2 = new ClickCounter(clickCounter, 0);
