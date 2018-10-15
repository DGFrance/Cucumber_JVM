Feature: CucumberJava

  Scenario Outline: : Login Mitrais Carrot

    Given I have open the mitrais carrot web

    When I input the <option>

    Then I upload image <Images>

    Then next button should exits

    Examples:
      |option|
      |username|
