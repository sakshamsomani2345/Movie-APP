import React, { Component } from "react";
import { movies } from "./getMovies";
export default class Favourite extends Component {
    constructor(){
        super();
        this.state={
            genres:[],
            currgen:'All Genres'
        }
    }
  render() {
    const movie=movies.results; 
let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    let temparr=[];
    movie.forEach((movieobj)=>{
        if(!temparr.includes(genreids[movieobj.genre_ids[0]])){
            temparr.push(genreids[movieobj.genre_ids[0]]);
        }
    })
    temparr.unshift("All Genres");
    // this.setState({
    //     genres:[...temparr]
    // })
    return (
      <>
        <div className="main">
          <div className="row">
            <div className="col-3">
              <div className="list-group favourites-genres ">
                {
                    temparr.map((genre)=>{
                      return this.state.currgen==genre?
                       <div 
                       style={{
                        background:'#3f51b5',
                        color:"white",
                        fontWeight:"bold"
                       }}className="list-group-item">{genre}</div>:
                       <div 
                       style={{
                        background:'white',
                        color:"#3f51b5",
                        fontWeight:"bold"
                       }}className="list-group-item">{genre}</div>
                    })
                }
              </div>
            </div>
            <div className="col-9 favourites-table">
              <div className="row">
                <input type="text" 
                placeholder="Search" className="input-group-text col" />
                <input type="number" 
                placeholder="Search" className="input-group-text col" />
              </div>
              <div className="row">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        movie.map((movieobj)=>{
                           return  <tr>
                            <td>
                                <img
                                style={{
                                    width:"5rem",
                                    margin:".3rem"
                                }}
                                src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`}
                      alt={movieobj.title} />
                                {movieobj.original_title}</td>
                            <td>{genreids[movieobj.genre_ids[0]]}</td>
                            <td>{movieobj.popularity}</td>
                            <td>{movieobj.vote_average}
                           
                            </td>
                            <td> <button className="btn btn-danger">Delete   </button></td>

                          </tr>
                        })
                    }
                    
                  
                  
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}
