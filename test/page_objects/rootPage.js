import Base from './base'

class RootPage extends Base {
  visit () {
    this.open(
      this.routes.homeUrl()
    );
  }

  expectToBeOpened () {
    browser.waitForVisible(this.selectors.widget);
  }
};

export default RootPage;
