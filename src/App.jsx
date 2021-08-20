import { useState } from 'react';
import './App.css';
import logo from './logo.png';
import ProductView from './ProductView';
import ProductDetails from './ProductDetails';
import data from './data/ProductData';


function App() {

  const [selectedProduct, setSelectedProduct] = useState(data.colorOptions[0].styleName)
  const [selectedFeature, setSelectedFeature] = useState(data.featureList[0])


  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="Logo" />
      </header>
      <main className="Container">
        <ProductView image={data.colorOptions.find(el => el.styleName === selectedProduct).imageUrl}  selectedFeature={selectedFeature}/>
        <ProductDetails selectedProduct={selectedProduct} onProductChange={setSelectedProduct} onFeatureChange={setSelectedFeature} selectedFeature={selectedFeature} />
      </main>

    </div>
  );
}

export default App;
