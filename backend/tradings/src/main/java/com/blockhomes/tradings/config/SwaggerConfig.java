package com.blockhomes.tradings.config;

import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.servers.Servers;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Servers(value = {
    @Server(url = "https://block-homes.kr", description = "블록홈즈 배포 서버"),

})
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
            .components(new Components())
            .info(apiInfo());
    }

    private Info apiInfo() {
        return new Info()
            .title("Block Homes Tradings Server")
            .description("블록홈즈 매물 등록 및 거래 백엔드 서버입니다.")
            .version("1.0.0");
    }

}
