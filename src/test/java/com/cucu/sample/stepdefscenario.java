package com.cucu.sample;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefscenario {
	 WebDriver driver;
	@Given("The user is in telecom home page")
	public void the_user_is_in_telecom_home_page() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\N Kathiresan\\workspace\\CucumberSample\\driver\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("http://www.demo.guru99.com/telecom/");
	driver.manage().window().maximize();
	}

	@Given("The user click on add customer")
	public void the_user_click_on_add_customer() {
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
		
	}

	@When("The user is filling all the field{string},{string},{string},{string},{string}")
	public void the_user_is_filling_all_the_field(String fname, String lname, String email, String add, String phno) {
	driver.findElement(By.xpath("///label[text()='Done']")).click();
	driver.findElement(By.id("fname")).sendKeys(fname);
	driver.findElement(By.id("lname")).sendKeys(lname);	
	driver.findElement(By.id("email")).sendKeys(email);	
	driver.findElement(By.xpath("//textarea[@id='message']")).sendKeys(add);	
	driver.findElement(By.xpath("//input[@id='telephoneno']")).sendKeys(phno);	
	}

	@When("The user click on submit button")
	public void the_user_click_on_submit_button() {
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	@Then("The user should see the id is generated")
	public void the_user_should_see_the_id_is_generated() {
	Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]"
			+ "")).isDisplayed());
	}

	}


