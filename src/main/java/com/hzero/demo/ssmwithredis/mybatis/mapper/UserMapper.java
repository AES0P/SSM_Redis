package com.hzero.demo.ssmwithredis.mybatis.mapper;

import com.hzero.demo.ssmwithredis.springmvc.pojo.User;
import org.apache.ibatis.annotations.*;
import org.mybatis.spring.annotation.MapperScan;

import java.util.List;

/**
 * 这里实现通过mybatis能进行的操作
 */
@MapperScan(value = "userMapper")
public interface UserMapper {

    @Insert("insert into ssm_user( name, password, sexy, role, comments)" +
            "values( #{user.name}, #{user.password}, #{user.sexy} , #{user.role} , #{user.comments})")
    @Options(keyProperty = "user.id", useGeneratedKeys = true)
    int insertUser(@Param("user") User user);

    @Delete("delete from ssm_user WHERE id = #{id}")
    int deleteUserById(@Param("id") int id);

    @Delete("delete from ssm_user WHERE name = #{name}")
    int deleteUserByName(@Param("name") String name);

    @Update("update ssm_user set " +
            "name=#{user.name}, password=#{user.password}, sexy=#{user.sexy} , role=#{user.role}, comments=#{user.comments}" +
            "where id=#{user.id}")
    int updateUser(@Param("user") User user);

    @Select("SELECT * FROM ssm_user WHERE id = #{id}")
    User findUserById(@Param("id") int id);

    @Select("SELECT * FROM ssm_user WHERE name = #{name}")
    User findUserByName(@Param("name") String name);

    @Select("select * from ssm_user")
    List<User> findAllUser();

}
