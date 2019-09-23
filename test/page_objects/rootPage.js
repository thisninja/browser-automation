import Base from './base';

class RootPage extends Base {
  visit () {
    this.open(
      this.routes.homeUrl()
    );
  }

  expectToBeOpened() {
    return ($(this.selectors.widget).waitForDisplayed());
  }

  openWidget() {
    $(this.selectors.widget).waitForDisplayed();
    $(this.selectors.toggler).click();
  }

  openMenu() {
    $(this.selectors.menuToggler).waitForDisplayed();
    $(this.selectors.menuToggler).click();
  }

  setUserInputFocus() {
    $(this.selectors.userInput).waitForDisplayed();
    $(this.selectors.userInput).click();
  }

  isFocused() {
    return ($(this.selectors.userInput).isFocused());
  }

  typeUserMessage() {
    $(this.selectors.userInput).setValue('Test Text');
  }

  sendUserMessage(byAction = false) {
    this.typeUserMessage();
    if (!byAction) {
      return $(this.selectors.sendIcon).click();
    }

    return browser.keys(this.keys.ENTER);
  }

  saveScreen(selector, options = {}) {
    browser.saveScreen(this.selectors.toggler, options);
  }

  saveElement(selector, name = '', options = {}) {
    browser.saveElement($(selector), name, options);
  }

  saveFullPageScreen(selector, options = {}) {
    browser.saveFullPageScreen(selector, options);
  }

  checkScreen(selector, options = {}) {
    browser.checkScreen(selector, options)
  }

  checkElement(selector, name = '', options = {}) {
    return (browser.checkElement($(selector), name, options));
  }

  checkFullPageScreen(selector, options = {}) {
    return (browser.checkFullPageScreen(selector, options));
  }
};

export default RootPage;
