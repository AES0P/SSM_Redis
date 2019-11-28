package com.hzero.demo.ssmwithredis.springmvc.pojo;


public class User {

    private int id;

    private String userName;

    private String password;

    private String roleName;

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}





