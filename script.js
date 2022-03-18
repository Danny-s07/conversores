//conversor de moedas
function conversorMoeda() {
    //variaveis
    var moeda = document.getElementById("moeda").value;
    var moeda2 = document.getElementById("moeda2").value;
    //moedas
    if (moeda.toLowerCase() == "dolar" && moeda2.toLowerCase() == "real") {
        var cotacao = 7.64; //real
      var sigla = "BRL";
    } else if (moeda.toLowerCase() == "real" && moeda2.toLowerCase() == "dolar") {
       var cotacao = 5.51;//dolar
      var sigla = "USD";
    } 
    else if (moeda.toLowerCase() == "libra" && moeda2.toLowerCase() == "dolar") 
   {
    var cotacao = 5.51;//dolar    
      var sigla = "USD";
    } else if (moeda.toLowerCase() == "dolar" && moeda2.toLowerCase() == "libra") {
        var cotacao = 6.58;//libra
        var sigla = "GBP";
      
    } 
    else if (moeda.toLowerCase() == "real" && moeda2.toLowerCase() == "libra") {
        
        var cotacao = 6.58;//libra
      var sigla = "GBP";
    }else if (moeda.toLowerCase() == "libra" && moeda2.toLowerCase() == "real") {
        var cotacao = 7.64;//real
      var sigla = "BRL";
    }
    else if(moeda.toLowerCase() == "biticoin" && moeda2.toLowerCase() == "real")
    {
        var cotacao = 7.64; //real
        var sigla = "BRL";
    }else if (moeda.toLowerCase() == "real" && moeda2.toLowerCase() == "biticoin") {
        
        var cotacao = 39.20; //biticoin
        var sigla = "BTC/USD";
    } else if(moeda.toLowerCase() == "biticoin" && moeda2.toLowerCase() == "dolar")
    { 
        var cotacao = 5.51;//dolar
        var sigla = "USD";
    } else if(moeda.toLowerCase() == "dolar" && moeda2.toLowerCase() == "biticoin")
    {
        var cotacao = 39.20;//biticoin
        var sigla = "BTC/USD";
    }

    else if(moeda.toLowerCase() == "biticoin" && moeda2.toLowerCase() == "libra")
    {
        var cotacao = 6.58;//libra
        var sigla = "GBP";
    }else if(moeda.toLowerCase() == "libra" && moeda2.toLowerCase() == "biticoin")
    { 
        var cotacao = 39.20;//biticoin
        var sigla = "BTC/USD";
    } else {
      document.getElementById("valorFinal").innerHTML = "Moeda desconhecida";
    }
    //conversão
    var valor1 = parseFloat(document.getElementById("converter").value);
    if (valor1 > 0) {
      valor2 = valor1 * cotacao;
  
      document.getElementById("valorFinal").innerHTML =
        valor2.toFixed(2) + " " + sigla;
    } else if (valor1 == 0) {
      document.getElementById("valorFinal").innerHTML =
        "insira um valor maior que 0";
    } else {
      document.getElementById("valorFinal").innerHTML =
        "insira um valor positivo";
    }
  }

/////////////conversor temperatura ////////////////////////

function conversorTemp() {
    //variaveis
    var temp = document.getElementById("temp").value;
    var temp2 = document.getElementById("temp2").value;
  
    //conversão
    var valor1 = parseFloat(document.getElementById("converterTemp").value);
  
    //temperaturas
    if (temp.toLowerCase() == "fahrenheit" && temp2.toLowerCase() == "celsius") {
      var valor2 = ((valor1 - 32) * 5) / 9;
      var sigla = "°C";
    } else if (temp.toLowerCase() == "celsius" && temp2.toLowerCase() == "fahrenheit" ) {
      var valor2 = (valor1 * 9) / 5 + 32;
      var sigla = " °F";
    }
    else if (temp.toLowerCase() == "celsius" && temp2.toLowerCase() == "kelvin" ) {
        var valor2 = (valor1 + 273.15)
        var sigla = " °K";
    }else if (temp.toLowerCase() == "kelvin" && temp2.toLowerCase() == "celsius" ) {
        var valor2 = (valor1 - 273.15)
        var sigla = " °C";
    }else if (temp.toLowerCase() == "fahrenheit" && temp2.toLowerCase() == "kelvin" ) {
        var valor2 = ((valor1 - 32) * 5) / 9 + 273.15;
        var sigla = "°K";
    }else if (temp.toLowerCase() == "kelvin" && temp2.toLowerCase() == "fahrenheit" ) {
        var valor2 = ((valor1 - 273.15) * 9) / 5 + 32;
        var sigla = "°K";
    }
     //conversão - exibir
      document.getElementById("valorFinalTemp").innerHTML =
      valor2.toFixed(2) + " " + sigla;
}

/////////////////conversor de comprimento/////////////////

//conversor de comprimento
function conversorComp() {
    //variaveis
    var comp = document.getElementById("comp").value;
    var comp2 = document.getElementById("comp2").value;
  
    //conversão
    var valor1 = parseFloat(document.getElementById("converterComp").value);
  
    //comprimento
    if (comp.toLowerCase() == "anos-luz" && comp2.toLowerCase() == "quilômetros(km)") {
        var valor2 = (valor1 * 9.461).toFixed(3);
      var sigla = "quilômetros(km)";
    } else if ( comp.toLowerCase() == "quilômetros(km)" && comp2.toLowerCase() == "anos-luz") {
        
        var valor2 = (valor1 / 9.461).toFixed(4);
         var sigla = "anos-luz";
    }
    else if ( comp.toLowerCase() == "quilômetros(km)" && comp2.toLowerCase() == "metros(m)") {
        
        var valor2 = (valor1 * 1.000).toFixed(3);
         var sigla = "metros(m)";
    }
    else if ( comp.toLowerCase() == "metros(m)" && comp2.toLowerCase() == "quilômetros(km)") 
    {
        
        var valor2 = (valor1 /1000).toFixed(3);
         var sigla = "quilômetros(km)";
    }
    else if ( comp.toLowerCase() == "quilômetros(km)" && comp2.toLowerCase() == "centimetros(cm)") {
        
        var valor2 = (valor1 * 100.000).toFixed(3);
         var sigla = "centimetros(cm)";
    }

    else if ( comp.toLowerCase() == "centimetros(cm)" && comp2.toLowerCase() == "quilômetros(km)") {
        
        var valor2 = (valor1 /100000).toFixed(5);
         var sigla = "quilômetros(km)";
    }

    else if ( comp.toLowerCase() == "metros(m)" && comp2.toLowerCase() == "anos-luz") 
    {
        
        var valor2 = (valor1 / 9.461).toFixed(4);
         var sigla = "anos-luz";
    }
    else if ( comp.toLowerCase() == "anos-luz" && comp2.toLowerCase() == "metros(m)") {
        
        var valor2 = (valor1 * 9.461).toFixed(3);
         var sigla = "metros(m)";
    }
    else if ( comp.toLowerCase() == "centimetros(cm)" && comp2.toLowerCase() == "anos-luz") {
        
        var valor2 = (valor1 / 9.461).toFixed(4);
         var sigla = "anos-luz";
    }
    else if ( comp.toLowerCase() == "anos-luz" && comp2.toLowerCase() == "centimetros(cm)") 
    {
        
        var valor2 = (valor1 * 9.461).toFixed(3);
         var sigla = "centimetros(cm)";
    }
    else if ( comp.toLowerCase() == "metros(m)" && comp2.toLowerCase() == "centimetros(cm)") 
    {
        
        var valor2 = (valor1 * 100).toFixed(0);
        var sigla = "centimetros(cm)";
    }else if ( comp.toLowerCase() == "centimetros(cm)" && comp2.toLowerCase() == "metros(m)") 
    {
        
        var valor2 = (valor1 / 100).toFixed(2);
        var sigla = "metros(m)";
    }

    //conversão - exibir
    document.getElementById("valorFinalComp").innerHTML =
    valor2 + " " + sigla;
}
   

/////////////////////Conversor de massa//////////////////////////////////
//conversor de massa
function conversorMass() {
  //variaveis
  var mass = document.getElementById("mass").value;
  var mass2 = document.getElementById("mass2").value;

  //conversão
  var valor1 = parseFloat(document.getElementById("converterMas").value);

  //massa
  if (mass.toLowerCase() == "quilograma(kg)" && mass2.toLowerCase() == "grama(g)") {
      var valor2 = (valor1 * 1.000).toFixed(3);
    var sigla = "grama(g)";
  } else if ( mass.toLowerCase() == "grama(g)" && mass2.toLowerCase() == "quilograma(kg)") {
      
      var valor2 = (valor1 / 1000).toFixed(3);
       var sigla = "quilograma(kg)";
  }
    else if ( mass.toLowerCase() == "quilograma(kg)" && mass2.toLowerCase() == "tonelada(t)") 
    {
        
      var valor2 = valor1 / 1000;
      var sigla = "tonelada(t)";
    }
  else if ( mass.toLowerCase() == "tonelada(t)" && mass2.toLowerCase() == "quilograma(kg)")
  {
        
    var valor2 = (valor1 * 1.000).toFixed(3);
    var sigla = "quilograma(kg)";
  } else if ( mass.toLowerCase() == "quilograma(kg)" && mass2.toLowerCase() == "miligrama(mg)") 
  {
      
    var valor2 = (valor1 * 1.000000).toFixed(6);
    var sigla = "miligrama(mg)";
  } else if ( mass.toLowerCase() == "miligrama(mg)" && mass2.toLowerCase() == "quilograma(kg)") 
  {
      
    var valor2 = (valor1 / 1000000).toFixed(6);
    var sigla = "quilograma(kg)";
  }

  else if ( mass.toLowerCase() == "grama(g)" && mass2.toLowerCase() == "tonelada(t)") 
  {
      
    var valor2 = (valor1 / 1000000).toFixed(6);
    var sigla = "tonelada(t)";
  }
  else if ( mass.toLowerCase() == "tonelada(t)" && mass2.toLowerCase() == "grama(g)") 
  {
      
    var valor2 = (valor1 * 1.000000).toFixed(6);
    var sigla = "grama(g)";
  }
  else if ( mass.toLowerCase() == "grama(g)" && mass2.toLowerCase() == "miligrama(mg)") 
  {
      
    var valor2 = (valor1 * 1.000).toFixed(3);
    var sigla = "miligrama(mg)";
  }
  else if ( mass.toLowerCase() == "miligrama(mg)" && mass2.toLowerCase() == "grama(g)") 
  {
      
    var valor2 = (valor1 / 1000).toFixed(3);
    var sigla = "grama(g)";
  }

  else if ( mass.toLowerCase() == "tonelada(t)" && mass2.toLowerCase() == "miligrama(mg)") 
  {
      
    var valor2 = (valor1 * 1.000000000).toFixed(9);
    var sigla = "miligrama(mg)";
  }

  else if ( mass.toLowerCase() == "miligrama(mg)" && mass2.toLowerCase() == "tonelada(t)") 
  {
      
    var valor2 = (valor1 / 1000000000).toFixed(9);
    var sigla = "tonelada(t)";
  }
   //conversão - exibir
  document.getElementById("valorFinalMassa").innerHTML =
  valor2 + " " + sigla;
}



//função para limpar campos da conversao moeda,temperatura, massa e comprimento por enquanto
function limpar()
 {
     //moeda
    document.getElementById("converter").value = null;
    document.getElementById("moeda").value = null;
    document.getElementById("moeda2").value = null;
    document.getElementById("valorFinal").innerHTML = "";

    //temperatura
    document.getElementById("converterTemp").value = null;
    document.getElementById("temp").value = null;
    document.getElementById("temp2").value = null;
    document.getElementById("valorFinalTemp").innerHTML = "";
   
   //comprimento

    document.getElementById("converterComp").value = null;
    document.getElementById("comp").value = null;
    document.getElementById("comp2").value = null;
    document.getElementById("valorFinalComp").innerHTML = "";
   
    //massa
    document.getElementById("converterMas").value = null;
    document.getElementById("mass").value = null;
    document.getElementById("mass2").value = null;
    document.getElementById("valorFinalMassa").innerHTML = "";
    
 }