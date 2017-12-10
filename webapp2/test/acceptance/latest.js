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

test.describe('List latest Receipes page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('latest');
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/newest');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );

    test.it('shows the main body', function() {
      driver.findElement(pageSelector)
        .then(function(element) {
          expect(element).to.not.equal(null );
        });
    });
    test.it( 'shows the main header', function() {
        driver.findElement(By.id('Headline')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Latest Receipes');
            });
        });
    } );

  test.it( 'Show the test-receipe', function() {
    driver.findElement(By.id('receipeTable')).then( function( element ) {
      element.getAttribute('innerHTML').then(function(text) {
        expect(text).to.include("test-receipe2");
      });
    });
  } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );
 
    test.after(function() {
        driver.quit();
    });
});


