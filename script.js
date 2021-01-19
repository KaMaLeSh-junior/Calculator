function send(i) {

    X = document.getElementById("data");


    switch (i) {

        case 1: X.value += 1; break;
        case 2: X.value += 2; break;
        case 3: X.value += 3; break;
        case 4: X.value += 4; break;
        case 5: X.value += 5; break;
        case 6: X.value += 6; break;
        case 7: X.value += 7; break;
        case 8: X.value += 8; break;
        case 9: X.value += 9; break;
        case 0: X.value += 0; break;


        case '+': X.value += '+'; break;
        case '-': X.value += '-'; break;
        case '*': X.value += '*'; break;
        case '/': X.value += '/'; break;
        case '%': X.value += '%'; break;
        case 'AC': X.value = ''; break;
        case '.': X.value += '.'; break;
        case 'b': var str = document.getElementById("data").value;
            str = str.substr(0, str.length - 1);
            document.getElementById("data").value = str;


        case '=':

            result = eval(X.value);
            X.value = result;
            break;

    }

}




                // function send(i)
        // {

        //     X=document.getElementById("data");


        //     switch(i){

        //         case 1:X.value+=1;break;
        //         case 2:X.value+=2;break;
        //         case 3:X.value+=3;break;
        //         case 4:X.value+=4;break;
        //         case 5:X.value+=5;break;
        //         case 6:X.value+=6;break;
        //         case 7:X.value+=7;break;
        //         case 8:X.value+=8;break;
        //         case 9:X.value+=9;break;
        //         case 0:X.value+=0;break;


        //         case '+':X.value+='+';break;
        //         case '-':X.value+='-';break;
        //         case '*':X.value+='*';break;
        //         case '/':X.value+='/';break;
        //         case '%':X.value+='%';break;
        //         case 'AC':X.value='';break;
        //         case '.':X.value+='.';break;
        //         case 'b':var str=document.getElementById("data").value;
        //                  str=str.substr(0,str.length-1);
        //             document.getElementById("data").value=str;


        //         case '=':

        //             result=eval(X.value);
        //             X.value=result;
        //             break;

        //     }

        // }