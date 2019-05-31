import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('Weather app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should show city name after load', () => {
    browser.sleep(2000);
    expect(page.getCityName().getText()).toContain(('Kiev'));
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
