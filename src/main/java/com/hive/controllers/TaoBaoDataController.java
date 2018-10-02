package com.hive.controllers;

import com.hive.entities.Chart;
import com.hive.entities.ModelViews;
import com.hive.entities.UserLog;
import com.hive.services.UserLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/userlog/")
public class TaoBaoDataController {
    @Autowired
    private UserLogService userLogService;

    @RequestMapping(value = "index")
    @ResponseBody
    private ModelAndView index() {
        ModelAndView mv = new ModelAndView("userLog");
        return mv;
    }

    @RequestMapping(value = "getChart")
    @ResponseBody
    private ModelViews getChart() {
        ModelViews modelViews = new ModelViews();
        modelViews.ChartList = userLogService.getChart();
        modelViews.Chart1List = userLogService.getChart1();
        modelViews.Chart2List = userLogService.getChart2();
        modelViews.Chart3List = userLogService.getChart3();
        modelViews.Chart4List = userLogService.getChart4();
        return modelViews;
    }
}
