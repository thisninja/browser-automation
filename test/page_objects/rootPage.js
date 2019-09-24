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

  triggerContactAgent() {
    $(this.selectors.contactAgent).waitForDisplayed();
    $(this.selectors.contactAgent).click();
  }

  selectLastUserMessage() {
    const $messageList = $$(this.selectors.messageList)[0];
    const $messageSent = $$(this.selectors.messageSentSelector);
    const text = $messageList.$messageSent[$messageSent.length - 1].$('span').getText();
    return text;
  }

  selectLastServerReply() {
    const $messageList = $$(this.selectors.messageList)[0];
    const $messageReceived = $$(this.selectors.messageReceivedSelector);
    const text = $messageList.$messageReceived[$messageReceived.length - 1].$('span').getText();
    return text;
  }

  typeUserMessage() {
    $(this.selectors.userInput).setValue('Test Text');
  }

  sendUserMessage(byAction = false) {
    this.typeUserMessage();
    if (!byAction) {
      browser.keys(this.keys.ENTER);
    } else {
      $(this.selectors.sendIcon).click();
    }
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
