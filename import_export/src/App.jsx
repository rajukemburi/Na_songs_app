import {Main} from  "./components/import_export"


// const App=() =>{
//     return <>
//         <h1>Hello</h1>

//     </>
// }
// export default App


const Export=()=>{
    return <>
        <div style={{display:"flex",justifyContent:"center",gap:"15px", boxShadow:"0px 0px 10px black",borderRadius:"20px"}}> 
            <div style={{marginTop:"15px"}}>
                <img src="music.png" alt="" style={{height:"50px"}}/>
            </div> 
            {/* <h1>Naa songs</h1> */}
            <h2>my songs my life</h2>
            </div>
        <Main/>
        
    </>
}

export default Export



