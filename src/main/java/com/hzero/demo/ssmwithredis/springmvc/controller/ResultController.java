package com.hzero.demo.ssmwithredis.springmvc.controller;

import com.hzero.demo.ssmwithredis.springmvc.pojo.User;
import com.hzero.demo.ssmwithredis.springmvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * 6、一旦选择了合适的控制器， DispatcherServlet 会将请求发送给选中的控制器
 * 到了控制器，请求会卸下其负载（用户提交的请求）等待控制器处理完这些信息
 */
@Controller
@RequestMapping("/result")
public class ResultController {

    @Autowired
    private User user;

    @Resource(name = "userService")
    private UserService userService;


    @RequestMapping("/addUser")
    @ResponseBody
    public String addUser(@RequestBody User user) {

        //往数据库里写入账号均转换为大写字母防止重名
        String upperName = user.getName().toUpperCase();

        if (userService.findUserByName(upperName) != null) {
            return "Can not repeat add user!";
        }

        user.setName(upperName);
        userService.insertUser(user);

        if (userService.findUserById(user.getId()) != null) {
            return "OK";
        }

        return "Add failed!";
    }

    @RequestMapping("/deleteUserByName")
    @ResponseBody
    public String deleteUserByName(String name) {

        User user = userService.findUserByName(name.toUpperCase());

        if (user == null) {
            return "Can not delete user:" + name + ", no data found!";
        }

        userService.deleteUserByName(user.getName());

        if (userService.findUserByName(name) == null) {
            return "OK";
        }

        return "Delete failed!";
    }

    @RequestMapping("/updateUser")
    @ResponseBody
    public String updateUser(@RequestBody User user) {

        //往数据库里写入账号均转换为大写字母防止重名
        String upperName = user.getName().toUpperCase();
        int id = 0;

        if ((id = userService.findUserByName(upperName).getId()) <= 0) {
            return "Can not update user:" + user.getName() + ", no data found!";
        }

        try {
            user.setId(id);
            user.setName(upperName);
            userService.updateUser(user);
            return "OK";
        } catch (Exception e) {
            e.printStackTrace();
            return "Update failed!";
        }

    }


    @RequestMapping("/findAll")
    @ResponseBody
    public List<User> findAllUsers() {
        return userService.findAllUser();
    }


}
