


let result = document.getElementById('button')
result.addEventListener('click',

    async function foo() {
        try {
            let Name = document.getElementById('Name').value
            console.log(Name);
            let data = await fetch(`https://api.nationalize.io/?name=${Name}`)
            let res = await data.json();
            console.log(res);
            console.log(res.country)
            console.log(res.country[0].country_id)
            console.log(res.country[0].probability)
            console.log(res.country[1].country_id)
            console.log(res.country[1].probability)


            let output = document.getElementById('details')
            output.innerHTML = `  <div class="col-sm-6 mx-auto m-0 p-0">
         <div class="card  mr-2  ">
          <div id =" country" class= "card-body">
                    <div class="row">
        
                    <div class="col-md-6">
                    <h3>Probeblity1</h3>
                    <hr>
                    <p class="card-text"><p class="text-success"> country:${res.country[0].country_id} </p></p>
                    <hr>
                    <p class="card-text"><p class="text-danger"> probability :${res.country[0].probability}  </p></p>
                    </div>
                       <div class="col-md-6">
                       <h3>Probeblity2</h3>
                    <hr>
                    <p class="card-text" > <p class="text-success"> country:${res.country[1].country_id} </p> </p>
                    <hr>
                   <p class="card-text"> <p class="text-danger">  probability :${res.country[1].probability} </p></p>
                       </div>
                    </div>
                    </div>
             </div>
         </div>`



        }
        catch (err) {
            console.log("error")
        }
    })


