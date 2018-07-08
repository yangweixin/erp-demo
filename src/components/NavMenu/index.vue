<template>
  <div>
    <div style="margin-left: 10px">
      <el-button icon="el-icon-tickets" color="#2a4e8a" size="mini" @click="expendNav">
      </el-button>
    </div>

    <el-menu default-active="2" class="el-menu-vertical-demo" @select="openMenu" :collapse="isCollapse" background-color="#2a4e8a" text-color="#fff" active-text-color="#ffd04b">
      <TreeMenu v-for="item in menu" :data="item" :key="item.index" />
    </el-menu>
    <el-tooltip class="item" effect="dark" placement="right-start">
      <template slot="content">
        Young技术支持<br>电话：12345678901 <br>邮箱：1234567@qq.com
      </template>
      <i class="iconfont icon-tishishuoming author-info"/>
    </el-tooltip>
    
  </div>

</template>




<script>
import * as types from "@/store/mutation-types";
import TreeMenu from "@/components/TreeMenu";

export default {
  name: "NavMenu",
  components: {
    TreeMenu
  },
  data() {
    return {
      menu: [
        {
          index: "1",
          title: "导航1",
          icon: "iconfont icon-wodedamaijihuo",
          children: [
            {
              index: "1-1",
              title: "导航1-1",
              icon: "el-icon-location",
              route: "/user/details/2"
            },
            {
              index: "1-2",
              title: "导航1-2",
              icon: "el-icon-location",
              children: [
                {
                  index: "1-2-1",
                  title: "导航1-2-1",
                  icon: "el-icon-location",
                  children: [
                    {
                      index: "1-2-1-1",
                      title: "导航1-2-1-1",
                      icon: "el-icon-location",
                      children: [
                        {
                          index: "1-2-1-1-1",
                          title: "导航1-2-1-1-1",
                          icon: "el-icon-location",
                          children: [
                            {
                              index: "1-2-1-1-1-1",
                              title: "导航1-2-1-1-1-1",
                              icon: "el-icon-location",
                              children: [
                                {
                                  index: "1-2-1-1-1-1-1",
                                  title: "导航1-2-1-1-1-1-1",
                                  icon: "el-icon-location",
                                  children: [
                                    {
                                      index: "1-2-1-1-1-1-1-1",
                                      title: "导航1-2-1-1-1-1-1-1",
                                      icon: "el-icon-location"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              index: "1-3",
              title: "导航1-3",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "2",
          title: "导航2",
          icon: "el-icon-location",
          children: [
            {
              index: "2-1",
              title: "导航2-1",
              icon: "el-icon-location",
              route: "/about"
            }
          ]
        }
      ],
      isCollapse: true,
      collapseText: "展开",
      menuMap: new Map()
    };
  },
  created: function() {
    this.getMenuMap(this.menu);
  },
  watch: {
    isCollapse: function(val) {
      if (val) {
        this.collapseText = "展开";
        document
          .getElementsByClassName("el-aside")[0]
          .setAttribute("style", "width: auto !important");
      } else {
        this.collapseText = "收起";
        document
          .getElementsByClassName("el-aside")[0]
          .setAttribute("style", "width: 200px !important");
      }
    }
  },
  methods: {
    expendNav() {
      this.isCollapse = !this.isCollapse;
    },
    getMenuMap(items) {
      items.forEach(item => {
        if (item.children) {
          this.getMenuMap(item.children);
        } else {
          this.menuMap.set(item.index, item);
        }
      });
    },
    openMenu(index, path) {
      let menu = this.menuMap.get(index);
      this.$store.commit(types.ADD_TAB, {
        title: menu.title,
        name: menu.title,
        route: menu.route
      });

      console.log(this.$store)
    }
  }
};
</script>

<style lang="scss" >
  @import "index"
</style>

