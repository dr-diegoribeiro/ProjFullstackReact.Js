//import './Contato.css';

export default function Contato(){
    const controleEnvio = async (evento) => {
        

        const url = "http://localhost/testes/Fullstack_ultimate/PHP/connect/insert_pedidos.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado);
    }

    return(
        <div className="container mt-4">
        <h3 className="text-center display-4">Faça seu Pedido!</h3>
        <form onSubmit={controleEnvio}> 
            <div className="form-group">
                <label for="text">Nome</label>
                <input type="text" className="form-control" name="nome_cli" id="nome_cli"></input>
            </div>
            <div className="form-group">
                <label for="telefone">Telefone</label>
                <input type="telefone" class="form-control" name="telefone" id="telefone"></input>
            </div>
            <div className="form-group">
                <label for="endereco_cli">Endereço</label>
                <input type="endereco_cli" class="form-control" name="endereco_cli" id="endereco_cli"></input>
            </div>
            <div className="form-group">
                <label for="cidade_cli">Cidade</label>
                <input type="cidade_cli" class="form-control" name="cidade_cli" id="cidade_cli"></input>
            </div>
            <div className="form-group">
                <label for="cep_cli">Cep</label>
                <input type="cep_cli" class="form-control" name="cep_cli" id="cep_cli"></input>
            </div>
            <div className="form-group">
                <label for="uf_cli">Estado</label>
                <input type="uf_cli" class="form-control" name="uf_cli" id="uf_cli"></input>
            </div>
            <div class="form-group, col-sm-20 my-1">
                        <label for="produto">Selecione o motivo do seu contato: </label>
                        <select multiple class="form-control" name="produto" id="produto">
                            <option>Geladeira Grost Brastemp Side Inverse 375L</option>
                            <option>Geladeira Brastemp Side Porta Dupla 540L</option>
                            <option>Geladeira Brastemp 540L 2P Suporte para Água</option>
                            <option>Fogao 4 bocas Eletrolux com Mesa de Vidro</option>
                            <option>Fogão Brastemp Preto 6 Bocas de Vidro</option>
                            <option>Microondas 25L Espelhado Eletrolux 220V</option>
                            <option>Microondas Tabajara 20L Cromado Automático</option>
                            <option>Microondas Philco 25L Branco Espelhado</option>
                            <option>Lava e Seca Roupas Samsung Ecobubble 15kg</option>
                            <option>Máquina de Lavar Brastemp Advanced 12Kg</option>
                            <option>Lava Louças Brastemp - 14 Serviços</option>
                            <option>Lava Louças Brastemp 10 Serviços - 220V</option>
                        </select>
                    </div>
            <div className="form-group">
                <button className="btn btn-dark mt-3" type="submit">Enviar</button>
            </div>
        </form>            
        </div>    
    );
}