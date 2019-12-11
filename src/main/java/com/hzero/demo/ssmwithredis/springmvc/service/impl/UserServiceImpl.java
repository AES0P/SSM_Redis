package com.hzero.demo.ssmwithredis.springmvc.service.impl;

import com.hzero.demo.ssmwithredis.springmvc.dao.impl.UserDaoImpl;
import com.hzero.demo.ssmwithredis.springmvc.pojo.User;
import com.hzero.demo.ssmwithredis.springmvc.service.UserService;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Cacheable 方法执行前先看缓存中是否有数据，如果有直接返回。如果没有就调用方法，并将方法返回值放入缓存
 * @CachePut 无论怎样都会执行方法，并将方法返回值放入缓存
 * @CacheEvict 将数据从缓存中删除
 * @Caching 可通过此注解组合多个注解策略在一个方法上面
 */
@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Resource(name = "userDao")
    private UserDaoImpl userDao;

//    @Autowired
//    private RedisUtils redisUtils;//封装了一系列redis相关的功能

    /**
     * 创建用户，同时使用新的返回值的替换缓存中的值
     * 创建用户后会将allUsersCache缓存全部清空
     */
    @Caching(put = {@CachePut(value = "userCache", key = "#user.id")},
            evict = {@CacheEvict(value = "allUsersCache", allEntries = true)})
    @Override
    public int insertUser(User user) {
        return userDao.insertUser(user);
    }

    /**
     * 对符合key条件的记录从缓存中移除
     * 删除用户后会将allUsersCache缓存全部清空
     */
    @Caching(
            evict = {
                    @CacheEvict(value = "userCache", key = "#id"),
                    @CacheEvict(value = "allUsersCache", allEntries = true)
            }
    )
    @Override
    public int deleteUserById(int id) {
        return userDao.deleteUserById(id);
    }

    /**
     * 对符合key条件的记录从缓存中移除
     * 删除用户后会将allUsersCache缓存全部清空
     */
    @Caching(
            evict = {
                    @CacheEvict(value = "userCache", key = "#name"),
                    @CacheEvict(value = "allUsersCache", allEntries = true)
            }
    )
    @Override
    public int deleteUserByName(String name) {
        return userDao.deleteUserByName(name);
    }

    /**
     * 更新用户，同时使用新的返回值的替换缓存中的值
     * 更新用户后会将allUsersCache缓存全部清空
     */
    @Caching(
            put = {@CachePut(value = "userCache", key = "#user.id")},
            evict = {@CacheEvict(value = "allUsersCache", allEntries = true)}
    )
    @Override
    public int updateUser(User user) {
        return userDao.updateUser(user);
    }

    /**
     * value 设置缓存的值
     * key：指定缓存的key，这是指参数id值。key可以使用spEl表达式
     * unless：存缓存的前提
     *
     * @param id user id
     * @return user
     */
    @Cacheable(value = "userCache", key = "#id", unless = "#result == null")
    @Override
    public User findUserById(int id) {
        return userDao.findUserById(id);
    }

    @Cacheable(value = "userCache", key = "#name", unless = "#result == null")
    @Override
    public User findUserByName(String name) {
        return userDao.findUserByName(name);
    }

    @Cacheable(value = "allUsersCache", unless = "#result.size() == 0")
    @Override
    public List<User> findAllUser() {
        return userDao.findAllUser();
    }

}
