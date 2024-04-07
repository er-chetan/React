function Map(){
    let fooditem=['dal','sabji','paneer','rice','chapati'];
    return<div className="mt-5">
        <h1 className="text-danger">hey this is a map</h1>
        <ul className="list-group">
            {fooditem.map((item)=>(
                <li className="list-group-item">{item}</li>
            ))}
        </ul>
    </div>
}

export default Map;