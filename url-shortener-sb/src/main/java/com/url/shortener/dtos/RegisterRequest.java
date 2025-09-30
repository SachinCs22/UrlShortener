package com.url.shortener.dtos;

public class RegisterRequest {
    private String username;
    private String password;
    private String email;

    // Add getters and setters if not using Lombok
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }


    // same for password, email...
}
