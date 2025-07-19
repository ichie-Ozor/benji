// <!DOCTYPE html>
// <html>
// <head>
// <style>
//   body {
//     height: 100vh;
//     margin: 0;
//     overflow: hidden; /* Prevent scrollbars */
//   }
  
//   .d {
//     width: 100px;
//     height: 100px;
//     background: red;
//     position: absolute;
//     animation: mymove 5s infinite alternate ease-in-out;
//     border-radius: 50%;
//     top: 0;
//     left: 50px;
//   }
  
//   .f {
//     width: 50px;
//     height: 50px;
//     background: gold;
//     position: absolute;
//     animation: move 7s infinite 2s alternate-reverse ease-in-out;
//     border-radius: 50%;
//     top: 0;
//     right: 50px;
//   }
  
//   .g {
//     width: 200px;
//     height: 200px;
//     background: brown;
//     position: absolute;
//     animation: hove 10s infinite alternate-reverse 3s ease-in-out;
//     border-radius: 50%;
//     left: 150px;
//     top: 0;
//   }
  
//   .e {
//     width: 200px;
//     height: 200px;
//     background: pink;
//     position: absolute;
//     animation: tove 5s infinite alternate ease-in-out;
//     border-radius: 50%;
//     right: 50px;
//     top: 0;
//   }
//   .h {
//     width: 40px;
//     height: 40px;
//     background: blue;
//     position: absolute;
//     animation: over 8s infinite alternate-reverse 3s ease-in-out;
//     border-radius: 50%;
//     left: 310px;
//     top: 0;
//   }

//   @keyframes mymove {
//     from { top: 0; }
//     to { top: calc(100vh - 100px); background: green; width: 200px; height: 200px; }
//   }
  
//   @keyframes move {
//     from { top: 0; }
//     to { top: calc(100vh - 50px); background: purple; width: 300px; height: 300px; }
//   }
  
  
//   @keyframes hove {
//   from{top:0;}
//   to{ top: calc(100vh - 40px); background: yellow; width: 40px; height: 40px; }
//   }
//    @keyframes over {
//   from{top:0;}
//   to{ top: calc(100vh - 40px); background: yellow; width: 170px; height: 170px; }
//   }
  
//   @keyframes tove {
//     from { top: 0; }
//     to { top: calc(100vh - 200px); background: gray; width: 100px; height: 100px; }
//   }
// </style>
// </head>
// <body>

// <h1>Animated Circles Traveling Screen Height</h1>

// <div class='d'></div>
// <div class='f'></div>
// <div class='g'></div>
// <div class='e'></div>
// <div class='h'></div>

// </body>
// </html>