var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000; 

var pageSelector ;
var navBarSelector;
var signupButton;
var loginButton;


test.describe('Home page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('home');
        navBarSelector = By.id('nav');
        loginButton = By.id('LogInButton');
        signupButton = By.id('SignupButton');

    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );
    test.it('shows the main body', function() {   
        driver.findElement(pageSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    });

    test.it( 'shows the nav bar', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the login-button', function() {
      driver.findElement(loginButton)
        .then(function(element) {
          expect(element).to.not.equal(null );
        });
    } );

  test.it( 'shows the signup-button', function() {
    driver.findElement(signupButton)
      .then(function(element) {
        expect(element).to.not.equal(null );
      });
  } );

    test.it( 'shows the main image', function() {
        driver.findElement(By.tagName('img')).then(function(element) {
            element.getAttribute('src').then(function(text) {
                expect(text).to.equal(
                    'http://localhost:3000/public/images/backgroundHome.jpg');
            } );  
        });
    } );
    test.after(function() {
        driver.quit();
    });
});


