package com.example.DVLAccess.model;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;

public class ApiTest {

	public String returnSnippet(String licencePlate) throws IOException, InterruptedException {
	
		HttpClient client = HttpClient.newHttpClient();
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles"))
				.header("Content-Type", "application/json")
				.header("x-api-key", "ttUeXDcSBu5wFCNeGgU8s7fM5EnTrGfveTPME2t4")
				.POST(HttpRequest.BodyPublishers.ofString("{\"registrationNumber\":\"" + licencePlate + "\"}")).build();

		HttpResponse<String> DvlaResponse = client.send(request, HttpResponse.BodyHandlers.ofString());
		
		String output = DvlaResponse.body().toString();
		
		return output;
		
	}
	
	public String returnSnippetWithCriteria(String licencePlate, String searchCriteria)
			throws IOException, InterruptedException {

		HttpClient client = HttpClient.newHttpClient();
		HttpRequest request = HttpRequest.newBuilder()
				.uri(URI.create("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles"))
				.header("Content-Type", "application/json")
				.header("x-api-key", "ttUeXDcSBu5wFCNeGgU8s7fM5EnTrGfveTPME2t4")
				.POST(HttpRequest.BodyPublishers.ofString("{\"registrationNumber\":\"" + licencePlate + "\"}")).build();

		HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

		System.out.println(response.body());

		String responseString = response.body();

		String[] responseCut = responseString.split(searchCriteria + "\":\"");
		responseCut = responseCut[1].split("\",");

		return responseCut[0];

//        System.out.println(response.body());

	}

//	public static void main(String[] args) throws IOException, InterruptedException {
//
//		ArrayList<String> listOfLicencePlates = new ArrayList<String>();
//		listOfLicencePlates.add("AA19AAA");
//
//		ArrayList<String> listOfProperties = new ArrayList<String>();
//		listOfProperties.add("registrationNumber");
//		listOfProperties.add("make");
//		listOfProperties.add("monthOfFirstRegistration");
//		listOfProperties.add("registrationNumber");
//		listOfProperties.add("taxDueDate");
//
//		for (String licencePlate : listOfLicencePlates) {
//			for (String dataPoint : listOfProperties) {
//				returnSnippetWithCriteria(licencePlate, dataPoint);
//			}
//			System.out.println("---------------");
//		}
//
//	}
}