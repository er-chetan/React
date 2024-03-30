
let CurrentDate=function(){
    let date=new Date();
    return <h3 className="mt-3">
        This is current date : {date.toLocaleDateString()}
    </h3>
}
export default CurrentDate;