Feature: Login
    @TestFeature
    Scenario Outline: Login to Orange CRM Website

        Given C2393 User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the Website
        Examples:
            | username | password |
            | Admin    | admin123 |
            | Test     | abcd123  |
            | Admin    | admin123 |