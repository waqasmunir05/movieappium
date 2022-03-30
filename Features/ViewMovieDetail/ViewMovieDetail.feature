Feature: View Movie Details

Scenario: View Movie Details of 'Sound of Music'
Given User on the List of Movies named 'Sound of Music'
When Clicked on text with 'Sound of Music'
Then I should see Details with year '1965'