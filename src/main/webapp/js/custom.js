$(function () {
    $.ajax({
        type: "GET",
        url: "/userlog/getChart",
        dataType: "json",
        success: function (data) {
            SpendingChart.getChart(data.ChartList);
            SexCompareChart.getChart(data.Chart1List);
            AgeCompareChart.getChart(data.Chart2List);
            TradingvolumeChart.getChart(data.Chart3List);
            ProvinceChart.getChart(data.Chart4List);
        }
    });

});

// 消费行为对比
var SpendingChart = {
    getChart: function (data) {
        //基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        option = {
            title: {
                text: '所有买家消费行为比例图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['特别关注', '购买', '添加购物车', '点击']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{value: data[0].num, name: '特别关注'},
                        {value: data[1].num, name: '购买'},
                        {value: data[2].num, name: '添加购物车'},
                        {value: data[3].num, name: '点击'},
                    ],
                }
            ]
        };


// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}

// 男女对比
var SexCompareChart = {
    getChart: function (data) {
        //基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'));
        // 指定图表的配置项和数据
        option = {
            title: {
                text: '所有买家消费行为比例图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['女性', '男性', '未知']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: data[0].num, name: '女性'},
                        {value: data[1].num, name: '男性'},
                        {value: data[2].num, name: '未知'},
                    ],
                }
            ]
        };


// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

}

//年龄对比
var AgeCompareChart = {

    getChart: function (dataSource) {

        var myChart = echarts.init(document.getElementById('main2'));
        // 指定图表的配置项和数据
        var data = [];
        data[0] = [];
        data[1] = [];
        var len = dataSource.length;
        for (var i = 0; i < len; i++) {
            var obj = dataSource[i];
            if (obj.gender == "0") {
                data[0].push([obj.age_range, obj.num]);
            }
            else if (obj.gender == "1") {
                data[1].push([obj.age_range, obj.num]);
            }
        }

        option = {
            title: {
                text: '男女买家各个年龄段交易对比',
            },
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                formatter: function (params) {


                },
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    }
                }
            },
            legend: {
                data: ['女性', '男性']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataZoom: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        formatter: '{value} cm'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        formatter: '{value} kg'
                    }
                }
            ],
            series: [
                {
                    name: '女性',
                    type: 'scatter',
                    data: data[0],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '男性',
                    type: 'scatter',
                    data: data[1],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };


// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    }

}

//交易额对比
var TradingvolumeChart = {
    getChart: function (dataSource) {
        var myChart = echarts.init(document.getElementById('main3'));
        // 指定图表的配置项和数据
        var x = []
        var y = []

        var len = dataSource.length;
        for (var i = 0; i < len; i++) {
            x.push(dataSource[i].cat_id);
            y.push(dataSource[i].num);
        }
        option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: x,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Value',
                    type: 'bar',
                    barWidth: '60%',
                    data: y
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    }

}

//省份对比
var ProvinceChart = {
    getChart: function (dataSource) {
        var myChart = echarts.init(document.getElementById('main4'));

        var data = [];
        for (var i = 0; i < dataSource.length; i++) {
            var tmp = {};
            tmp.name = dataSource[i].province;
            tmp.value = dataSource[i].num;
            data.push(tmp);
        }

        option = {
            title: {
                text: "不同地区购物情况",
                x: 'center'
            },
            tooltip: { //tooltip提示框，鼠标悬浮交互时的信息提示
                trigger: 'item' //触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
            },
            legend: { //legend图例
                orient: 'vertical', //布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'
                x: 'left',
                data: ['购买量'] //图例内容数组
            },
            dataRange: { //dataRange值域选择
                min: 0, //指定的最小值，eg: 0，默认无，必须参数，唯有指定了splitList时可缺省min。
                max: 2500,
                x: 'left', //水平安放位置，默认为全图左对齐，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                y: 'bottom', //垂直安放位置，默认为全图底部，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true //是否启用值域漫游，启用后无视splitNumber和splitList，值域显示为线性渐变
            },
            toolbox: { //toolbox
                show: true,
                orient: 'vertical', //布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'
                x: 'right',
                y: 'center',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            roamController: { //缩放漫游组件
                show: true,
                x: 'right',
                mapTypeControl: { //必须，指定漫游组件可控地图类型，如：{ china: true }
                    'china': true
                }
            },
            //series : eval("[" + dataStr + "]")
            series: [ //通用,驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据，其中个别选项仅在部分图表类型中有效
                {
                    name: '购买量',
                    type: 'map',
                    mapType: 'china',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    },
                    data: data
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);


    }
}
