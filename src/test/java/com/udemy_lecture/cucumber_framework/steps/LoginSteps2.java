package com.udemy_lecture.cucumber_framework.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps2 {
	@Given("^User navigates to stackoverflow website(\\d+)$")
	public void user_navigates_to_stackoverflow_website(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User navigates to stackoverflow website");
	}

	@Given("^User clicks on login button on homepage(\\d+)$")
	public void user_clicks_on_login_button_on_homepage(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User clicks on login button on homepage");
	}

	@Given("^User enters a valid username(\\d+)$")
	public void user_enters_a_valid_username(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User enters a valid username");
	}

	@Given("^User enters a valid password(\\d+)$")
	public void user_enters_a_valid_password(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User enters a valid password");
	}

	@When("^User clicks on the login button(\\d+)$")
	public void user_clicks_on_the_login_button(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User clicks on the login button");
	}

	@Then("^User should be taken to the successful login page(\\d+)$")
	public void user_should_be_taken_to_the_successful_login_page(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User should be taken to the successful login page");
	}


}
