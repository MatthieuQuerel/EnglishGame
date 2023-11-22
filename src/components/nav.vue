<template>
    <div class="Rubrique_Nav">
      
  
          <router-link to="/Rule"><button>?</button></router-link>
  
          
        
      
      <router-view />
    </div>
  </template>
  <script>
  export default {
    name: "Rubrique_Nav",
    data: function () {
      return {
       
      };
    },
  };
  </script>
  
  <style scoped>
  
  
  button{
    margin-top:5px;
  width:30px;
  font-weight: bold;
 margin-left: 1175px;
  text-align: center;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
}
button:hover{
    background-color: #fbf7f7;
    transition: box-shadow 0.10s;
  }
  
  @media screen and (max-width: 932px) {
   
    button {
        /* Nouveaux styles pour les écrans plus petits */
        
        margin-left: 550px;

        width: auto;
    }
}
  </style>