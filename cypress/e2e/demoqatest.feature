Feature: Alerts, Frame & Windows 
  
Background: 
Given Im on Demoqa page
 
  Scenario: [Test1]Check page drop down
  When Im click on Alerts, Frame & Windows btn
  Then Open Alerts, Frame & Windows page 
  When Im read tab name 
  And Click on tab
  Then Im see Browser Window tab

   Scenario: [Test2]Check Browser Window functional
  When Im click on Alerts, Frame & Windows btn
  Then Open Alerts, Frame & Windows page 
   When I click the Browser Window tab
   Then Open new browser window page 

   Scenario:[Test3]Check New Tab btn
   When Im click on Alerts, Frame & Windows btn
   Then Open Alerts, Frame & Windows page
   When I click at Browser Window tab 
   When I check New Tab btn
   And Click New Tab btn
   Then Open sample page

   Scenario:[Test4]CheckNew Window btn
   When Im click on Alerts, Frame & Windows btn
   Then Open Alerts, Frame & Windows page
   When I press on Browser Window tab  
   When I check New Window btn
   And Click New Window btn
   Then Open sample web page

     Scenario:[Test5]Check New Window Massage btn
     When Im click on Alerts, Frame & Windows btn
     Then Open Alerts, Frame & Windows page 
     When I pres on Browser Window tab 
     When I check New Window Massage btn
     And Click New Window Massage btn
     Then Open about blank  page
   

  Scenario:[Test6]Check Alert tab functional
  When Im click on Alerts, Frame & Windows btn
  Then Open Alerts, Frame & Windows page 
  When I check Alert tab
  And Click on Alert tab
  Then Open Alert page
  When Im check text before first btn
  And Im click first btn 
   Then Allert massage 
  When Im check text before second btn
  And Im click second btn 
   Then Aller massage in 5 second 
  When Im check text before third btn
  And Im click third btn 
   Then Look alert Do you confir action
  When Im check text before fourt btn
  And Im click fourth btn 
   Then Look Alert Please enter your name 

 Scenario:[Test7]Check Frames tab functional
 When Im click on Alerts, Frame & Windows btn
 Then Open Alerts, Frame & Windows page 
 When I check Frames tab
 And Click on Frames tab
 Then Open Frames page
 When I check page title
 Then Title should be right
 When I read page body text
 Then Body text should be right
 When I read first frame  
 Then First frame title should be right


  Scenario:[Test8]Check Nested Frames tab functional
  When Im click on Alerts, Frame & Windows btn
  Then Open Alerts, Frame & Windows page 
  When I check Nested Frames tab
  And Click on Nested Frames tab
  Then Open Nested Frames tab page 
  When I read Nested Frame page title 
  Then Titile must be right
  When I read Neked Frames page body text
  Then Text should be absolutely right

  Scenario: [Test9]`Check Modal Dialogs tab functional
  When Im click on Alerts, Frame & Windows btn
  Then Open Alerts, Frame & Windows page 
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
