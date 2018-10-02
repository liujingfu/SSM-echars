package com.hive.controllers;

import com.hive.entities.User;
import com.hive.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user/")
public class UserController {

    @Autowired
    private UserService userSerivce;

    @RequestMapping(value = "index")
    @ResponseBody
    private String index() {
        return "index";
    }

    @RequestMapping(value = "register")
    @ResponseBody
    private void register() {
        User user = new User();
        user.setUserId(1);
        user.setUserName("test");
        user.setUserPassword("test");
        user.setUserEmail("test");
        user.setUserPhone("test");
        user.setUserPhoto("test");
        userSerivce.addUser(user);
    }
}
