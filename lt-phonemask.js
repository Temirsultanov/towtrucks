(function(){
  let phoneInputs = document.querySelectorAll('.lt-phonemask');
  let phoneLength = 16;
  let iv;
  for (let input of phoneInputs) { 
      input.addEventListener('input', function(){
          iv = input.value;   
          for (let i = iv.length - 1; i >= 0; i--) {
              let char = iv[i];  
              if (char > 0 || char === '0') {

              }
              else{
                  iv = iv.slice(0, i) + iv.slice(i + 1, iv.length);
              }
          }
          if (iv.length === 11 && iv[0] === '8') {
              iv = iv.slice(1, iv.length);
          }
          for (let i = 0; i < iv.length; i++) {
              let char = iv[i];  
              if (i === 0 && char !== '+') {
                  iv = '+' + iv;
              }
              if (i === 1 && char !== '7') {
                  iv = iv.slice(0, 1) + '7' + iv.slice(1, iv.length);
              }
              if (i === 2 && char !== '(') {
                  iv = iv.slice(0, 2) + '(' + iv.slice(2, iv.length);
              }
              if (i === 6 && char !== ')') {
                  iv = iv.slice(0, 6) + ')' + iv.slice(6, iv.length);
              }
              if (i === 10 && char !== '−') {
                  iv = iv.slice(0, 10) + '−' + iv.slice(10, iv.length);
              }
              if (i === 13 && char !== '−') {
                  iv = iv.slice(0, 13) + '−' + iv.slice(13, iv.length);
              } 
          } 
          iv = iv.slice(0, phoneLength);
          if (iv.length < 3) {
              iv = '+7(';
          }
          input.value = iv;
      });
      input.addEventListener('focus', function(){
          if (input.value.length < 2) {
              input.value = '+7(';
          }
          
      });
  }
})();