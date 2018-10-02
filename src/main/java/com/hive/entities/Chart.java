package com.hive.entities;

import lombok.Data;

@Data
public class Chart {
    private String action;
    private String num;

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }
}
