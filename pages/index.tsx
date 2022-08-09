import type { NextPage } from 'next'
import {Header, Footer, Main} from '../components'
import styles from '../styles/Home.module.css'
import { MainProps } from './../components/Main/Main.types';


const Home: NextPage = ({products}:MainProps) => {
  return (
    <div className={styles.container}>
      <Header />
        <Main products={products}/>
      <Footer />
    </div>
  )
}
export async function getStaticProps() { 
  const products = [
    { 
      id: 1,
      name: 'Iphone 12G',
      favorite: true,
      imageURL: 'https://images-americanas.b2w.io/produtos/01/00/img/3591020/9/3591020951_1GG.jpg',
      listPrice: '1500,00',
      salePrice: '1350,00'
    },
    { 
      id: 2,
      name: 'Iphone 12G',
      favorite: true,
      imageURL: 'https://i.zst.com.br/thumbs/12/1f/39/-522504470.jpg',
      listPrice: '1500,00',
      salePrice: '1350,00'
    },
    { 
      id: 3,
      name: 'Iphone 12G',
      favorite: false,
      imageURL: 'https://imgs.pontofrio.com.br/1518706150/1xg.jpg?imwidth=292',
      listPrice: '1500,00',
      salePrice: '1350,00',
    }
  ]
  
  return {
     props: {products} ,
  } }
export default Home
