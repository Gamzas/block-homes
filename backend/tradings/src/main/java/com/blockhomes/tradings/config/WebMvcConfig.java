package com.blockhomes.tradings.config;

import com.amazonaws.HttpMethod;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedHeaders("*")
            .allowedMethods(
                HttpMethod.GET.name(),
                HttpMethod.POST.name(),
                HttpMethod.PUT.name(),
                HttpMethod.DELETE.name(),
                HttpMethod.PATCH.name(),
                HttpMethod.HEAD.name(),
                "OPTIONS"
            )
            .allowedOrigins("http://localhost:5173", "http://localhost:3000", "http://localhost:8081", "https://block-homes.kr", "https://k10c203.p.ssafy.io");
    }

}
