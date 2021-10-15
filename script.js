async function carregarPosts(){
    document.getElementById('posts').innerHTML = "Carregando....";
    
    await fetch ( "https://jsonplaceholder.typicode.com/posts") 
       .then(function(resultado){
           return resultado.json();
       })
       .then(function(json){
        
        montarBlog(json)

           
       })
       .catch(function(error){
           console.log("Deu Algo Errado");
       })

}
function montarBlog(lista){
    let html = '';

    for(let i in lista){
        
        html += '<h3>'+lista[i].title+'</h3>';
        html += '<p>'+lista[i].body+'</p>';
        html += '<hr/>';
        
    }
    document.getElementById('posts').innerHTML = html;
}