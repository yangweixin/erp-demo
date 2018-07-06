<template>
  <div class="home">
    <NavMenu></NavMenu>
    <img src="../assets/logo.png">
    <router-link to="/about">About</router-link> | 
    <button class='js-jump' @click="goDetails">User</button> 
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import NavMenu from '@/components/NavMenu'

export default {
  name: 'home',
  components: {
    HelloWorld,
    NavMenu
  },
  data() {
      return {
          
      }
  },
  methods: {
      goDetails() {
          console.log('jump to user details')
          this.$router.push({
              path: '/user/details/12',
              params: {
                  userId: this.$route.params.id        
              }
          })
      }
  }
}
</script>
