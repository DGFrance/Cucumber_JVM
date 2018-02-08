Feature: CucumberJava

  Scenario Outline: : Login functionality exists

    Given I have open the Gmail

    When I input the <option>

    Then next button should exits

   Examples:
    |option|
    |username|