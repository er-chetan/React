export default function Random_Number(){
    let num=Math.random()*100;
    return <h2 style={{"color" : "#A89634"}}>
        this is your random number is {Math.round(num)}
    </h2>
}