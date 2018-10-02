package com.hive.entities;

import lombok.Data;

@Data
public class Chart3 {
    private String cat_id;
    private String num;

    public String getCat_id() {
        return cat_id;
    }

    public void setCat_id(String cat_id) {
        this.cat_id = cat_id;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }
}
