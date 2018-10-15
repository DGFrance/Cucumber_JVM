package cucumberJava.Admin;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class LoginMCarrot {

     WebDriver driver;

    @Given("^I have open the mitrais carrot web$")
    public void i_have_open_the_mitrais_carrot_web() throws Throwable {
        FirefoxBinary firefoxBinary = new FirefoxBinary();
        firefoxBinary.addCommandLineOptions("-headless");
        FirefoxOptions firefoxOptions = new FirefoxOptions();
        firefoxOptions.setBinary(firefoxBinary);
        driver = new FirefoxDriver(firefoxOptions);
        driver.get("http://carrotdevdb:90/MitraisCarrotPHPClient/index.php/login");
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(src, new File("D:/SeleSShoot/Login/Loginbefore.png"));

    }

    @When("^I input the username$")
    public void i_input_the_username() throws Throwable{
        driver.findElement(By.xpath("//INPUT[@id='username']")).sendKeys("Donny_F7234");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//INPUT[@id='password']")).sendKeys("D0nny@m1trais1");
        File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(src, new File("D:/SeleSShoot/Login/Username.png"));
    }

    @Then("^next button should exits$")
    public void nextButtonShouldExits() throws Throwable{
        driver.findElement(By.xpath("//BUTTON[@class='btn btn-lg btn-primary btn-block text-uppercase']")).click();
        File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(src, new File("D:/SeleSShoot/Login/Password.png"));
    }

    @After
    public void teardown() throws IOException {
        File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(src, new File("D:/SeleSShoot/Login/LoginAfter.png"));
        driver.quit();}

}
