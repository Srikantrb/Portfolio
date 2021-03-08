import React from 'react'


/*
It will demonstrates navigating elements of an array with the help of arrows 
*/

function test() {
    var array = ["1","2","3","4","5"];
    // const [array] = useState([]);
    const [element,setElement] = useState(array[0]);    
    const [i,seti] = useState(0);


    useEffect(()=>{
        if(i<1){
            document.getElementById("leftbtn").style.display = "none" ;
        }else if(i>=(array.length-1)){
            document.getElementById("rightbtn").style.display = "none" ;
        }else{
            document.getElementById("leftbtn").style.display = "block" ;
            document.getElementById("rightbtn").style.display = "block" ;
        }
    },[i]);
    const lclickhandler = ()=>{
        if(i>0){
            setElement(array[i-1]);
            seti(i-1);
        }
    }
    const rclickhandler = ()=>{
        if(i<(array.length-1)){
            setElement(array[i+1]);
            seti(i+1);
        }
    }

    return (
        <div>
            <button id = "leftbtn" type = "button" onClick = {()=>lclickhandler()}>{`<`}</button>
                <h1>{element}</h1>
            <button id ="rightbtn" type = "button" onClick = {()=>rclickhandler()}>{`>`}</button>
        </div>
    )
}

export default test
