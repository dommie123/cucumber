$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Log into account",
  "description": "Existing user should be able to login to account with currect credentials",
  "id": "log-into-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login to account with correct credentials",
  "description": "",
  "id": "log-into-account;login-to-account-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be taken to the successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_stackoverflow_website()"
});
formatter.result({
  "duration": 99783700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button_on_homepage()"
});
formatter.result({
  "duration": 120200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_a_valid_username()"
});
formatter.result({
  "duration": 52800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_a_valid_password()"
});
formatter.result({
  "duration": 63600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 63700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_taken_to_the_successful_login_page()"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Log into account",
  "description": "Existing user should be able to login to account with currect credentials",
  "id": "log-into-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login to account with correct credentials2",
  "description": "",
  "id": "log-into-account;login-to-account-with-correct-credentials2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to stackoverflow website2",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button on homepage2",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters a valid username2",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters a valid password2",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the login button2",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should be taken to the successful login page2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "LoginSteps2.user_navigates_to_stackoverflow_website(int)"
});
formatter.result({
  "duration": 2350900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "LoginSteps2.user_clicks_on_login_button_on_homepage(int)"
});
formatter.result({
  "duration": 123600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "LoginSteps2.user_enters_a_valid_username(int)"
});
formatter.result({
  "duration": 156200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "LoginSteps2.user_enters_a_valid_password(int)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "LoginSteps2.user_clicks_on_the_login_button(int)"
});
formatter.result({
  "duration": 101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 49
    }
  ],
  "location": "LoginSteps2.user_should_be_taken_to_the_successful_login_page(int)"
});
formatter.result({
  "duration": 75900,
  "status": "passed"
});
});