<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <NavMenu/>
            </el-aside>
            <el-container>
                <el-main>
                    <el-tabs v-model="$store.state.currentTab" type="border-card" closable @tab-remove="removeTab">
                        <el-tab-pane v-for="(item) in $store.state.tabs" :key="item.name" :label="item.title" :name="item.name">
                            <iframe :src="item.route" />
                        </el-tab-pane>
                    </el-tabs>
                </el-main>
                <!-- <el-footer>
                    <Footer/>
                </el-footer> -->
            </el-container>
        </el-container>
    </el-container>
</template>



<script>
// @ is an alias to /src
import NavMenu from "@/components/NavMenu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import * as types from '@/store/mutation-types'

export default {
  name: "home",
  components: {
    Header,
    NavMenu,
    Footer
  },
  data() {
    return {

    };
  },
  created: function() {},
  computed: {
  },
  watch: {
    tabs: function(val) {
    }
  },
  methods: {
    removeTab(targetName) {
      this.$store.commit( types.DEL_TAB, targetName)
    }

    
  }
};
</script>

<style lang="scss">
 @import "..//style/home"
</style>