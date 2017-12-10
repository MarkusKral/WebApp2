var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var driver2;
var mochaTimeOut = 30000;

var pageSelector;
var baseTable;
var tableRows;

test.describe('Create a Receipe page', function () {
  this.timeout(mochaTimeOut);
  test.before(function () {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
    pageSelector = By.id('createORupdate');

  });
  test.beforeEach(function () {
    driver.get('http://localhost:3000/#/donate');
    driver.wait(until.elementLocated(pageSelector), 2000);
  });
  test.it('shows the main header', function () {
    driver.findElement(By.id('Headline')).then(function (element) {
      element.getText().then(function (text) {
        expect(text).to.equal('Create or update a receipe');
      });
    });
  });
  test.it('shows the main body', function () {
    driver.findElement(pageSelector)
      .then(function (element) {
        expect(element).to.not.equal(null);
      });
  });
  test.it('Create a receipe', function () {
    var select = driver.findElement(By.id('submitting'));
    select.then(function () {
      return driver.findElement(By.id('nameInput'));
    })
      .then(function (element) {
        element.clear();
        return element;
      })
      .then(function (element) {
        element.sendKeys('test3');
      })
      .then(function () {
        return driver.findElement(By.id('quantityInput'));
      })
      .then(function (element) {
        element.clear();
        return element;
      })
      .then(function (element) {
        element.sendKeys('{"test":3}');
      })
      .then(function (element) {
        select.submit();
        select.click();
        driver2 = new webdriver.Builder()
          .withCapabilities(webdriver.Capabilities.chrome())
          .build();
        driver2.get('http://localhost:3000/#/donations');
        driver2.wait(until.elementLocated(By.id('receipes')), 2000);
        driver2.findElement(By.id('receipeTable')).then(function (element) {
          element.getAttribute('innerHTML').then(function (text) {
            expect(text).to.include("test-receipe2");
          })
          // .then(function () {
          //   driver.findElement(By.id('receipeTable')).then( function( element ) {
          //     element.getAttribute('innerHTML').then(function(text) {
          //       expect(text).to.include("test3");
          //     });
          //   });
          // });

          test.afterEach(function () {
            driver.manage().deleteAllCookies();
          });

          test.after(function () {
            driver.quit();
            driver2.quit();

          });
        });
      });
  });
});

