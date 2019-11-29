package com.hzero.demo.ssmwithredis.springmvc.service.impl;

import com.hzero.demo.ssmwithredis.redis.utils.RedisUtils;
import com.hzero.demo.ssmwithredis.springmvc.dao.impl.UserDaoImpl;
import com.hzero.demo.ssmwithredis.springmvc.pojo.User;
import com.hzero.demo.ssmwithredis.springmvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Resource(name = "userDao")
    private UserDaoImpl userDao;

    @Autowired
    private RedisUtils redisUtils;//封装了一系列redis相关的功能

    @Override
    public int insertUser(User user) {
        return userDao.insertUser(user);
    }

    @Override
    public int deleteUserById(int id) {
        return userDao.deleteUserById(id);
    }

    @Override
    public int updateUser(User user) {
        return userDao.updateUser(user);
    }

    @Override
    public User findUserById(int id) {
        return userDao.findUserById(id);
    }

    @Cacheable(value = "cache1")
    @Override
    public User findUserByName(String name) {
        return userDao.findUserByName(name);
    }

    @Override
    public List<User> findAllUser() {
        return userDao.findAllUser();
    }


}
