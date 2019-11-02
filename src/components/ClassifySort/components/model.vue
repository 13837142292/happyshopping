<template>
  <div v-if="isShow" class="model">
    <div class="box">
      <div class="send">
        <p>配送与售后</p>
        <div>
          <span class="huo" @click="onlysee" :class="{active:isshow}">
            <img src="../images/sy_ico.png" alt :class="{show:isshow}" />只看有货
          </span>
        </div>
      </div>
      <div class="price">
        <p>价格区间</p>
        <div>
          <input type="text" placeholder="最低价" ref="min" />
          <i></i>
          <input type="text" placeholder="最高价" ref="max" />
        </div>
      </div>
      <div class="btn">
        <span class="rconfig" @click="rselect">重置</span>
        <span class="sure" @click="hide" ref="sure">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: false,
      isShow: false,
      min: null,
      max: null,
      title: "",
      click: false,
      huo:null
    };
  },
  methods: {
    onlysee() {
      this.isshow = !this.isshow;
    },
    rselect() {
      this.$refs.min.value = null;
      this.$refs.max.value = null;
    },
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
      this.min = this.$refs.min.value;
      this.max = this.$refs.max.value;
      if(this.isshow){
         this.huo=1;
      }else{
        this.huo=0;
      }
      this.title = this.min + this.max+this.huo;
      this.$emit("more", this.title);
    }
  }
};
</script>
<style lang="less" scoped>
.model {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
}
.box {
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  font-size: 13px;
  .send {
    padding-left: 4%;
    margin-bottom: 15px;
    width: 100px;
    // border-top: 0.03px solid #ddd9d9;
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
      width: 65px;
      text-align: center;
      color: #5a5a5a;
      background-color: #f3f5f6;
      border-radius: 5px;
      padding: 0 10px;
      img {
        width: 10px;
        vertical-align: middle;
        margin-right: 3px;
        display:none;
      }
    }
  }

  .price {
    padding-left: 4%;
    margin-bottom: 60px;
    i {
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
      outline: none;
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
.active {
  color: #c4193f !important;
  background-color: #fff !important;
  border: 1px solid #c4193f !important;
}
.show{
  display: inline-block !important;
}
</style>