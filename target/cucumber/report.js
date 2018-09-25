$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/cucumberJava/cucumberJava.feature");
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": Login functionality exists",
  "description": "",
  "id": "cucumberjava;:-login-functionality-exists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have open the Gmail",
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
  "id": "cucumberjava;:-login-functionality-exists;",
  "rows": [
    {
      "cells": [
        "option"
      ],
      "line": 12,
      "id": "cucumberjava;:-login-functionality-exists;;1"
    },
    {
      "cells": [
        "username"
      ],
      "line": 13,
      "id": "cucumberjava;:-login-functionality-exists;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": ": Login functionality exists",
  "description": "",
  "id": "cucumberjava;:-login-functionality-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have open the Gmail",
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
  "location": "annotation.iHaveOpenTheGmail()"
});
formatter.result({
  "duration": 14250479184,
  "status": "passed"
});
formatter.match({
  "location": "annotation.i_input_the_username()"
});
formatter.result({
  "duration": 230158630,
  "status": "passed"
});
formatter.match({
  "location": "annotation.nextButtonShouldExits()"
});
formatter.result({
  "duration": 10294010,
  "status": "passed"
});
formatter.after({
  "duration": 305463610,
  "status": "passed"
});
});