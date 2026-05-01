function carregarPagina(pagina) {
  fetch(pagina)
      .then(response => response.text())
      .then(data => {
          document.getElementById("conteudo").innerHTML = data;
      })
      .catch(error => {
          document.getElementById("conteudo").innerHTML = "<p>Erro ao carregar a página.</p>";
      });
}

        
var escreveJogos;
function mostraJogos(x) {
                    
    // Get the modal
    var modal = document.getElementById('myModal');
    var ordem = document.getElementById('ordem');
    console.log(ordem);
    ordem.innerText = x;

    modal.style.display = "block";
    // Get the button that opens the modal
    
    //var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    //btn.onclick = function() {
        //modal.style.display = "block";
    //}

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it  
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
            
    console.log(escreveJogos);

}



// *********************************************************
// Carrega o Primeiro Número NE01 nos campos JG11, JG21 e JG31
// *********************************************************
function carregaNE01() {
    document.frm.JG11.value = document.frm.NE01.value;
    document.frm.JG21.value = document.frm.NE01.value;
}

// *********************************************************
// Carrega o Primeiro Número NE02 nos campos JG12, JG22 e JG32
// *********************************************************
function carregaNE02() {
    document.frm.JG12.value = document.frm.NE02.value;
    document.frm.JG22.value = document.frm.NE02.value;
}

// *********************************************************
// Carrega o Primeiro Número NE03 nos campos JG13, JG23 e JG33
// *********************************************************
function carregaNE03() {
    document.frm.JG13.value = document.frm.NE03.value;
    document.frm.JG23.value = document.frm.NE03.value;
}

// *********************************************************
// Carrega o Primeiro Número NE04 nos campos JG14, JG34 e JG35
// *********************************************************
function carregaNE04() {
    document.frm.JG14.value = document.frm.NE04.value;
    document.frm.JG31.value = document.frm.NE04.value;
}

// *********************************************************
// Carrega o Primeiro Número NE05 nos campos JG15, JG42 e JG52
// *********************************************************
function carregaNE05() {
    document.frm.JG15.value = document.frm.NE05.value;
    document.frm.JG32.value = document.frm.NE05.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG16, JG43 e JG53
// *********************************************************
function carregaNE06() {
    document.frm.JG16.value = document.frm.NE06.value;
    document.frm.JG33.value = document.frm.NE06.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG16, JG43 e JG53
// *********************************************************
function carregaNE07() {
    document.frm.JG24.value = document.frm.NE07.value;
    document.frm.JG34.value = document.frm.NE07.value;
}

// *********************************************************
// Carrega o Primeiro Número NE08 nos campos JG25, JG62 e JG45
// *********************************************************
function carregaNE08() {
    document.frm.JG25.value = document.frm.NE08.value;
    document.frm.JG35.value = document.frm.NE08.value;
}

// *********************************************************
// Carrega o Primeiro Número NE09 nos campos JG26, JG46 e JG63
// *********************************************************
function carregaNE09() {
    document.frm.JG26.value = document.frm.NE09.value;
    document.frm.JG36.value = document.frm.NE09.value;
}

// *********************************************************
// Carrega os campos de soma de cada cartela
// *********************************************************
function soma() {
    var total01;
    var total02;
    var total03;

    total01 = parseFloat(0 + document.frm.JG11.value) + parseFloat(0 + document.frm.JG12.value) + parseFloat(0 + document.frm.JG13.value) + parseFloat(0 + document.frm.JG14.value) + parseFloat(0 + document.frm.JG15.value) + parseFloat(0 + document.frm.JG16.value);
    
    total02 = parseFloat(0 + document.frm.JG21.value) + parseFloat(0 + document.frm.JG22.value) + parseFloat(0 + document.frm.JG23.value) + parseFloat(0 + document.frm.JG24.value) + parseFloat(0 + document.frm.JG25.value) + parseFloat(0 + document.frm.JG26.value);
    
    total03 = parseFloat(0 + document.frm.JG31.value) + parseFloat(0 + document.frm.JG32.value) + parseFloat(0 + document.frm.JG33.value) + parseFloat(0 + document.frm.JG34.value) + parseFloat(0 + document.frm.JG35.value) + parseFloat(0 + document.frm.JG36.value);

    document.frm.SOMA01.value = total01;
    document.frm.SOMA02.value = total02;
    document.frm.SOMA03.value = total03;

}

// *********************************************************
// Muda a cor do botão igual ao numero digitado 
// *********************************************************
function numero_escolhido(nr) {
    if (1 == nr) {
        document.frm.nr01.style.background = "#638cb5";
    }
    if (2 == nr) {
        document.frm.nr02.style.background = "#638cb5";
    }
    if (3 == nr) {
        document.frm.nr03.style.background = "#638cb5";
    }
    if (4 == nr) {
        document.frm.nr04.style.background = "#638cb5";
    }
    if (5 == nr) {
        document.frm.nr05.style.background = "#638cb5";
    }

    if (6 == nr) {
        document.frm.nr06.style.background = "#638cb5";
    }
    if (7 == nr) {
        document.frm.nr07.style.background = "#638cb5";
    }
    if (8 == nr) {
        document.frm.nr08.style.background = "#638cb5";
    }
    if (9 == nr) {
        document.frm.nr09.style.background = "#638cb5";
    }
    if (10 == nr) {
        document.frm.nr10.style.background = "#638cb5";
    }

    if (11 == nr) {
        document.frm.nr11.style.background = "#638cb5";
    }
    if (12 == nr) {
        document.frm.nr12.style.background = "#638cb5";
    }
    if (13 == nr) {
        document.frm.nr13.style.background = "#638cb5";
    }
    if (14 == nr) {
        document.frm.nr14.style.background = "#638cb5";
    }
    if (15 == nr) {
        document.frm.nr15.style.background = "#638cb5";
    }

    if (16 == nr) {
        document.frm.nr16.style.background = "#638cb5";
    }
    if (17 == nr) {
        document.frm.nr17.style.background = "#638cb5";
    }
    if (18 == nr) {
        document.frm.nr18.style.background = "#638cb5";
    }
    if (19 == nr) {
        document.frm.nr19.style.background = "#638cb5";
    }
    if (20 == nr) {
        document.frm.nr20.style.background = "#638cb5";
    }

    if (21 == nr) {
        document.frm.nr21.style.background = "#638cb5";
    }
    if (22 == nr) {
        document.frm.nr22.style.background = "#638cb5";
    }
    if (23 == nr) {
        document.frm.nr23.style.background = "#638cb5";
    }
    if (24 == nr) {
        document.frm.nr24.style.background = "#638cb5";
    }
    if (25 == nr) {
        document.frm.nr25.style.background = "#638cb5";
    }

    if (26 == nr) {
        document.frm.nr26.style.background = "#638cb5";
    }
    if (27 == nr) {
        document.frm.nr27.style.background = "#638cb5";
    }
    if (28 == nr) {
        document.frm.nr28.style.background = "#638cb5";
    }
    if (29 == nr) {
        document.frm.nr29.style.background = "#638cb5";
    }
    if (30 == nr) {
        document.frm.nr30.style.background = "#638cb5";
    }

    if (31 == nr) {
        document.frm.nr31.style.background = "#638cb5";
    }
    if (32 == nr) {
        document.frm.nr32.style.background = "#638cb5";
    }
    if (33 == nr) {
        document.frm.nr33.style.background = "#638cb5";
    }
    if (34 == nr) {
        document.frm.nr34.style.background = "#638cb5";
    }
    if (35 == nr) {
        document.frm.nr35.style.background = "#638cb5";
    }

    if (36 == nr) {
        document.frm.nr36.style.background = "#638cb5";
    }
    if (37 == nr) {
        document.frm.nr37.style.background = "#638cb5";
    }
    if (38 == nr) {
        document.frm.nr38.style.background = "#638cb5";
    }
    if (39 == nr) {
        document.frm.nr39.style.background = "#638cb5";
    }
    if (40 == nr) {
        document.frm.nr40.style.background = "#638cb5";
    }

    if (41 == nr) {
        document.frm.nr41.style.background = "#638cb5";
    }
    if (42 == nr) {
        document.frm.nr42.style.background = "#638cb5";
    }
    if (43 == nr) {
        document.frm.nr43.style.background = "#638cb5";
    }
    if (44 == nr) {
        document.frm.nr44.style.background = "#638cb5";
    }
    if (45 == nr) {
        document.frm.nr45.style.background = "#638cb5";
    }

    if (46 == nr) {
        document.frm.nr46.style.background = "#638cb5";
    }
    if (47 == nr) {
        document.frm.nr47.style.background = "#638cb5";
    }
    if (48 == nr) {
        document.frm.nr48.style.background = "#638cb5";
    }
    if (49 == nr) {
        document.frm.nr49.style.background = "#638cb5";
    }
    if (50 == nr) {
        document.frm.nr50.style.background = "#638cb5";
    }

    if (51 == nr) {
        document.frm.nr51.style.background = "#638cb5";
    }
    if (52 == nr) {
        document.frm.nr52.style.background = "#638cb5";
    }
    if (53 == nr) {
        document.frm.nr53.style.background = "#638cb5";
    }
    if (54 == nr) {
        document.frm.nr54.style.background = "#638cb5";
    }
    if (55 == nr) {
        document.frm.nr55.style.background = "#638cb5";
    }

    if (56 == nr) {
        document.frm.nr56.style.background = "#638cb5";
    }
    if (57 == nr) {
        document.frm.nr57.style.background = "#638cb5";
    }
    if (58 == nr) {
        document.frm.nr58.style.background = "#638cb5";
    }
    if (59 == nr) {
        document.frm.nr59.style.background = "#638cb5";
    }
    if (60 == nr) {
        document.frm.nr60.style.background = "#638cb5";
    }
}         



// *********************************************************   
// Ordena os numeros distribuidos nos jogos
// *********************************************************   
function ordenarArray() {
    
    var jogosArray01 = [' ' + document.frm.JG11.value, ' ' + document.frm.JG12.value, ' ' + document.frm.JG13.value, ' ' + document.frm.JG14.value, ' ' + document.frm.JG15.value, ' ' + document.frm.JG16.value];     // OK 		
    var jogosArray02 = [' ' + document.frm.JG21.value, ' ' + document.frm.JG22.value, ' ' + document.frm.JG23.value, ' ' + document.frm.JG24.value, ' ' + document.frm.JG25.value, ' ' + document.frm.JG26.value];     // OK 		
    var jogosArray03 = [' ' + document.frm.JG31.value, ' ' + document.frm.JG32.value, ' ' + document.frm.JG33.value, ' ' + document.frm.JG34.value, ' ' + document.frm.JG35.value, ' ' + document.frm.JG36.value];     // OK 		
        
    escreveJogos = "JOGOS EM ORDEM CRESCENTE / SOMA" + "\n\n" + jogosArray01.sort() + " = " + document.frm.SOMA01.value + "\n" + jogosArray02.sort() + " = " + document.frm.SOMA02.value + "\n" + jogosArray03.sort() + " = " + document.frm.SOMA03.value + "\n\n"; 

    /* Chama a função de mostraJogos */ 		
    mostraJogos(escreveJogos); 
    
}    


// *********************************************************
// Se o texto tiver 1 carater concatena com 0 antes 
// *********************************************************
function tamanhoTexto(textoNum, nomeComp) {
  if (textoNum.length == 1) {
      if (nomeComp == "NE01") {
          document.frm.NE01.value = "0" + document.frm.NE01.value;
      }
      if (nomeComp == "NE02") {
          document.frm.NE02.value = "0" + document.frm.NE02.value;
      }				
      if (nomeComp == "NE03") {
          document.frm.NE03.value = "0" + document.frm.NE03.value;
      }
      if (nomeComp == "NE04") {
          document.frm.NE04.value = "0" + document.frm.NE04.value;
      }
      if (nomeComp == "NE05") {
          document.frm.NE05.value = "0" + document.frm.NE05.value;
      }
      if (nomeComp == "NE06") {
          document.frm.NE06.value = "0" + document.frm.NE06.value;
      }
      if (nomeComp == "NE07") {
          document.frm.NE07.value = "0" + document.frm.NE07.value;
      }
      if (nomeComp == "NE08") {
          document.frm.NE08.value = "0" + document.frm.NE08.value;
      }
      if (nomeComp == "NE09") {
          document.frm.NE09.value = "0" + document.frm.NE09.value;
      }
  }
}

