package com.hzero.demo.ssmwithredis.springmvc.pojo;


import java.io.Serializable;

public class User implements Serializable {

    private int id;

    private String name;

    private String password;

    private int sexy;

    private String role;

    private String comments;

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setSexy(int sexy) {
        this.sexy = sexy;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }

    public int getSexy() {
        return sexy;
    }

    public String getRole() {
        return role;
    }

    public String getComments() {
        return comments;
    }


}





