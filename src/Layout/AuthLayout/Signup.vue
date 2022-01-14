<template>
  <MDBCard>
    <div>
      <img
        src="../../assets/logo.png"
        alt="..."
        class="img"
      />
    </div>

    <MDBCardBody>
      <MDBCardTitle>Login</MDBCardTitle>
      <MDBInput label="Email" class="mb-3"/>
      <MDBInput label="Password" class="mb-3"/>
      <MDBInput label="Confirm Password" class="mb-3"/>
      <div class="d-flex justify-content-around">
        <MDBBtn color="info">Signup</MDBBtn>
        <MDBBtn color="primary">Login</MDBBtn>
      </div>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn } from 'mdb-vue-ui-kit';

  export default {
    name: "Signup",
    components: {
      MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn
    }
  }
</script>

<style scoped>
</style>