package com.hzero.demo.ssmwithredis.springmvc.service.impl;

import com.hzero.demo.ssmwithredis.springmvc.dao.impl.UserDaoImpl;
import com.hzero.demo.ssmwithredis.springmvc.pojo.User;
import com.hzero.demo.ssmwithredis.springmvc.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    //    @Autowired
    @Resource(name = "userDao")
    private UserDaoImpl userDao;

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

    @Override
    public User findUserByName(String name) {
        return userDao.findUserByName(name);
    }

    @Override
    public List<User> findAllUser() {
        return userDao.findAllUser();
    }


}
