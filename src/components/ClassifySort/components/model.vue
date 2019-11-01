<template>
  <div v-if="isShow" class="model">
    <div class="box">
      <div class="send">
        <p>配送与售后</p>
        <div>
          <span class="huo">只看有货</span>
        </div>
      </div>
      <div class="price">
        <p>价格区间</p>
        <div>
          <input type="text" placeholder="最低价" />
          <i></i>
          <input type="text" placeholder="最高价" />
        </div>
      </div>
      <div class="btn">
        <span class="rconfig">重置</span>
        <span class="sure" @click="hide" ref="sure">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    //   this.$refs.sure.style.border="";
    }
  }
};
</script>
<style lang="less" scoped>
.model {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 8;
}
.box {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 11;
  font-size: 13px;
  .send {
    padding-left: 4%;
    margin-bottom: 15px;
    p {
      color: #313131;
      padding-top: 20px;
      padding-bottom: 3px;
    }
    span.huo {
      position: relative;
      display: block;
      margin-top: 5px;
      line-height: 35px;
      width: 60px;
      text-align: center;
      color: #5a5a5a;
      background-color: #f3f5f6;
      border-radius: 5px;
      padding: 0 10px;
    }
  }

  .price {
    padding-left: 4%;
    margin-bottom: 60px;
    i{
    display: inline-block;
    width: 8px;
    margin: 0 10px;
    border-bottom: 1px solid #5a5a5a;
    }
    p {
      color: #313131;
      padding-top: 20px;
      padding-bottom: 3px;
    }
    input {
      background-color: #f3f5f6;
      color: #5a5a5a;
      font-size: 13px;
      border-radius: 5px;
      width: 100px;
      height: 35px;
      text-align: center;
    }
  }
  .btn {
    width: 100%;
    height: 45px;
    display: flex;
    span {
      display: block;
      width: 50%;
      line-height: 45px;
      color: #787878;
      font-size: 15px;
      text-align: center;
    }
    span.rconfig {
      border-top: 0.02px solid #ddd9d9;
    }
    span.sure {
      color: #fff;
      background-color: #c4193f;
    }
  }
}
</style>