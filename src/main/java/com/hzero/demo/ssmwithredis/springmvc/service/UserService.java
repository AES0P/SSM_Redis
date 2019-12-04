package com.hzero.demo.ssmwithredis.springmvc.service;

import com.hzero.demo.ssmwithredis.springmvc.pojo.User;

import java.util.List;

public interface UserService {

    int insertUser(User user);

    int deleteUserById(int id);

    int deleteUserByName(String name);

    int updateUser(User user);

    User findUserById(int id);

    User findUserByName(String name);

    List<User> findAllUser();


}
