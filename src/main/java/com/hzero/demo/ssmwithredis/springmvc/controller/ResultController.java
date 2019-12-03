package com.hzero.demo.ssmwithredis.springmvc.controller;

import com.hzero.demo.ssmwithredis.springmvc.pojo.User;
import com.hzero.demo.ssmwithredis.springmvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

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
    public String addUser(String username, String password) {

        return "ERROR";
    }



}
