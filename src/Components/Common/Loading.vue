<template>
  <div class="loader" v-if="loading">
    <MDBSpinner grow color="info">
    </MDBSpinner>
    <span>Loading ...</span>
  </div>
</template>

<script>
// import MDB Components
import { MDBSpinner } from 'mdb-vue-ui-kit';

export default {
  name: 'Loading',
  components: {
    MDBSpinner
  },
  props: ['visible'],
  data() {
    return {
      loading: this.visible
    }
  },
  watch: {
    visible: function(value) {
      this.loading = value;
    }
  }
}
</script>

<style scoped>
  .loader {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loader span {
    color: white;
    font-size: 1.3rem;
  }
</style>