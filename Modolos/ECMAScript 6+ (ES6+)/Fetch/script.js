const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method: 'POST',
    body: JSON.stringify({
        nome: 'Wallison',
        idade: 99
    })
}


fetch(url, )
    .then((r)=>r.json())
    .then((json)=>{
        console.log(json);
    });