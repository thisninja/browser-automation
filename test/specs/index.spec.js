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

    describe('menu toggler', () => {
      it('should open menu', () => {
        rootPage.openMenu();
      });

      it('should save menuToggler snapshot', () => {
        rootPage.saveElement(selectors.menuToggler, 'widgetMenuTogglerOpened');
        rootPage.saveFullPageScreen(`${selectors.menuToggler}-opened`, {});
      });

      it('should compare snapshot successfully with a baseline', () => {
        expect(rootPage.checkElement(selectors.menuToggler, 'widgetMenuTogglerOpened')).toEqual(0);
        expect(rootPage.checkFullPageScreen(`${selectors.menuToggler}-opened`, {})).toEqual(0);
      });
    });

    xdescribe('voice recognition', () => {
      xit('should click on voice recognition element', () => {
        // rootPage.triggerVoiceRecognition();
      });

      xit('should save speechIcon snapshot', () => {
        rootPage.saveElement(selectors.speechIcon, 'widgetSpeechIconTriggered');
        rootPage.saveFullPageScreen(`${selectors.speechIcon}-triggered`, {});
      });

      xit('should compare snapshot successfully with a baseline', () => {
        expect(rootPage.checkElement(selectors.menuToggler, 'widgetSpeechIconTriggered')).toEqual(0);
        expect(rootPage.checkFullPageScreen(`${selectors.menuToggler}-triggered`, {})).toEqual(0);
      });
    });

    describe('input area', () => {
      it('should set focus', () => {
        rootPage.setUserInputFocus();
        expect(rootPage.isFocused()).toBeTruthy();
      });

      xit('should save userInput snapshot', () => {
        // disabled since it produces a flaky test
        // since textarea cursor when focused in blinking
        // and thus it fails sometimes with 0.07 diff
        rootPage.saveElement(selectors.userInput, 'widgetUserInputFocused');
        rootPage.saveFullPageScreen(`${selectors.userInput}-focused`, {});
      });

      xit('should compare snapshot successfully with a baseline', () => {
        // disabled since it produces a flaky test
        // since textarea cursor when focused in blinking
        // and thus it fails sometimes with 0.07 diff
        expect(rootPage.checkElement(selectors.userInput, 'widgetUserInputFocused')).toEqual(0);
        expect(rootPage.checkFullPageScreen(`${selectors.userInput}-focused`, {})).toEqual(0);
      });

      it('should type user message', () => {
        rootPage.typeUserMessage();
      });

      it('should save userInput snapshot', () => {
        rootPage.saveElement(selectors.userInput, 'widgetUserInputFocusedWithText');
        rootPage.saveFullPageScreen(`${selectors.userInput}-focused-with-text`, {});
      });

      it('should compare snapshot successfully with a baseline', () => {
        expect(rootPage.checkElement(selectors.userInput, 'widgetUserInputFocusedWithText')).toEqual(0);
        expect(rootPage.checkFullPageScreen(`${selectors.userInput}-focused-with-text`, {})).toEqual(0);
      });

      describe('should sent message', () => {
        it('should sent user message by pressing enter', () => {
          rootPage.sendUserMessage();
        });

        it('should sent user message by clicking on send-icon', () => {
          rootPage.sendUserMessage(true);
        });

        afterAll(() => {
          expect($(this.selectors.userInput).getValue()).toEqual('');
        });

        xdescribe('user message sent', () => {
          it('displays latest user message', () => {
            expect(rootPage.selectLastUserMessage()).toEqual('Test Text');
          });

          it('displays latest server reply', () => {
            expect(rootPage.selectLastServerReply()).not.toEqual('');
          });
        });
      });
    });

    xdescribe('contact an agent', () => {
      beforeAll(() => {
        rootPage.triggerContactAgent();
      });

      it('should display user message with text "Contact un agent"', () => {
        expect(rootPage.selectLastUserMessage()).toEqual('Contact un agent');
      });

      it('should display initial server zendesk message', () => {
        expect(rootPage.selectBeforeLastServerReply()).toEqual(`C'est parti`);
        expect(rootPage.selectLastServerReply()).toEqual(`mon kiki !`);
      });

      it('should display delivery status label', () => {
        rootPage.sendUserMessage();
      });

      it('should save delivery status snapshot', () => {
        rootPage.saveElement(selectors.notFailureDeliveryStatus, 'widgetMessageNotFailureDeliveryStatus');
        rootPage.saveFullPageScreen(`${selectors.notFailureDeliveryStatus}`, {});
      });

      it('should compare snapshot successfully with a baseline', () => {
        expect(rootPage.checkElement(selectors.notFailureDeliveryStatus, 'widgetMessageNotFailureDeliveryStatus')).toEqual(0);
        expect(rootPage.checkFullPageScreen(`${selectors.notFailureDeliveryStatus}`, {})).toEqual(0);
      });
    });
  });
});

