import React from 'react';


const Dashbord = () => {
    return (
        <>
        <div style={{display:"flex",  justifyContent:'space-between',justifyItems:'center', flexWrap:"wrap",  textAlign:"center", marginTop:"100px" }}>
            <div>
             <a href="/postblog"> 
             <button style={{color:'gold'}}>POST BLOG</button>
             </a>
            </div>
            <div>
             <a href="/uploadbook"> 
             <button style={{color:'gold'}}>UPLOAD BOOK</button>
             </a>
            </div>
            <div>
             <a href="/uploadvideo"> 
             <button style={{color:'gold'}}>UPLOAD VIDEO</button>
             </a>
            </div>
            <div>
             <a href="/postseminar"> 
             <button style={{color:'gold'}}>POST SEMINAR</button>
             </a>
            </div>
            <div>
             <a href="/postblog"> 
             <button style={{color:'gold'}}>POST BLOG</button>
             </a>
            </div>
        </div>
        </>
    )
}


export default Dashbord