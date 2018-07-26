describe("weather page", function() {

  
	
	it ("to test the weather dropdown ",function(){
	
	browser.get("https://www.upwork.com/");
	
	//browser.waitForAngular();
	
	//expect(browser.getCurrentUrl()).toEqual("https://weather.com/");

	
    element(by.xpath("html/body/div[1]/div/header/div[1]/div[2]/nav/ul[2]/li[2]/a")).click();
	
	element(by.id("login_username")).sendKeys("mattamaradhya.87@gmail.com");
	
	element(by.id("login_password")).sendKeys("manas@123");
	
	element(by.partialButtonText("Log In")).click();
	});
});
	
   
	