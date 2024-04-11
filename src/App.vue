<template>

  <NavBar />
  <div class="container is-widescreen">
  <div class="card has-background-black-ter">
  <div class="card-content">
    <div class="content">
      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
      id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
      consectetur purus sit amet fermentum.
    </div>
  </div>
  
</div>
<br/>
<div class="tabs is-toggle">
  <ul>
    <li class="is-active">
      <a>
       
        <span>Transactions</span>
      </a>
    </li>
    <li>
      <a>
     
        <span>Blocks</span>
      </a>
    </li>
  
  </ul>
</div>
</div>
  <FooterPage />
</template>

<script>

import NavBar from './components/NavBar.vue'
import FooterPage from './components/FooterPage.vue'

export default {

  name: 'App',
  components: {
    NavBar,
    FooterPage
  }
}
</script>

<style></style>
