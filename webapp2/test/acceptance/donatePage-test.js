var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noDonations;

test.describe('Donate page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('createORupdate');

    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/donate');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );
    test.it( 'shows the main header', function() {
        driver.findElement(By.id('Headline')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Create or update a receipe');
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


