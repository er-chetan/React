let CurrentTime=()=>{
    let date=new Date();
    return <h3 className="mt-3">
        This is current time : {date.toLocaleTimeString()}
    </h3>
}
export default CurrentTime;