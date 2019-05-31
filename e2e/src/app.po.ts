import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCityName() {
    return element(by.css('.city-name'));
  }
}
