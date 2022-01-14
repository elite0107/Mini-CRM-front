<template>
  <div class="login_panel p-absolute p-center">
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
        <div class="d-flex justify-content-around">
          <MDBBtn color="info">Signup</MDBBtn>
          <MDBBtn color="primary">Login</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script>
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn } from "mdb-vue-ui-kit";

  export default {
    name: 'Login',
    components: {
      MDBCard, MDBCardBody, MDBCardTitle, MDBInput, MDBBtn
    }
  }
</script>

<style scoped>
  .login_panel {
    width: 500px;
    height: 300px;
  }
  .img {
    width: 30%;
    padding: 1rem;
    text-align: center;
  }
</style>