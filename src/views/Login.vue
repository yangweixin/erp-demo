<template>
    <div id="loginBlock">
        <div class="background">

        </div>
        <div class="content">
            <div class="logoBlock">
                Young
            </div>
            <div id="inputBlock">
                <el-input placeholder="请输入内容" v-model="account">
                    <template slot="prepend">账号</template>
                </el-input>
                <el-input placeholder="请输入内容" v-model="password" type="password">
                    <template slot="prepend">密码</template>
                </el-input>
                <el-button type="primary" @click="doLogin">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        account: "",
        password: "",
    };
  },
  methods: {
      doLogin: function(){
          console.log(1)
      }
  }
};
</script>

<style lang="scss">
@import "@/style/login.scss";
</style>


