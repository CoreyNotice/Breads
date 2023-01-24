const React=require('react')
const Default=require('./layout/Default')

function Index({breads,title}){
    return(
        <Default title={title}>
            <h2>Index Page</h2>
            {/* <p>Get your {breads[0].name} bread here!</p> */}
            <ul>
                {
                    breads.map((bread,index)=>{
                        return(<li key={index}>
                            <a href={`/breads/${index}`}>
                                {bread.name}
                            </a>
                        </li>
                        )
                    })
                }

            </ul>
        </Default>
    )
}

module.exports=Index