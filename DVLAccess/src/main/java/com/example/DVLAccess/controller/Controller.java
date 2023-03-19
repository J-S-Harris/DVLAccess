package com.example.DVLAccess.controller;
import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.DVLAccess.model.ApiTest;

@RestController
public class Controller {
	
	ApiTest dvla = new ApiTest(); 
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/")
	public String test() {
		return "success";
	}
	
	@CrossOrigin
	@GetMapping("/{licencePlate}")
	public String returnAllInfo(@PathVariable String licencePlate) throws IOException, InterruptedException {
		
		return dvla.returnSnippet(licencePlate);
	}
	
	@GetMapping("/{licencePlate}/{searchCriteria}")
	public String returnAllInfo(@PathVariable String licencePlate, @PathVariable String searchCriteria) throws IOException, InterruptedException {
		return dvla.returnSnippetWithCriteria(licencePlate, searchCriteria);
	}

	
}