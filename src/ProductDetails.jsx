import data from './data/ProductData';

export default function ProductDetails({ onProductChange, selectedProduct, onFeatureChange, selectedFeature }){

    const handleProductChange = (styleName) => {
        onProductChange(styleName);
    }

    return (
    <div className="ProductDetail">
        <h1 className="ProductDetail-title">{data.title}</h1>
        <p className="ProductDetail-description">{data.description}</p>
        <ProductColors handleProductChange={handleProductChange} selectedProduct={selectedProduct}/>
        <ProductFeatures onFeatureChange={onFeatureChange} selectedFeature={selectedFeature} />
        <ProductBuyNowButton />
    </div>
    );
}

function ProductColors({handleProductChange,selectedProduct}){
    return <div>
        <h2>Select Color</h2>
        <div className="ProductItems">
            { data.colorOptions.map((co, index) => <ProductItem selectProduct={() => handleProductChange(co.styleName)} key={index} isSelected={selectedProduct === co.styleName} image={co.imageUrl} />)}
        </div>
    </div>
}

function ProductItem({isSelected, image, selectProduct}){
    return <div onClick={() => selectProduct()}  className={`ProductDetail-pItem ${isSelected ? "isSelected": ""}`}>
        <img src={image} alt="" />
    </div>
}

function ProductFeatures({onFeatureChange, selectedFeature}){
    return <div className="ProductFeatures-section">
        <h2>Features</h2>
        <div className="ProductFeatures">
            {data.featureList.map((f, index) => <ProductFeatureButton clickHandler={() => onFeatureChange(f)} key={index} isSelected={selectedFeature === f} title={f}  />)}
        </div>
        </div>
}

function ProductFeatureButton({title, clickHandler, isSelected}){
    return <button onClick={() => clickHandler()} className={`${isSelected ? 'featureSelected' : 'feature'}`}>
        {title}
    </button>
}

function ProductBuyNowButton(){
    return <button className="ProductBuyButton">
    Buy Now
    </button>
}