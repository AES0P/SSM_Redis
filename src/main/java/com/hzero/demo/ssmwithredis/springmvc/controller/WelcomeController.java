package com.hzero.demo.ssmwithredis.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 6、一旦选择了合适的控制器， DispatcherServlet 会将请求发送给选中的控制器
 * 到了控制器，请求会卸下其负载（用户提交的请求）等待控制器处理完这些信息
 */
@Controller
public class WelcomeController {

    @RequestMapping("/login")
    public String goLogin() {
        return "login";
    }

}
