import { browser, by, element } from 'protractor';

describe('Log in', () => {
  it('1.0: Should log in as an admin', async() => {
    browser.get('/home/login');
    browser.sleep(3000);
    element(by.id('loginUserName')).sendKeys('test user');
    element(by.id('loginPassword')).sendKeys('123');
    element(by.id('loginCheckAdmin')).click();
    element(by.css('button[type=submit]')).click();
    browser.sleep(2000);
  });

  it('1.1: Should navigate to creat user page and create user', async () => {
    browser.get('/portal/register');
    element(by.css('input[type=checkbox]')).click();
    element(by.id('firstname')).sendKeys('satan');
    element(by.id('lastname')).sendKeys('Unnsteinsson');
    element(by.id('username')).sendKeys('unnsteinsson');
    element(by.id('password')).sendKeys('123ggg');
    element(by.id('password2')).sendKeys('123ggg');
    element(by.id('birthDate')).sendKeys('1981-04-27');
    element(by.id('area')).sendKeys('Hf');
    element(by.id('gender')).sendKeys('male');
    element(by.id('rate')).sendKeys('300');
    element(by.css('button[type=submit]')).click();
    browser.sleep(30000);
  });





});
