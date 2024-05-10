import { useState } from 'react';

function App() {
    const [endereco, setEndereco] = useState({
        logradouro: '',
        bairro: '',
        localidade: ''
    });

    const handleCEPChange = async (event) => {
        const cep = event.target.value;
        console.log("CEP digitado pelo usuário: ", cep);

        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setEndereco({
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade
        });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <img src="./map.svg" alt="" style={{ width: '100%' }} />
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="CEP" className="form-label">CEP</label>
                                    <input type="text" className="form-control" id="CEP" placeholder="EX: 12345678" onBlur={handleCEPChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="LOGRADOURO" className="form-label">LOGRADOURO</label>
                                    <input type="text" className="form-control" id="LOGRADOURO" placeholder="EX: Rua, Travessa y, Avenida" value={endereco.logradouro} onChange={(e) => setEndereco({ ...endereco, logradouro: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="numero" className="form-label">NÚMERO</label>
                                    <input type="text" className="form-control" id="numero" placeholder="EX: 123" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bairro" className="form-label">BAIRRO</label>
                                    <input type="text" className="form-control" id="bairro" placeholder="EX: Passare" value={endereco.bairro} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cidade" className="form-label">CIDADE</label>
                                    <input type="text" className="form-control" id="cidade" placeholder="EX: Fortaleza" value={endereco.localidade} readOnly />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="uf" className="form-label">UF</label>
                                    <input type="text" className="form-control" id="uf" placeholder="EX: CE" />
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
