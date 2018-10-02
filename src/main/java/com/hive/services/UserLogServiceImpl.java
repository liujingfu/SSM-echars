package com.hive.services;


import com.hive.dao.UserLogMapper;
import com.hive.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserLogServiceImpl implements UserLogService {

    @Autowired
    private UserLogMapper userLogMapper;

    @Override
    public List<UserLog> selectTop10() {
        return userLogMapper.selectTop10();
    }

    @Override
    public List<Chart> getChart() {
        return userLogMapper.getChart();
    }

    @Override
    public List<Chart1> getChart1() {
        return userLogMapper.getChart1();
    }

    @Override
    public List<Chart2> getChart2() {
        return userLogMapper.getChart2();
    }

    @Override
    public List<Chart3> getChart3() {
        return userLogMapper.getChart3();
    }

    @Override
    public List<Chart4> getChart4() {
        return userLogMapper.getChart4();
    }
}
