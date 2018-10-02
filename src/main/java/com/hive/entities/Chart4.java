package com.hive.entities;

import lombok.Data;

@Data
public class Chart4 {
    private String province;
    private String num;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }
}
