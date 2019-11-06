function requisitar(){
    fetch(url, )
        .then((r)=>r.json())
        .then((json)=>{
            console.log(json);
        });
}

async function requisitar2(){
    const url = 'https://alunos.b7web.com.br/api/ping';

    const r = await fetch(url);
    const json = await r.json();

    console.log(json)

    console.log("...")
}

requisitar2();