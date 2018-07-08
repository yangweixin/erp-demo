<template>
    <el-submenu :index="data.index">
        <template slot="title">
            <i :class="data.icon"></i>
            <span>{{ data.title }}</span>
        </template>
        <template v-for="child in data.children" >
            <el-menu-item v-if="!child.children" :index="child.index" :key="child.index">{{child.title}}</el-menu-item>
            <tree-menu v-else v-for="item in child.children" :data="item" :key="item.index"></tree-menu>
        </template>
    </el-submenu>
</template>

<script>
export default {
  name: "TreeMenu",
  props: {
      data: Object
  },
  created: function() {
    console.log(this.data);
  }
};
</script>

