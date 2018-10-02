package com.hive.services;

import com.hive.entities.*;

import java.util.List;

public interface UserLogService {
    List<UserLog> selectTop10();

    List<Chart> getChart();

    List<Chart1> getChart1();

    List<Chart2> getChart2();

    List<Chart3> getChart3();

    List<Chart4> getChart4();

}
