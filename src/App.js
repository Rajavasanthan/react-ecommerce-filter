import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { data } from "./data";
import Filter from './filter';
import { useEffect, useState } from 'react';
function App() {
  console.log(data)
  let carData = data;

  const [filteredData,setFilterData] = useState([]);
  const [pageCount,setPageCount] = useState(1);
  const [pageNumbers,setPageNumber] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  
  /*
    {
      pageNum : 3
    }
  */
  let filter = (filterConfig) => {
      // filter the whole data and return result 
      let productObj = [];
      for (let index = 0; index < 6; index++) {
        productObj.push(carData[((filterConfig - 1) * 6) + index]);
      }

      setFilterData([...productObj]);
  }



  useEffect(() => {
    // Will execute for one time during component render in DOM
    console.log("One time")
    
    
    let count = Math.ceil(data.length / 6)
    setPageCount(count)
    for (let index = 1; index < count; index++) {
      pageNumbers.push(index)
    }
    filter(currentPage);
  },[])


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <label>Search</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row mt-3">
        <Filter/>

        <div className="col-lg-9">
          <div className="row">
            {
              filteredData.map((carObj) => {
                  return <Card carObj={carObj}/>
              })
            }
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                  {
                    pageNumbers.map((number) => {
                      return <li class="page-item"><button onClick={() => filter(number)} class="page-link">{number}</button></li>
                    })
                  }
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;