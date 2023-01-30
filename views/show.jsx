const React=require ('react')
const Default= require('./layout/Default')

function Show ({bread,index}){
    // console.log(bread.name)
    return(
        <Default>
{/*             
          <form action={`/breads/${index}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
            </form> */}

            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten 
                    ? <span> does </span>
                    : <span> does <u>not</u> </span> 
                }
                 have gluten.
            </p>
            <img src={bread.image} alt={bread.name}/>
            <li><a href='/breads'>Go Home</a></li>
        </Default>
    )
}

module.exports=Show