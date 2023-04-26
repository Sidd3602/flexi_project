<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label>
          Email:
          <input type="email" v-model="email" required />
        </label>
        <label>
          Password:
          <input type="password" v-model="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async login() {
        try {
          // Call your login API here
          const response = await axios.post('/api/login', {
            email: this.email,
            password: this.password
          })
          // Handle successful login
          console.log(response.data)
        } catch (error) {
          // Handle login error
          this.error = error.response.data.message
        }
      }
    }
  }
  </script>
  
  <style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>