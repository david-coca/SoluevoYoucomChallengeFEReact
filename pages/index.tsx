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
      imageURL: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_new-design_10132020_big.jpg.large.jpg',
      listPrice: '1500,00',
      salePrice: '1350,00'
    },
    { 
      id: 2,
      name: 'Iphone 12G',
      favorite: true,
      imageURL: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_new-design_10132020_big.jpg.large.jpg',
      listPrice: '1500,00',
      salePrice: '1350,00'
    },
    { 
      id: 3,
      name: 'Iphone 12G',
      favorite: false,
      imageURL: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_new-design_10132020_big.jpg.large.jpg',
      listPrice: '1500,00',
      salePrice: '1350,00',
    }
  ]
  
  return {
     props: {products} ,
  } }
export default Home
