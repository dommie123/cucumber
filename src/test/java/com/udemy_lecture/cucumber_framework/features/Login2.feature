Feature: Log into account
	Existing user should be able to login to account with currect credentials

Scenario: Login to account with correct credentials2
	Given User navigates to stackoverflow website2
	And User clicks on login button on homepage2
	And User enters a valid username2
	And User enters a valid password2
	When User clicks on the login button2
	Then User should be taken to the successful login page2  