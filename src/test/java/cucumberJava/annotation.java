package cucumberJava;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class annotation {
    WebDriver driver = new FirefoxDriver();

    @Given("^I have open the Gmail$")
    public void iHaveOpenTheGmail() throws Throwable {
        driver.get("http://www.gmail.com");
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
       // throw new PendingException();
        // Write code here that turns the phrase above into concrete actions
    }

    @When("^I input the username$")
    public void i_input_the_username() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("identifierId")).sendKeys("donnygfrance@gmail.com");
    }

    @Then("^next button should exits$")
    public void nextButtonShouldExits() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath("//SPAN[@class='RveJvd snByac'][text()='Berikutnya']"));
    }

    @After
    public void teardown() {
        driver.quit();
    }

}
