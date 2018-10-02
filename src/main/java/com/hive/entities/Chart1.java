package com.hive.entities;

import lombok.Data;

@Data
public class Chart1 {
    private String gender;
    private String num;

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }
}
