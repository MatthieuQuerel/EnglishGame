<template>
    <div>
      
      <table class="table">
        <tr v-for="(row, rowIndex) in grid" :key="rowIndex">
          <td v-for="(cell, colIndex) in row" :key="colIndex" :style="{ backgroundColor: cell.color }">
            {{ cell.content }}
          </td>
        </tr>
      </table>
      <button @click="assignRandomColors">Assign Random Colors</button>
      <table class="Score">
        <thead>
      <tr>
        <th>Red</th>
      </tr>
      <tr>
        <th>Blue</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ ScoreRed}}</td>
      </tr>
      <tr>
        <td>{{ ScoreBlue }}</td>
      </tr>
      
    </tbody>
      </table>
      <button @click="AddPointBlue">Add Blue</button>
      <button @click="removePointBlue">remove Blue</button>
      <button @click="AddPointRed">Add Red</button>
      <button @click="removePointRed">remove Red</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
  
      return {
        rows: 5,
        cols: 6,
        grid: [],
        ScoreBlue:0,
        ScoreRed:0,
        
      };
    },
    mounted() {
      this.initializeGrid();
    },
    methods: {
      initializeGrid() {
        this.grid = Array.from({ length: this.rows }, () =>
          Array.from({ length: this.cols }, () => ({
            
            color: 'gris',
          }))
        );
      },
      assignRandomColors() {
    // Créer un tableau avec 30 éléments, 15 rouges et 15 bleus
    const colors = Array(15).fill('#EC6655').concat(Array(15).fill('#1EB5BF'));
  
    // Mélanger le tableau
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
  
    // Affecter les couleurs mélangées aux cellules
    let index = 0;
    this.grid.forEach(row => {
      row.forEach(cell => {
        cell.color = colors[index];
        index++;
      });
    });
  },
      AddPointBlue() {
       this.ScoreBlue ++     
      },
      AddPointRed() {
        this.ScoreRed ++
    },
    removePointBlue() {
      if( this.ScoreBlue>0){
       this.ScoreBlue --
      }
       
      },
      removePointRed() {
        if( this.ScoreRed>0){
          this.ScoreRed --
        }
    },
    },
  };
  </script>
  
  
  
  <style scoped>
.table {
    padding: 28px;
    margin: 0 auto; /* Centrer le tableau */
    width: 60%;
    margin-top: 20px;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(221, 15, 15, 0.5);
    background-color: #686363;
}

th, td {
    border: 4px solid #FBC60B;
    padding: 30px;
    text-align: center;
    border-radius: 10px;
}

.table tr:hover {
    background-color: #5c4d4d;
    transition: background-color 0.10s;
}

.table th, .table td {
    transition: box-shadow 0.10s;
}

.table th:hover, .table td:hover {
    background-color: #EC6655;
    box-shadow: 0 4px 8px rgba(236, 228, 228, 0.1);
}

button {
    width: 195px;
    margin: 5px;
    background: linear-gradient(45deg, #FFD700, #cc4def);
    border: none;
    border-radius: 8px;
    padding: 15px 30px;
    box-shadow: 0 4px 8px rgba(212, 62, 232, 0.5);
    position: relative;
    overflow: hidden;
    border: none;
}

button:hover {
    background-color: #cc4def;
    transition: box-shadow 0.10s;
}

.Score {
    width: 60%;
    margin: 26px;
    border-collapse: collapse;
    display: flex;
    padding: 1rem;
    margin-left: 25rem;
}

.Score th, .Score td {
    border: 1px solid black;
    padding: 26px;
    width: 60px;
    text-align: center;
}

.Score thead {
    background-color: #FBC60B;
}

.Score tbody tr:nth-child(odd) {
    background-color: #EC6655;
    color: white;
}

.Score tbody tr:nth-child(even) {
    background-color: #1EB5BF;
    color: white;
}

@media screen and (max-width: 935px) {
    .table {
        width: 60%; /* Ajustez la largeur selon vos besoins */
        
        margin-top: 1%;
    }
    th, td {
    width: 11%;
    padding: 22px;
}

    .Score {
        width: 20%; /* Ajustez la largeur selon vos besoins */
        margin-left: 20rem;
        
    }
}
</style>
  