<template>
    <div>
        


 
   <!-- 我的收藏 -->
    <div class="u-title u-bline">
        <p>我的收藏</p>
        <a class="return" href="javascript:history.go(-1);"><img src="../img/left.png"></a>
       
    </div>
   
   
   
   
   
    <!--没有收藏-->
     <div class="no-data">
        <img src="../img/dog.png">
        <p>还没有收藏哦~</p>
    </div>









    </div>
</template>

<style>
  .u-title {
            width: 100%;
            height: 60px;
            line-height: 40px;
            overflow: hidden;
            background: #fafafa;
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            border-bottom: 1px solid #c8c8c8;
            z-index: 90;
        }
        

      
        .no-data {
            width: 40%;
            margin-left: 30%;
            text-align: center;
            margin-top: 35%;
        }

        .no-data p {
            color: #787878;
            margin-top: 15px;
        }
        .return {
            width: 10px;
            height: 10px;
            position: absolute;
            left: 0;
            top: 5px;
        }



</style>