<%--
  Created by IntelliJ IDEA.
  User: zhuchengxi
  Date: 2018/10/2
  Time: 14:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="/css/style.css" type='text/css' rel="stylesheet"/>
    <script type="text/javascript" src='/js/jquery.js'></script>
    <script type="text/javascript" src='/js/echarts.min.js'></script>
    <script type="text/javascript" src='/js/custom.js'></script>
</head>
<body>
<div class="container">
    <div>
        <div class="title">所有买家各消费行为对比</div>
        <div class="show">
            <div class='chart-type'>饼图</div>
            <div id="main" style="height:400px"></div>
        </div>
    </div>
    <div>
        <div class="title">男女买家交易对比</div>
        <div class="show">
            <div class='chart-type'>饼图</div>
            <div id="main1" style="height:400px"></div>
        </div>
    </div>
    <div>
        <div class="title">男女买家各个年龄段交易对比</div>
        <div class="show">
            <div class='chart-type'>散点图</div>
            <div id="main2" style="height:400px"></div>
        </div>
    </div>

    <div>
        <div class="title">商品类别交易额对比</div>
        <div class="show">
            <div class='chart-type'>饼图</div>
            <div id="main3" style="height:400px"></div>
        </div>
    </div>

    <div>
        <div class="title">各省份的总成交量对比</div>
        <div class="show">
            <div class='chart-type'>地图</div>
            <div id="main5" style="height:400px"></div>
        </div>
    </div>
</div>


</body>
</html>
