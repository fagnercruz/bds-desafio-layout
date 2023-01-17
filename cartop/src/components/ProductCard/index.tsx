import './style.css';
import ProductImage from 'assets/images/car-card-1.png';
import ButtomBuyNow from 'components/ButtonBuyNow';

const ProductCard = () => {
    return(
        <div className='base-card productCard-container'>
            <div className=' productcard-image-container'>
                <img src={ProductImage} alt="carrinho lindo" />
            </div>
            <div className='productCard-info-container'>
                <h3>Audi Supra TT</h3>
                <p>Motor Boster V8 original do fusca com 350cv de pura ignorância</p>
            </div>
            <ButtomBuyNow />
        </div>
    );
};

export default ProductCard;