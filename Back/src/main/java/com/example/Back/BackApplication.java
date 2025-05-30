package com.example.Back;

import com.example.Back.Admin.AdminRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@SpringBootApplication
@RequiredArgsConstructor
@EnableAsync
public class BackApplication {
	private final AdminRepo adminRepo;

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}


}
