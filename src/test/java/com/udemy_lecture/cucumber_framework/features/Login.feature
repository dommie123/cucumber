Feature: Log into account
	Existing user should be able to login to account with currect credentials

Scenario: Login to account with correct credentials
	Given User navigates to stackoverflow website
	And User clicks on login button on homepage
	And User enters a valid username
	And User enters a valid password 
	When User clicks on the login button
	Then User should be taken to the successful login page 