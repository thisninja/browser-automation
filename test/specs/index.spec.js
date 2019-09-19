import { rootPage } from '../page_objects';

describe('rootPage', () => {
  it('loads page', () => {
    rootPage.visit();
    rootPage.expectToBeOpened();
  });

  it('opens widget', () => {
    expect(rootPage.expectToOpenWidget()).toBeTruthy();
  });
})
