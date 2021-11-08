function acesso (form){

form.nome.value = form.nome.value.toLowerCase()
form.senha.value = form.senha.value.toLowerCase()

if (form.nome.value == "william" && form.senha.value == "123456" 
|| form.nome.value == "gabi" && form.senha.value == "123456" 
|| form.nome.value == "maria" && form.senha.value == "123456" 
|| form.nome.value == "joao" && form.senha.value == "123456" ){
    location ="index.html"
}

else{
    form.nome.value=""
    form.senha.value=""
    alet("dados incorretos")


}
}