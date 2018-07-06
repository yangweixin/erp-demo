<template>
    <el-container>
        <el-aside width="200px">
            <NavMenu/>
        </el-aside>
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<style>
    body{
    }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0 !important;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu{
      border-right: 0px !important;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  
</style>

<script>
// @ is an alias to /src
import NavMenu from "@/components/NavMenu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    name: "home",
    components: {
        Header,
        NavMenu,
        Footer
    },
    data() {
        return {};
    },
    methods: {
        goDetails() {
        console.log("jump to user details");
        this.$router.push({
            path: "/user/details/12",
            params: {
            userId: this.$route.params.id
            }
        });
        }
    }
};
</script>
