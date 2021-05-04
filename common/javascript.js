      var arr = [10, 45, 99, 1, 34, 78, 100, 22, 2, 55];

      function setOrdering(arrParam) {
        for (var a = 0; a < arrParam.length; a++) {
          for (var b = 0; b < arrParam.length; b++) {
            if (arrParam[b] > arrParam[b + 1]) {
              var temp = arrParam[b];
              arrParam[b] = arrParam[b + 1];
              arrParam[b + 1] = temp;
            }
          }
        }
      }

      function getLotto(){
          //로또번호를 문자열로 표현하기 위한 변수
          var lottoStr = "";
          //로또번호를 저장할 배열
          var lottoNum = [0,0,0,0,0,0];
          //로또 배열의 인덱스로 채울 때마다 1씩 증가시킴
          var index = 0;
          //중복값 확인용 변수
          var flag = false;


          /*
          배열에 중복된 난수가 없을때 하나씩 채워가면서 1씩 증가하므로
          총 6번 반복할 것임
          */
          while(index<6){
              //1~45사이의 난수 생성
              var randomNum = parseInt(Math.random()*45) + 1;
              /*
            배열에 저장된 요소와 난수를 비교하여 중복이 확인되면 flag를
            true로 변경한다.
              */
              for(var i=0; i<lottoNum.length; i++){
                  if(lottoNum[i]==randomNum){
                      flag = true;
                      break;//중복값이 확인되면 즉시 루프 탈출
                  }
              }

              if(flag==true){
                  /*
                  중복된 난수가 확인되면 처음으로 돌아가서 난수를 다시
                  생성한다. 이때 flag를 false로 초기화 해야 한다.
                  */
                  flag = false;
                  continue;
              }
              else{
                  /*
                  중복된 값이 없다면 배열을 채워주고 index를 1증가 시킨다.
                  */
                  lottoNum[index++] = randomNum;
              }
          }
          //오름차순 정렬
          setOrdering(lottoNum);
          for(var i=0; i<lottoNum.length; i++){
              lottoStr += lottoNum[i] +"&nbsp;";
          }
          document.getElementById("lottoNumber").innerHTML = lottoStr;
      }