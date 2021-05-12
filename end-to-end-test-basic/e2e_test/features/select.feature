Feature: Navigate to the content page

    As a user, I want to be able to navigate to the content page

    @navigation
    Scenario: Navigating to the content page
        Given I open the home webpage of 'http://localhost:9000'
        When I click on the visible content page link
        Then I should be on the content page