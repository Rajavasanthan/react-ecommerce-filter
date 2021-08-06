import React from 'react'

function Filter() {
    let brands = ["Toyota","Volkswagen","BMW","Mercedes-Benz","Ford","Nissan","Honda","Porsche","Hyundai Motors","Renault","Peugeot","Chevrolet","Fiat","Audi","Kia Motors","Suzuki","General Motors","Citroën","Daimler","GMC","JLR","Ferrari","Tata Motors","Mazda","Subaru","Lexus","Volvo","MINI","Vauxhall","Isuzu","Dongfeng Motor","Mitsubishi Motors","Mahindra and Mahindra","Daihatsu","Jeep","Kenworth","Dodge","Cadillac","Chrysler","Skoda","Acura","Infiniti","Buick","Lincoln","RAM Trucks","Maruti Suzuki","Smart","Dacia","FAW","Seat"]
    let colors = ["red","orange","yellow","green","blue","indigo","violet"]
    return (
        <div className="col-lg-3">
          <div class="card">
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Brands </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                  <form>
                    {
                        brands.map((brand) => {
                            return <label class="form-check">
                            <input class="form-check-input" type="checkbox" value="" />
                            <span class="form-check-label">
                             {brand}
                            </span>
                          </label>
                        })
                    }
                  
                  </form>

                </div>
              </div>
            </article>
            <article class="card-group-item">
              <header class="card-header">
                <h6 class="title">Choose type </h6>
              </header>
              <div class="filter-content">
                <div class="card-body">
                 {
                     colors.map((color) => {
                        return  <label class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadio" value="" />
                        <span class="form-check-label">
                          {color}
                        </span>
                      </label>
                     })
                 }
                 
                
                </div>
              </div>
            </article>
          </div>

        </div>
    )
}

export default Filter
