var Gconfig = [];
var Ggeneral;
var Gtest = 0;

Ggeneral= [
  {     //0:SPARE
  },{   //1:LAYOUT GENERAL
      title: 'GRAPH',
      font: {
      size: 15,
      family: 'Baloo Chettan',
      color: 'rgb(255,255,255)'
      },
      height: 195,
      paper_bgcolor:'rgba(0,0,0,0)',
      plot_bgcolor:'rgba(0,0,0,0)',
      margin: { l: 30,r: 30,b: 30, t: 40, pad: 2 },
      xaxis:{
        dtick: 1,
        fixedrange: true,
        gridcolor: 'rgb(150,170,190)',
        tickfont: {
          size: 16,
          family: 'ZCOOL QingKe HuangYou',
          color: 'rgb(255,255,255)'
        }
      },
      yaxis: { 
        range: [0, 100],
        dtick: 20,
        fixedrange: true,
        gridcolor: 'rgb(150,170,190)',  
        zerolinecolor: 'rgb(255,255,255)',  
        tickfont: {
          size: 16,
          family: 'ZCOOL QingKe HuangYou',
          color: 'rgb(255,255,255)'
        }
      },
      shapes: [
        {
          type: 'line',
          x0: 1,
          y0: 60,
          x1: 10,
          y1: 60,
          line: {
          color: 'orange',
          width: 0.8
              },
        },
        {
          type: 'line',
          x0: 1,
          y0: 80,
          x1: 10,
          y1: 80,
          line: {
          color: 'red',
          width: 0.8
              }
         },
      ],


  },{   //2:CONFIG GENERAL
      responsive: true


  },{   //3:DATA GENERAL
      x:  [1,2,3,4,5,6,7,8,9,10],
      y:  [20,30,50,35,5,25,75,90,70,50],
      type: 'scatter',
      mode: 'lines',
      line: {
        color: 'rgb(20,190,150)',
        width: 4
      }

  
  }
];


Gconfig[0]= [
  {//LAYOUT  
      title: "MOTOR 1 TEMPERATURE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: 0, t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: Ggeneral[1]['xaxis']['dtick'],
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        range: Ggeneral[1]['yaxis']['range'],
        dtick: Ggeneral[1]['yaxis']['dtick'],
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      },
      legend: {
        orientation: "h",
        x: 0.2,
        y: -0.13,
      },


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  Ggeneral[3]['x'],
    y:  [50,15,35,10,80,20,15,10,40,50],
    fill: 'tozeroy',
    name: "STAND BY",
    type: Ggeneral[3]['type'],
    mode: Ggeneral[3]['mode'],
    line: {
      color: 'rgb(155,10,10)',
      width: Ggeneral[3]['line']['width']
    }


  },{
    //SUB_PLOT_2_DATA
    x:  Ggeneral[3]['x'],
    y:  Ggeneral[3]['y'],
    fill: 'tozeroy',
    name: "WORK",
    type: Ggeneral[3]['type'],
    mode: Ggeneral[3]['mode'],
    line: {
      color: Ggeneral[3]['line']['color'],
      width: Ggeneral[3]['line']['width']
    }

  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[1]= [
  {//LAYOUT  
      title: "MOTOR 1 VOLTAGE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: 0, t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: Ggeneral[1]['xaxis']['dtick'],
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        range: Ggeneral[1]['yaxis']['range'],
        dtick: Ggeneral[1]['yaxis']['dtick'],
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      },
      legend: {
        orientation: "h",
        x: 0.2,
        y: -0.2,
      },


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  [1,2,3,4,5],
    y:  [80,50,30,40,20],
    type: 'bar',
    name: 'RMS',
    marker: {
      color: 'rgb(142,124,195)',
      line: {
        color: 'rgb(125,0,250)',
        width: 3
      }
    }

  },{//SUB_PLOT_2_DATA
    x:  [1,2,3,4,5],
    y:  [20,60,10,70,12],
    type: 'bar',
    name: 'MAX',
    marker: {
      color: 'rgb(0,125,250)',
      opacity: 0.8,
      line: {
        color: 'rgb(8,48,107)',
        width: 1
      }
    }
  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[2]= [
  {//LAYOUT  
      title: "MOTOR 1 CURRENT GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: Ggeneral[1]['margin']['b'], t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: 0.75,
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        dtick: 1,
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      }


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  [1,1,2,2,2,2,3,4,4,4,4,4,4,5,5],
    type: 'histogram',
    name: "Day works", 
    marker: {
      color: 'orange',
    },


  },{
    //SUB_PLOT_2_DATA
  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[3]= [
  {//LAYOUT  
      title: "MOTOR 1 TORQUE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: Ggeneral[1]['margin']['b'], t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        visible: false
      },    
      yaxis:{
        visible: false
      },
      polar: {
        bgcolor: 'rgb(60,80,100)',
        radialaxis: {
          color: 'rgb(255,255,255)',
          gridcolor: 'rgb(255,255,255)',
          range: [0, 60],
          dtick: 20,        
            tickfont: {
            size: 16,
            family: 'ZCOOL QingKe HuangYou',
            color: 'rgb(255,255,255)'
          }
        },
        angularaxis: {
          color: 'rgb(255,255,255)',
          gridcolor: 'rgb(255,255,255)',
        }
      }


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    type: 'scatterpolar',
    r: [35,58,35,1,55,35],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself',
    name: 'Dynamic'
    
  },{
    //SUB_PLOT_2_DATA
    /*
    type: 'scatterpolar',
    r: [10,41,51,31,11,35],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself',
    name: 'Static'
    */
  },{
    //SUB_PLOT_3_DATA 
  }
];



Gconfig[4]= [
  {//LAYOUT  
      title: "MOTOR 2 TEMPERATURE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: 0, t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: Ggeneral[1]['xaxis']['dtick'],
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        range: Ggeneral[1]['yaxis']['range'],
        dtick: Ggeneral[1]['yaxis']['dtick'],
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      },
      legend: {
        orientation: "h",
        x: 0.2,
        y: -0.13,
      },


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  Ggeneral[3]['x'],
    y:  [50,15,35,10,80,20,15,10,40,50],
    fill: 'tozeroy',
    name: "STAND BY",
    type: Ggeneral[3]['type'],
    mode: Ggeneral[3]['mode'],
    line: {
      color: 'rgb(155,10,10)',
      width: Ggeneral[3]['line']['width']
    }


  },{
    //SUB_PLOT_2_DATA
    x:  Ggeneral[3]['x'],
    y:  Ggeneral[3]['y'],
    fill: 'tozeroy',
    name: "WORK",
    type: Ggeneral[3]['type'],
    mode: Ggeneral[3]['mode'],
    line: {
      color: Ggeneral[3]['line']['color'],
      width: Ggeneral[3]['line']['width']
    }

  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[5]= [
  {//LAYOUT  
      title: "MOTOR 2 VOLTAGE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: 0, t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: Ggeneral[1]['xaxis']['dtick'],
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        range: Ggeneral[1]['yaxis']['range'],
        dtick: Ggeneral[1]['yaxis']['dtick'],
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      },
      legend: {
        orientation: "h",
        x: 0.2,
        y: -0.2,
      },


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  [1,2,3,4,5],
    y:  [80,50,30,40,20],
    type: 'bar',
    name: 'RMS',
    marker: {
      color: 'rgb(142,124,195)',
      line: {
        color: 'rgb(125,0,250)',
        width: 3
      }
    }

  },{//SUB_PLOT_2_DATA
    x:  [1,2,3,4,5],
    y:  [20,60,10,70,12],
    type: 'bar',
    name: 'MAX',
    marker: {
      color: 'rgb(0,125,250)',
      opacity: 0.8,
      line: {
        color: 'rgb(8,48,107)',
        width: 1
      }
    }
  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[6]= [
  {//LAYOUT  
      title: "MOTOR 2 CURRENT GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: Ggeneral[1]['margin']['b'], t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: 0.75,
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        dtick: 1,
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      }


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  [1,1,2,2,2,3,4,4,4,4,4,5,5],
    type: 'histogram',
    name: "Day works", 
    marker: {
      color: 'orange',
    },


  },{
    //SUB_PLOT_2_DATA
  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[7]= [
  {//LAYOUT  
      title: "MOTOR 2 TORQUE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: Ggeneral[1]['margin']['b'], t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        visible: false
      },    
      yaxis:{
        visible: false
      },
      polar: {
        bgcolor: 'rgb(60,80,100)',
        radialaxis: {
          color: 'rgb(255,255,255)',
          gridcolor: 'rgb(255,255,255)',
          range: [0, 60],
          dtick: 20,        
            tickfont: {
            size: 16,
            family: 'ZCOOL QingKe HuangYou',
            color: 'rgb(255,255,255)'
          }
        },
        angularaxis: {
          color: 'rgb(255,255,255)',
          gridcolor: 'rgb(255,255,255)',
        }
      }


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    type: 'scatterpolar',
    r: [35,58,35,1,55,35],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself',
    name: 'Dynamic'
    
  },{
    //SUB_PLOT_2_DATA
    /*
    type: 'scatterpolar',
    r: [10,41,51,31,11,35],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself',
    name: 'Static'
    */
  },{
    //SUB_PLOT_3_DATA 
  }
];



Gconfig[8]= [
  {//LAYOUT  
      title: "MOTOR 3 TEMPERATURE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: 0, t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: Ggeneral[1]['xaxis']['dtick'],
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        range: Ggeneral[1]['yaxis']['range'],
        dtick: Ggeneral[1]['yaxis']['dtick'],
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      },
      legend: {
        orientation: "h",
        x: 0.2,
        y: -0.13,
      },


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  Ggeneral[3]['x'],
    y:  [50,15,35,10,80,20,15,10,40,50],
    fill: 'tozeroy',
    name: "STAND BY",
    type: Ggeneral[3]['type'],
    mode: Ggeneral[3]['mode'],
    line: {
      color: 'rgb(155,10,10)',
      width: Ggeneral[3]['line']['width']
    }


  },{
    //SUB_PLOT_2_DATA
    x:  Ggeneral[3]['x'],
    y:  Ggeneral[3]['y'],
    fill: 'tozeroy',
    name: "WORK",
    type: Ggeneral[3]['type'],
    mode: Ggeneral[3]['mode'],
    line: {
      color: Ggeneral[3]['line']['color'],
      width: Ggeneral[3]['line']['width']
    }

  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[9]= [
  {//LAYOUT  
      title: "MOTOR 3 VOLTAGE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: 0, t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: Ggeneral[1]['xaxis']['dtick'],
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        range: Ggeneral[1]['yaxis']['range'],
        dtick: Ggeneral[1]['yaxis']['dtick'],
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      },
      legend: {
        orientation: "h",
        x: 0.2,
        y: -0.2,
      },


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  [1,2,3,4,5],
    y:  [80,50,30,40,20],
    type: 'bar',
    name: 'RMS',
    marker: {
      color: 'rgb(142,124,195)',
      line: {
        color: 'rgb(125,0,250)',
        width: 3
      }
    }

  },{//SUB_PLOT_2_DATA
    x:  [1,2,3,4,5],
    y:  [20,60,10,70,12],
    type: 'bar',
    name: 'MAX',
    marker: {
      color: 'rgb(0,125,250)',
      opacity: 0.8,
      line: {
        color: 'rgb(8,48,107)',
        width: 1
      }
    }
  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[10]= [
  {//LAYOUT  
      title: "MOTOR 3 CURRENT GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: Ggeneral[1]['margin']['b'], t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        dtick: 0.75,
        fixedrange: Ggeneral[1]['xaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['xaxis']['gridcolor'],
        tickfont: {
          size: Ggeneral[1]['xaxis']['tickfont']['size'],
          family: Ggeneral[1]['xaxis']['tickfont']['family'],
          color: Ggeneral[1]['xaxis']['tickfont']['color']
        }
      },
      yaxis: { 
        dtick: 1,
        fixedrange: Ggeneral[1]['yaxis']['fixedrange'],
        gridcolor: Ggeneral[1]['yaxis']['gridcolor'],  
        zerolinecolor: Ggeneral[1]['yaxis']['zerolinecolor'],  
        tickfont: {
          size: Ggeneral[1]['yaxis']['tickfont']['size'],
          family: Ggeneral[1]['yaxis']['tickfont']['family'],
          color: Ggeneral[1]['yaxis']['tickfont']['color']
        }
      }


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    x:  [1,1,2,2,2,3,4,4,4,4,4,5,5],
    type: 'histogram',
    name: "Day works", 
    marker: {
      color: 'orange',
    },


  },{
    //SUB_PLOT_2_DATA
  },{
    //SUB_PLOT_3_DATA 
  }
];

Gconfig[11]= [
  {//LAYOUT  
      title: "MOTOR 3 TORQUE GRAPH",
      font: {
      size: Ggeneral[1]['font']['size'],
      family: Ggeneral[1]['font']['family'],
      color: Ggeneral[1]['font']['color']
      },
      height: Ggeneral[1]['height'],
      paper_bgcolor: Ggeneral[1]['paper_bgcolor'],
      plot_bgcolor: Ggeneral[1]['plot_bgcolor'],
      margin: { l: Ggeneral[1]['margin']['l'],r: Ggeneral[1]['margin']['r'],b: Ggeneral[1]['margin']['b'], t: Ggeneral[1]['margin']['t'], pad: Ggeneral[1]['margin']['pad'] },
      xaxis:{
        visible: false
      },    
      yaxis:{
        visible: false
      },
      polar: {
        bgcolor: 'rgb(60,80,100)',
        radialaxis: {
          color: 'rgb(255,255,255)',
          gridcolor: 'rgb(255,255,255)',
          range: [0, 60],
          dtick: 20,        
            tickfont: {
            size: 16,
            family: 'ZCOOL QingKe HuangYou',
            color: 'rgb(255,255,255)'
          }
        },
        angularaxis: {
          color: 'rgb(255,255,255)',
          gridcolor: 'rgb(255,255,255)',
        }
      }


  },{//CONFIGURATION
        responsive: Ggeneral[2]['responsive']


  },{//PLOT_1_DATA
    type: 'scatterpolar',
    r: [35,58,35,1,55,35],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself',
    name: 'Dynamic'
    
  },{
    //SUB_PLOT_2_DATA
    /*
    type: 'scatterpolar',
    r: [10,41,51,31,11,35],
    theta: ['A','B','C', 'D', 'E', 'A'],
    fill: 'toself',
    name: 'Static'
    */
  },{
    //SUB_PLOT_3_DATA 
  }
];

/*
FormatBasic[0]= [
  {
    //LAYOUT
    title: 'Overlaid Chart Without Boundary Lines',
    height: 195,
    margin: { l: 30,r: 30,b: 30, t: 40, pad: 2 },
  },{
    //CONFIGURATION
    responsive: true
  },{
    //PLOT_1_DATA
    x: [1, 2, 3, 4],
    y: [0, 2, 3, 5],
    type: 'scatter',
  },{
    //SUB_PLOT_2_DATA
  },{
    //SUB_PLOT_3_DATA 
  }
];
*/
for(var i=0;i<5;i++){
  Gconfig[0][2]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[0][3]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[4][2]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[4][3]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[8][2]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[8][3]['y'][i] = Math.floor(Math.random() * 100);

  Gconfig[0][2]['y'][i+5] = Math.floor(Math.random() * 100);
  Gconfig[0][3]['y'][i+5] = Math.floor(Math.random() * 100);
  Gconfig[4][2]['y'][i+5] = Math.floor(Math.random() * 100);
  Gconfig[4][3]['y'][i+5] = Math.floor(Math.random() * 100);
  Gconfig[8][2]['y'][i+5] = Math.floor(Math.random() * 100);
  Gconfig[8][3]['y'][i+5] = Math.floor(Math.random() * 100);


  Gconfig[1][2]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[1][3]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[5][2]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[5][3]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[9][2]['y'][i] = Math.floor(Math.random() * 100);
  Gconfig[9][3]['y'][i] = Math.floor(Math.random() * 100);

  Gconfig[6][2]['x'][i] = Math.floor(Math.random() * 4)+1;
  Gconfig[6][2]['x'][i+5] = Math.floor(Math.random() * 4)+1;
  Gconfig[6][2]['x'][i+10] = Math.floor(Math.random() * 4)+1;
  Gconfig[10][2]['x'][i] = Math.floor(Math.random() * 4)+1;
  Gconfig[10][2]['x'][i+5] = Math.floor(Math.random() * 4)+1;
  Gconfig[10][2]['x'][i+10] = Math.floor(Math.random() * 4)+1;

  Gconfig[3][2]['r'][i] = Math.floor(Math.random() * 50)+10;
  Gconfig[7][2]['r'][i] = Math.floor(Math.random() * 50)+10;
  Gconfig[11][2]['r'][i] = Math.floor(Math.random() * 50)+10;
};

export default Gconfig;