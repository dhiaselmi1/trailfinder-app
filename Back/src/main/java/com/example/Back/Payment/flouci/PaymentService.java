package com.example.Back.Payment.flouci;

import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import com.fasterxml.jackson.databind.JsonNode;

import org.springframework.beans.factory.annotation.Value;
import java.io.IOException;
import java.util.HashMap;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    @Value("${flouci.app_token}")
    private String appToken;

    @Value("${flouci.app_secret}")
    private String appSecret;

    @Value("${flouci.developer_tracking_id}")
    private String developerTrackingId;
    private final OkHttpClient client = new OkHttpClient();

    public ResponsePayment generatePayment(String amount) throws IOException {
        // Creating the OkHttpClient client
        OkHttpClient client = new OkHttpClient().newBuilder().build();

        // Defining the media type
        MediaType mediaType = MediaType.parse("application/json");

        // Creating a HashMap to store request data
        HashMap requestHashMap = new HashMap();
        requestHashMap.put("app_token", appToken);
        requestHashMap.put("app_secret", appSecret);
        requestHashMap.put("accept_card", "true");
        requestHashMap.put("amount", "30500");
        requestHashMap.put("success_link", "http://localhost:4200/success");
        requestHashMap.put("fail_link", "http://localhost:4200");
        requestHashMap.put("session_timeout_secs", 1200);
        requestHashMap.put("developer_tracking_id", developerTrackingId);

        // Convert the HashMap to JSON using ObjectMapper
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(requestHashMap);

        // Creating the request body with the JSON
        RequestBody body = RequestBody.create(mediaType, json);

        // Creating the POST request with the Flouci API URL, request body, and appropriate headers
        Request request = new Request.Builder().url("https://developers.flouci.com/api/generate_payment").method("POST", body).addHeader("Content-Type", "application/json").build();

        // Executing the request
        Response response = client.newCall(request).execute();

        // Handling the response
        try (response) {
            // Checking for successful response
            if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);

            // Processing the JSON response
            String responseBody = response.body().string();
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(responseBody);

            // Constructing the ResponsePayment object from JSON response data
            ResponsePayment responsePayment = ResponsePayment.builder().payment_id(jsonNode.path("result").path("payment_id").asText()) // Payment ID
                    .link(jsonNode.path("result").path("link").asText()) // Payment link
                    .build();

            // Returning the ResponsePayment object
            return responsePayment;
        }
    }
}
