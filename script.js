// let url = 'https://icanhazdadjoke.com/';
// async function getJoke(){
//     try{
//         const config={Headers:{AcceptCH:application/jason}}

//         let res= await axios.get(url,config);
//         console.log(res.data);
   
//     }catch (err){
//         console.log("Error is:",err)
//         return "Hey! Error caught"
//     }
// }

let url='http://universities.hipolabs.com/search?name=';
let btn=document.querySelector("button")
btn.addEventListener(("click"),async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colleges= await getCollege(country);
    Show(colleges);
})

function Show(colleges){
    let list =document.querySelector("#list")
    list.innerHTML=""; 
    for(college of colleges){
        console.log(college.name);
        let li=document.createElement("li")
        li.innerHTML=college.name;
        list.appendChild(li);

    }

}

let country="nepal";

async function getCollege(country){
    try{
        let res= await axios.get(url+country);
        return res.data;
    }catch{
        return [];
    }
}