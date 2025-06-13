import logo from './logo.svg';
import './App.css';
import Booklist from './singlebook';
import { booka, bookb, bookc } from './singlebook';

function App() {
  return (
    <div className='blogs'>
      <div className='section-title'>
        <h2>meme</h2>
      </div>
      <div className='blogs-center'>
        <Blog
          img={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtomW39N8aQHQih1TdrdLsbbiabnAZF0cKrg&s'
          }
          title={'oiiaioiiiiai'}
          author={'bro think he is cool af'}
        ></Blog>
        <Blog img={booka.img} title={booka.title} author={booka.author}></Blog>
        <Blog img={bookb.img} title={bookb.title} author={bookb.author}></Blog>
        <Blog img={bookc.img} title={bookc.title} author={bookc.author}></Blog>
      </div>
    </div>
  );
}
export default App;

const Blog = ({ img, title, author }) => {
  return (
    <article className='blog'>
      <img src={img} alt='coffee' className='img blog-img'></img>
      <div className='blog-content'>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </article>
  );
};
