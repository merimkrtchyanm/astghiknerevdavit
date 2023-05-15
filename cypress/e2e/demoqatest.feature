Feature: Test
  As a user,
  I want to check to demo qa page windows tab
  So that I can do in this tab

 Scenario: Check page drop down
 Given Im on testing page
 When Im read tab name 
 And Click on tab
 Then Im see Browser Window tab

 Scenario: Check Browser Window functional
 Given Browser Window tab
 When I click on Browser Window tab
 Then Open new browser window page 

  Scenario:Check New Tab btn
  Given New tab btn test
  When I check New Tab btn
  And Click New Tab btn
  Then Open sample page

 Scenario:CheckNew Window btn
 Given New window btn test
 When I check New Window btn
 And Click New Window btn
 Then Open sample web page

   Scenario:Check New Window Massage btn
   Given New window masage btn test
   When I check New Window Massage btn
   And Click New Window Massage btn
   And Open about blank  page
   

Scenario:Check Alert tab functional
Given Alert tab
When I check Alert tab
And Click on Alert tab
Then Open Alert page
When Im check text before first btn
And Im click first btn 
# Then Allert massage 
When Im check text before second btn
And Im click second btn 
# Then Aller massage in 5 second 
When Im check text before third btn
And Im click third btn 
#  Then Look alert Do you confir action
When Im check text before fourt btn
And Im click fourth btn 
# Then Look Alert Please enter your name 

Scenario: Check Frames tab functional
Given Frames tab
When I check Frames tab
And Click on Frames tab
Then Open Frames page
When I check page title
Then Title should be right
When I read page body text
Then Body text should be right
When I read first frame  
#  Then First frame title should be right
 When I read second frame 
#  Then Second frame title should be right

Scenario: Check Nested Frames tab functional
Given  Nested Frames tab
When I check Nested Frames tab
And Click on Nested Frames tab
Then Open Nested Frames tab page 
When I read Nested Frame page title 
Then Titile must be right
When I read Neked Frames page body text
Then Text should be absolutely right

Scenario: Check Modal Dialogs tab functional
Given Modal Diologs tab
When I check Modal Diologs tab
And Click on Modal Diologs tab
Then Open Modal Diologs tab page  
When I see smal diologs btn
And Read btn name
And Click at small diologs btn
Then Allert small massage 
Then Close small modal
When I see large diologs btn
And Read btn name
And Click at large diologs btn
Then Allert large massage 
Then Close large modal
