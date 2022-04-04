Feature: View Movie Details

Scenario: View Movie Details of 'The Sound of Music'
Given I am on Search Screen
When I enter movie name 'The Sound of Music'
Then I should see Details with year '1965' with exact Date '1965-04-01'