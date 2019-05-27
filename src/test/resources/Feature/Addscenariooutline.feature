Feature: Add 
Scenario Outline: Title of your scenario outline
Given The user is in telecom home page
And The user click on add customer
When The user is filling all the field"<fname>","<lname>","<email>","<add>","<phno>"
And The user click on submit button
Then The user should see the id is generated

Examples:
|fname|lname|email|add|phno|
|karthi|rajan|kr@gmail.com|tanjore|786543333|
|ajith|rajan|ar@gmail.com|trichy|234567234|
|ganesh|rajan|gr@gmail.com|chennai|123456789|















