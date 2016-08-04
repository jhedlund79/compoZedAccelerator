package com.springBootConsul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Configuration
@EnableAutoConfiguration
@EnableDiscoveryClient
@RestController
public class SpringBootConsulApplication {

	@RequestMapping("/")
	public String home() {
		return "This is our Spring Cloud Consul Application";
	}

	@RequestMapping("/health")
	public String health() {
		return "ok" ;
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringBootConsulApplication.class, args);
	}

}