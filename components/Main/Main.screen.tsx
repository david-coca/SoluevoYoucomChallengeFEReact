import Image from 'next/image';
import styles from './Main.module.css';
import { MainProps } from './Main.types';

function Main ({products}: MainProps) {


  return (
        <div className={styles.container}>
          {products && products.map((product, index) => {
            return (
              <div key={index}>
                <div className={styles.content}>
                  <div className={styles.card}>
                    {product.name} 
                    <Image src={product.ImageURL} alt='' width="200" height="100" />
                    {product.listPrice}
                    {product.salePrice}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
}


export default Main;