
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Movies from './movieData.json'
import Pages from './components/Pages';
import Footer from './components/Footer';

function App() {
  const arr = ["<< first","<< Previous",1,2,3,4,5,6,7,8,9,10,"...","Next >>"];
  return (
    <div className="App">
      <Header />
      <div className='Main'>
        <h2 className='MovieTitle'>All Movies of Batman and Star wars</h2>
        <div className='pages'>
          {
            arr.map((elem)=>{
              return(
                <Pages name={elem}/>
              )
            })
          }
        </div>
        <div className='MovieBox'>
          {
            Movies.map((element, index)=>{
              return (
              <Movie 
              key={index}
                title={element.Title} 
                year = {element.Year} 
                image = {element.Poster} /> 
            )
            })
          }
        </div>
        <div className='pages'>
          {
            arr.map((elem)=>{
              return(
                <Pages name={elem}/>
              )
            })
          }
        </div>
        <div className='footer'>
          <Footer />
        </div>
        
      </div>
    </div>
  );
}
 
export default App;
