$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/cucumberJava/TicketFeature/LoginMCarrot.feature");
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": Login Mitrais Carrot",
  "description": "",
  "id": "cucumberjava;:-login-mitrais-carrot",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have open the mitrais carrot web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I input the \u003coption\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "next button should exits",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "cucumberjava;:-login-mitrais-carrot;",
  "rows": [
    {
      "cells": [
        "option"
      ],
      "line": 12,
      "id": "cucumberjava;:-login-mitrais-carrot;;1"
    },
    {
      "cells": [
        "username"
      ],
      "line": 13,
      "id": "cucumberjava;:-login-mitrais-carrot;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": ": Login Mitrais Carrot",
  "description": "",
  "id": "cucumberjava;:-login-mitrais-carrot;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have open the mitrais carrot web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I input the username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "next button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginMCarrot.i_have_open_the_mitrais_carrot_web()"
});
formatter.result({
  "duration": 12901408393,
  "status": "passed"
});
formatter.match({
  "location": "LoginMCarrot.i_input_the_username()"
});
formatter.result({
  "duration": 203033870,
  "status": "passed"
});
formatter.match({
  "location": "LoginMCarrot.nextButtonShouldExits()"
});
formatter.result({
  "duration": 1367871765,
  "status": "passed"
});
formatter.after({
  "duration": 2315162042,
  "status": "passed"
});
});