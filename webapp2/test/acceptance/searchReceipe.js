var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var baseTable;
var tableRows;

test.describe('Donations page', function () {
  this.timeout(mochaTimeOut);
  test.before(function () {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
    pageSelector = By.id('search');
    baseTable = By.id('submit');
  });
  test.beforeEach(function () {
    driver.get('http://localhost:3000/#/search');
    driver.wait(until.elementLocated(pageSelector), 2000);
  });

  test.it('shows the main body', function () {
    driver.findElement(pageSelector)
      .then(function (element) {
        expect(element).to.not.equal(null);
      });
  });

  test.it('shows the main header', function () {
    driver.findElement(By.id('Headline')).then(function (element) {
      element.getText().then(function (text) {
        expect(text).to.equal('Search for Receipes');
      });
    });
  });

  test.it('accepts donation and displays in list', function () {
    var select = driver.findElement(By.tagName('form'));
    select.then(function () {
      return driver.findElement(By.tagName('input'));
    })
      .then(function (element) {
        element.clear();
        return element;
      })
      .then(function (element) {
        element.sendKeys('test3');
      })
      .then(function (element) {
        tableRows.submit();
      })
      .then(function () {
        driver.wait(until.elementLocated(By.id('results')), 20000);
        return driver.findElements(By.tagName('tr'));
      })
      .then(function (donations) {
        donations.getAttribute('innerHTML').then(function (text) {
          expect(text).to.include("test3");
        });
      });

    test.afterEach(function () {
      driver.manage().deleteAllCookies();
    });

    test.after(function () {
      driver.quit();
    });
  });
});

