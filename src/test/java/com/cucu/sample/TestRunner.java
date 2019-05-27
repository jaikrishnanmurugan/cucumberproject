package com.cucu.sample;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Feature/Addscenariooutline.feature", glue = "com.cucu.sample", plugin = {
		"html:target/failed", "json:target/report.json" })

public class TestRunner {

}
