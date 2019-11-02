<template>
    <div>
            <div class="user_list">
        <div class="us_m">
            <div class="mcxg">
            <a href="javascript:void(0)">基本资料</a>
            </div>
            <div class="zx"></div>
        </div>
        <div class="us_m">
            <div class="mcxg">
                <a href="javascript:void(0)">修改密码</a>
            </div>
            <div class="zx"></div>
        </div>
        <div class="us_m">
            <div class="mcxg">
                <a href="javascript:void(0)">修改手机号码</a>
            </div>
            <div class="zx"></div>
        </div>

    </div>
    </div>
</template>

<style>


   .user_list {
            width: 100%;
            overflow: hidden;
            background: #FFF;
            margin-top: 10px;
        }

        .user_list .us_m {
            width: 100%;
            overflow: hidden;
            padding: 10px 0;
            position: relative;
        }

        .user_list .us_m:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 0;
            background: #eee;
            width: 100%;
            height: 1px;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
        }

        .user_list .us_m:last-child:before {
            background: #fff;
        }

        .user_list .us_m .mcxg {
            width: 120px;
            line-height: 25px;
            float: left;
            margin-left: 2.5%
        }

        .user_list .us_m .zx {
            width: 7px;
            height: 7px;
            border-top: 2px solid #969696;
            border-left: 2px solid #969696;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
            overflow: hidden;
            float: right;
            margin-right: 2.5%;
            margin-top: 7px;
            margin-left: 2.5%;
        }


</style>