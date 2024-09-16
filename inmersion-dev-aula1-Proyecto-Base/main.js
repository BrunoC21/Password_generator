let sizepassword = document.getElementById('cantidad');
let button = document.getElementById('generar');
let generatedpassword = document.getElementById('contrasena');

const language = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$&^*@()[]¡¿?';

function sayPassword(){
    
    let digitedNum = parseInt (sizepassword.value);
    if( digitedNum < 8){
        alert("Cantidad de caracteres muy pequeña, prueba otra cantidad");
    }else{
        let password = '';
        for(let i = 0; i < digitedNum; i++){
            let randomchar = language[Math.floor(Math.random() * language.length)];
            password = password + randomchar;
        }

        generatedpassword.value = password;

        if(hasUpperNumOrSymbol(generatedpassword.value) ){
            alert("La contraseña es fuerte y segura");
        }else{
            alert("La contraseña es debil, intenta generar otra");
        }
    }

    

}

function hasUpperNumOrSymbol(str){
    const checkUpper = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/.test(str);
    const checkNumber = /[0123456789]/.test(str);
    const checkSymbol = /[!"#$&^*@()[]¡¿?]/.test(str);

    return checkNumber || checkUpper || checkSymbol;
}










