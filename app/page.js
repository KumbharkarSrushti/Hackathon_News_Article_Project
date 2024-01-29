import NewsProduct from "./FetchApi.js"
const Home=()=>{
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 box1"></div>
        <div className="d-flex justify-content-center box2">
          <img className="" src="/Frame 7.png" alt="Picture of the author"></img>
        </div>
        <div className="col-sm-12 box3"></div>
      </div>
     <div className="row1">
     <div className="col-sm-12">
        <form className="mt-4" >
          <div className="mb-3">
            <input type="text" className="form-control" id="query" name="query"/>
          </div>
          <button type="submit" className="btn btn-danger">Go</button>
        </form>
      </div>
      </div>
      <NewsProduct/>
    </div>


  )
}
export default Home