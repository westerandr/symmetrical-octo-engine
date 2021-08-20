import data from './data/ProductData';

export default function ProductView({image, selectedFeature}){
    return (<div className="ProductView">
       <img src={image} alt="" />
       <div className="ProductView-center">
        { data.featureList[0] === selectedFeature ? <CurrentTime /> : <HeartRate />}
       </div>
        

    </div>);
}


function CurrentTime(){

    const date = new Date();
    const result = `${date.getHours()}:${date.getMinutes().toString().length  === 1 ? "0" + date.getMinutes() : date.getMinutes() }`;

    return <h1 className="Time">{result}</h1>
  
}


function HeartRate(){
    return <div className="Heart-Rate">
        <i className="fas fa-heartbeat"></i>
        <p>78</p>
    </div>;
}
