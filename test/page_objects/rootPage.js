import Base from './base';

class RootPage extends Base {
  visit () {
    this.open(
      this.routes.homeUrl()
    );
  }

  expectToBeOpened () {
    browser.waitForVisible(this.selectors.widget);
  }

  expectToOpenWidget() {
    browser.waitForVisible(this.selectors.widget);
    $(this.selectors.toggler).click();

    const classNames = $(this.selectors.toggler).getAttribute('class');
    return classNames.includes(this.classes.openedToggler);
  }
};

export default RootPage;
