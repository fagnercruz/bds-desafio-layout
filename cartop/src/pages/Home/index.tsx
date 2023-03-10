import './style.css';
import ImgHeader from 'assets/images/car-header-1.png';
import ButtonCatalog from 'components/ButtonCatalog';

const Home = () => {
    return (
        <>
            <div className='container-geral'>
                <div className='base-card main-card'>
                    <div className='main-card-contents'> 
                        <h1>O carro perfeito para você</h1>
                        <p>Conheça nossos carros e dê mais um 
                            passo na realização do seu sonho</p>
                    </div>

                    <div className='main-card-image'>
                        <img src={ImgHeader} alt="Carro amarelo" />
                    </div>
                </div>
 
                <div className="base-card secondary-card">
                    <ButtonCatalog />
                    <p>Começe agora a navegar</p>
                </div>

            </div>
        </>
    );
};

export default Home;