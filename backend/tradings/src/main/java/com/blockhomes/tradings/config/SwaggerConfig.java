package com.blockhomes.tradings.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
    servers = {
        @Server(url = "https://block-homes.kr", description = "블록홈즈 배포 서버"),
        @Server(url = "http://localhost:8081", description = "Localhost")
    },
    info = @Info(
        title = "블록홈즈 Tradings 서버",
        description = "블록홈즈 매물 등록 및 거래 백엔드 서버입니다.",
        version = "v1.0",
        contact = @Contact(name = "Gamzas", email = "gamzas.ssafy@gmail.com")
    )
)
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
            .group("controller")
            .pathsToMatch("/api/**")
            .build();
    }

}
