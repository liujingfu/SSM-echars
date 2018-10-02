package com.hive.services;

import com.hive.dao.UserMapper;
import com.hive.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    public Integer addUser(User user) {
        return userMapper.insert(user);
    }
}
