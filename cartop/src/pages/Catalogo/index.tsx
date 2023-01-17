import ProductCard from "components/ProductCard";
import "./style.css";

const Catalogo = () => {
  return (
    <div className="main-container">
        <div className="base-card search-card">
            <input type="text" placeholder="Digite sua busca" />
            <button className="btn">BUSCAR</button>
        </div>

        <div className="catalogoList-container">
            <ProductCard />
        </div>
    </div>
  );
};

export default Catalogo;
