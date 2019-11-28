package com.hzero.demo.ssmwithredis.springmvc.dao.impl;

import com.hzero.demo.ssmwithredis.springmvc.dao.UserDao;
import com.hzero.demo.ssmwithredis.mybatis.mapper.UserMapper;
import com.hzero.demo.ssmwithredis.springmvc.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value = "userDao")
public class UserDaoImpl implements UserDao {

    //通过MapperFactoryBean操作
//    @Resource(name = "userMapper")
    @Autowired
    //不知道为什么，使用自动扫描后，这里指定Resource或者Autowired idea都会报错：找不到对应bean，但运行时不会抛出异常
    private UserMapper userMapper;

    public int insertUser(User user) {
        return userMapper.insertUser(user);
    }

    @Override
    public int deleteUserById(int id) {
        return userMapper.deleteUserById(id);
    }

    @Override
    public int updateUser(User user) {
        return userMapper.updateUser(user);
    }

    public User findUserById(int id) {
        return userMapper.findUserById(id);
    }

    @Override
    public User findUserByName(String name) {
        return userMapper.findUserByName(name);
    }

    @Override
    public List<User> findAllUser() {
        return userMapper.findAllUser();
    }


}
