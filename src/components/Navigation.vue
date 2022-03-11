<template>
  <nav>
    <div class="left-side">
      <router-link to="/">
        <img src="planet-biru.png" alt="blibli-logo">
      </router-link>
    </div>
    <div class="right-side">
      <ul class="nav-list">
        <li class="nav-list__item">
          <router-link to="/donate">Aksi Nyata</router-link>
        </li>
        <li class="nav-list__item">
          <router-link to="/location">Lokasi</router-link>
        </li>
      </ul>|
      <div class="nav-profile">
        <router-link to="/profile"><i class="icon-user"></i>Erich Evander Da Costa</router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  nav {
    display: flex;
    padding: .8em 8em;
    align-items: center;
    justify-content: space-between;
    background-color: $blue;
    color: white;
    
    a {
      color: white;
      padding: 1em;
      text-decoration: none;
      &.router-link-exact-active {
        color: white;
      }
    }

    .left-side {
      img {
        width: 8em;
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      
      .nav-list {
        display: flex;
        list-style: none;
        .nav-list__item {
          padding: 1em 0;
        }
      }

      .nav-profile {
        margin-left: 2em;

        i {
          margin-right: 1em;
        }
      }
    }
  }
</style>