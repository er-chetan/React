function DynamicCompo(){
    let name="chetan";

    let fullname = () =>{
        return name+" kumar"
    }

    return <h1>
        this is my name {fullname()};
    </h1>
}

export default DynamicCompo;