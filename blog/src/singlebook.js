const booka = {
  id: 1,
  img: 'https://preview.redd.it/something-always-has-to-go-wrong-with-it-v0-g1xbe9pwkg3d1.jpeg?auto=webp&s=a7e380424067fe8c2809bb2255c14d0dd4e057be',
  title: '史瑞克',
  author: 'video game is fun to play',
};
const bookb = {
  id: 2,
  img: 'https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png',
  title: '黑人問號',
  author: 'living in the gangsta paradise',
};
const bookc = {
  id: 3,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hoZ13thA6h66xTqSJCU_aLv9dHv9aBPnPw&s',
  title: '不要瞎掰好嗎',
  author: 'full of energy',
};

export { booka, bookb, bookc };

var data = [
  {
    id: 1,
    img: 'https://preview.redd.it/something-always-has-to-go-wrong-with-it-v0-g1xbe9pwkg3d1.jpeg?auto=webp&s=a7e380424067fe8c2809bb2255c14d0dd4e057be',
    title: '史瑞克',
    author: 'video game is fun to play',
  },
  {
    id: 2,
    img: 'https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png',
    title: '黑人問號',
    author: 'living in the gangsta paradise',
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hoZ13thA6h66xTqSJCU_aLv9dHv9aBPnPw&s',
    title: '不要瞎掰好嗎',
    author: 'full of energy',
  },
];

function Booklist() {
  return (
    <section className='blogs-center'>
      {data.map(function callfun(value, index) {
        const { id, img, title, author } = value;
        return <Blog key={id} img={img} wtitle={title} author={author}></Blog>;
      })}
    </section>
  );
}

const Blog = ({ img, title, author }) => {};
export default Booklist;
