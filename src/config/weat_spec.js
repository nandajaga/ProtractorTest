
var Objects=require('./Objects.json');

describe("weather page", function() {
	it ("to test the weather dropdown ",function(){
	
	browser.get(Objects.testSiteurl);
	
	browser.waitForAngular();
		
	expect(browser.getCurrentUrl()).toEqual("https://weather.com/");
	
    element(by.xpath(".//*[@id='wx-header-wrap']/div/div/div/div[2]/div[2]/div/section/div/form/input")).sendKeys(Objects.locators.searchPage.search);
	
    element(by.xpath(".//*[@id='wx-header-wrap']/div/div/div/div[2]/div[2]/div/section/div/div[1]")).click();
  
    element(by.xpath(".//*[@id='js-nowcard']/div[1]/header/span/button")).getText().then(function(value) {
    console.log(value);
    expect(value).toEqual('BANGALORE, INDIA');
   	
    });
	
	//dropdown
	browser.actions().mouseMove(element(by.xpath(".//*[@id='mini-panel-header_drilldown_mini_panel']/div/div/div/div[1]/ul/li[1]/a/span"))).perform();
	element(by.xpath(".//*[@id='mini-panel-header_drilldown_mini_panel']/div/div/div/div[1]/ul/li[1]/ul/li[2]/a")).click();	
	element(by.xpath(".//*[@id='wx-main']/div[1]/div/a/span[1]")).click();
	  
	
	//clicking on maps
	
	element(by.xpath(".//*[@id='mini-panel-header_drilldown_mini_panel']/div/div/div/div[1]/ul/li[2]/a/span")).click();
	//element(by.xpath(".//*[@id='wx-main']/div[2]/div[1]/div[2]/div/div/div/div/div/div/ul/li[1]/a")).click();
	element(by.linkText("Terms of Use")).click();
	expect(browser.getCurrentUrl()).toEqual("https://weather.com/legal");
  console.log('last');
	
	}, 500000);



});