<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      class="drawer"
      absolute
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
         <router-link :to="item.link" tag='span' class="link">
           <v-list-tile-action>
             <v-badge color="red" overlap>
               <span slot="badge" v-if="item.badge">{{ item.badge }}</span>
               <v-icon v-html="item.icon"></v-icon>
             </v-badge>
               <p>{{ item.name }}</p>
             <div class="drawer-divider"></div>
           </v-list-tile-action>
         </router-link>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" class="toolbar">
      <img src="../public/logo.svg" alt="logo" class="logo">
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        miniVariant: true,
        right: null,
        rightDrawer: false,
        title: 'Logo',
      };
    },
    computed: {
      userIsAuthenticated() {
        const user = this.$store.getters.user;
        return user !== null && user !== undefined;
      },
      items() {
        if (this.userIsAuthenticated) {
          return [{
            name: 'Home',
            icon: 'home',
            link: '/',
          },
          {
            name: 'New Task',
            icon: 'note_add',
            link: '/new',
          },
          {
            name: 'Option 1',
            icon: 'sync',
            link: 'option1',
            badge: 3,
          },
          {
            name: 'Option 2',
            icon: 'timeline',
            link: 'option2',
          },
          ];
        }
        return [
            { icon: 'face', name: 'Sign up', link: '/signup' },
            { icon: 'lock_open', name: 'Sign in', link: '/signin' },
        ];
      },
    },
  };

</script>

<style>

  .toolbar {
    background-color: #ffffff !important;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    height: 80px;
  }

  .logo {
    width: 46px;
    height: 48px;
    object-fit: contain;
    margin: 25px 0 17px 38px;
  }
  .drawer {
    width: 110px;
    height: 716px !important;
    top: 80px;
    padding-top: 50px;
    background-image: linear-gradient(to bottom, #00d6fd, #00acfa);
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .drawer .list {
    background: transparent;
    height: 100%;
  }

  .drawer .link {
    cursor: pointer;
  }

  .drawer .list .list__tile {
    width: 40px;
    height: 50px;
    margin-bottom: 90px;
    color: #fff;
  }

  .drawer .list .list__tile .link{
    opacity: 0.53;
    margin: 0 auto;
  }

  .drawer .list .list__tile .link.router-link-exact-active {
    opacity:1 ;
  }

  .drawer .list .list__tile .icon {
    font-size: 3.3em;
    display: block;
  }

  .drawer .list .list__tile .list__tile__action{
    align-items: flex-start;
  }

  .drawer .list .list__tile p {
    margin: 0px auto;
    font-family: OpenSans;
    font-size: 14px;
    letter-spacing: -0.3px;
  }



  .drawer .list .list__tile .drawer-divider {
    margin: 40px auto 0 auto;
    width: 46px;
    height: 0.3px;
    background-color: #fff;
    border: 0.3px solid #fff;
    opacity: .53;
  }

</style>
