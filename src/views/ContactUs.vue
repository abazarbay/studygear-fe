<template>
    <div>
      <h2>Kontaktformular</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.username" required>
  
        <label for="email">E-Mail:</label>
        <input type="email" id="email" v-model="formData.email" required>
  
        <label for="message">Nachricht:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
  
        <button type="submit">Senden</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        formData: {
          username: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      async submitForm() {
          await axios.post('/send-email', this.formData)
          .then(response => {
            console.log('Erfolgreich gesendet:', response.data);
            
          })
          .catch(error => {
            console.error('Fehler beim Senden:', error);
      
          });
      }
    }
  };
  </script>
  