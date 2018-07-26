//var HtmlReporter = require('protractor-html-screenshot-reporter');
 

exports.config = {
		
		directConnect:true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome',
	chromeOptions: {
        args: [
            '--start-maximized'
        ]
    }
  },

  specs: ['weat_spec.js'],


  jasmineNodeOpts: {
    showColors: true,
	defaultTimeoutInterval:50000
  },
  
  
  
  onPrepare: function () {
	    var AllureReporter = require('jasmine-allure-reporter');
	    jasmine.getEnv().addReporter(new AllureReporter());
	    jasmine.getEnv().afterEach(function(done){
	      browser.takeScreenshot().then(function (png) {
	        allure.createAttachment('Screenshot', function () {
	          return new Buffer(png, 'base64')
	        }, 'image/png')();
	        done();
	      })
	    });
	  }
};							