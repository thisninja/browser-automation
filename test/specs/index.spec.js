import { rootPage } from '../page_objects';
import { selectors, classes } from '../lib';


describe('rootPage', () => {
  it('should load page', () => {
    rootPage.visit();
    expect(rootPage.expectToBeOpened()).toBeTruthy();
  });

  it('should save rootPage snapshots', () => {
    rootPage.saveElement(selectors.toggler, 'widgetTogglerClosed');
    rootPage.saveFullPageScreen(`${selectors.widget}-closed`, {});
  });

  it('should compare snapshots successfully with a baseline', () => {
    expect(rootPage.checkElement(selectors.toggler, 'widgetTogglerClosed')).toEqual(0);
    expect(rootPage.checkFullPageScreen(`${selectors.widget}-closed`, {})).toEqual(0);
  });

  describe('widget open', () => {
    beforeAll(() => {
      rootPage.openWidget();
    });

    it('should open widget', () => {
      const classNames = $(selectors.toggler).getAttribute('class');
      expect(classNames.includes(classes.openedToggler)).toBeTruthy();
    });

    it('should save widget open snapshots', () => {
      rootPage.saveElement(selectors.toggler, 'widgetTogglerClose');
      rootPage.saveFullPageScreen(`${selectors.widget}-open`, {});
    });

    it('should compare snapshots successfully with a baseline', () => {
      expect(rootPage.checkElement(selectors.toggler, 'widgetTogglerOpened')).toEqual(0);
      expect(rootPage.checkFullPageScreen(`${selectors.widget}-opened`, {})).toEqual(0);
    });
  });
});

