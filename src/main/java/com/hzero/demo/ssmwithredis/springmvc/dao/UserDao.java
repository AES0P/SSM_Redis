package com.hzero.demo.ssmwithredis.springmvc.dao;

import com.hzero.demo.ssmwithredis.springmvc.pojo.User;

import java.util.List;

public interface UserDao {

    int insertUser(User user);

    int deleteUserById(int id);

    int deleteUserByName(String name);

    int updateUser(User user);

    User findUserById(int userId);

    User findUserByName(String name);

    List<User> findAllUser();


}
