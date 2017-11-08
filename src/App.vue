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
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
            <p>{{ item.name }}</p>
            <div class="drawer-divider"></div>
          </v-list-tile-action>
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
    <main>
      <v-content>
        <v-container fluid class="text-center">
          <v-layout>
            <v-btn round color="primary" dark>Rounded Button</v-btn>
            <v-btn round color="primary" dark>Rounded Button</v-btn>
            <v-spacer></v-spacer>
            <input type="text"/>
          </v-layout>
          <v-layout row wrap justify-center>
            <column v-for="column in displayedColumns" :key="column">
            </column>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import Column from './components/Column';

  export default {
    data() {
      return {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [{
          name: 'Home',
          icon: 'home',
        },
        {
          name: 'New Task',
          icon: 'note_add',

        },
        {
          name: 'Option 1',
          icon: 'sync',

        },
        {
          name: 'Option 2',
          icon: 'timeline',
        },
        ],
        miniVariant: true,
        right: null,
        rightDrawer: false,
        title: 'Logo',
        displayedColumns: [{},
          {},
          {}],
      };
    },
    components: {
      Column,
    },
  };

</script>

<style>
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

  .drawer .list .list__tile {
    width: 40px;
    height: 50px;
    margin-bottom: 90px;
    color: #fff;
  }

  .drawer .list .list__tile .icon {
    font-size: 3.3em;
    display: block;
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

</style>
