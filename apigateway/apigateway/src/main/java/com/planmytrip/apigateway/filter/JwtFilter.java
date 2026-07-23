package com.planmytrip.apigateway.filter;


import io.jsonwebtoken.*;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import reactor.core.publisher.Mono;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import java.security.Key;

@Component
public class JwtFilter implements GlobalFilter {

    private final String SECRET = "mysecretkeymysecretkeymysecretkey";
    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

//    @Override
//    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
//
//        String path = exchange.getRequest().getURI().getPath();
//
//        
////     // Allow login & register
////        if (path.contains("/api/users/login") || path.contains("/api/users/register")) {
////            return chain.filter(exchange);
////        }
//        // Allow login & register
//     // Allow public APIs (NO AUTH REQUIRED)
//        if (path.startsWith("/travel") || 
//            path.contains("/api/users/login") || 
//            path.contains("/api/users/register")) {
//            return chain.filter(exchange);
//        }
//
//        String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");
//
//        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//            throw new RuntimeException("Missing Authorization Header");
//        }
//
//        String token = authHeader.substring(7);
//
//        try {
//            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
//        } catch (Exception e) {
//            throw new RuntimeException("Invalid Token");
//        }
//
//        return chain.filter(exchange);
//    }
    
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        System.out.println("🔥 FILTER HIT");
        return chain.filter(exchange);
    }
}
