$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Addscenariooutline.feature");
formatter.feature({
  "name": "Add",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.step({
  "name": "The user is filling all the field\"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003cadd\u003e\",\"\u003cphno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the id is generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "add",
        "phno"
      ]
    },
    {
      "cells": [
        "karthi",
        "rajan",
        "kr@gmail.com",
        "tanjore",
        "786543333"
      ]
    },
    {
      "cells": [
        "ajith",
        "rajan",
        "ar@gmail.com",
        "trichy",
        "234567234"
      ]
    },
    {
      "cells": [
        "ganesh",
        "rajan",
        "gr@gmail.com",
        "chennai",
        "123456789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefscenario.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefscenario.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the field\"karthi\",\"rajan\",\"kr@gmail.com\",\"tanjore\",\"786543333\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefscenario.the_user_is_filling_all_the_field(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefscenario.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefscenario.the_user_should_see_the_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefscenario.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefscenario.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the field\"ajith\",\"rajan\",\"ar@gmail.com\",\"trichy\",\"234567234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefscenario.the_user_is_filling_all_the_field(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefscenario.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefscenario.the_user_should_see_the_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefscenario.the_user_is_in_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefscenario.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is filling all the field\"ganesh\",\"rajan\",\"gr@gmail.com\",\"chennai\",\"123456789\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefscenario.the_user_is_filling_all_the_field(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefscenario.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefscenario.the_user_should_see_the_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
});