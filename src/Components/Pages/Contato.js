import './Contato.css';

export default function Contato(){
    const controleEnvio = async (evento) => {
        

        const url = "http://localhost/testes/Fullstack_ultimate/PHP/connect/insert_mensagem.php";
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
        <h3 className="text-center display-4">Fale Conosco!</h3>
        <form onSubmit={controleEnvio}> 
            <div className="form-group">
                <label for="text">Nome</label>
                <input type="text" className="form-control" name="nome" id="nome"></input>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email"></input>
            </div>
            <div class="form-group, col-sm-20 my-1">
                        <label for="motivo">Selecione o motivo do seu contato: </label>
                        <select multiple class="form-control" name="motivo" id="motivo">
                            <option>Dúvidas</option>
                            <option>Reclamação</option>
                            <option>Elogios</option>
                            <option>Problemas com Entrega</option>
                            <option>Problemas Técnicos (site)</option>
                            <option>Outros</option>
                        </select>
                    </div>
            <div className="form-group">
                <label>Digite sua mensagem</label>
                <textarea class="form-control" name="mensagem" id="mensagem"/>
                <button className="btn btn-dark mt-3" type="submit">Enviar</button>
            </div>
        </form>
        <div className="redesfooter backgroud:red">
            <p className="text-center display-4">siga-nos nas redes </p>
            <div className="d-flex text-center mt-5">  
            <div className="redes">
                <div className="hover">
                    <img src={require('../Img/redesocial/face.png').default} alt="" />
                    <img src={require('../Img/redesocial/instagram.png').default} alt=""/>
                    <img src={require('../Img/redesocial/twitter.png').default} alt=""/>
                    <img src={require('../Img/redesocial/linkedin.png').default} alt=""/>
                    </div> 
                    <br></br>
                    <div className="contato">
                    <a href="mailto:contato@fullstackeletro.com.br">
                    <img width="90" src={require('../Img/redesocial/email.png').default} alt=""/> </a>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511962441455" target="_blank">
                    <img width="80" src={require('../Img/redesocial/whatsapp.png').default} alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    );
}