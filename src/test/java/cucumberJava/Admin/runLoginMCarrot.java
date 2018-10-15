package cucumberJava.Admin;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/cucumber"},
        features = {"src/test/java/cucumberJava/TicketFeature/LoginMCarrot.feature"}
        )
public class runLoginMCarrot {

}
