import { AiFillHeart, AiOutlineHeart  } from 'react-icons/ai';
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
                    <div className={styles.cardHeader}>
                      <p>{product.name}</p>
                    </div>
                    <div className={styles.cardBody}>
                      <img src={product.imageURL} alt='iphone 12g' width='150' height='150' />
                      <p>de: R$ {product.listPrice}</p>
                      <p>por: R$ {product.salePrice}</p>
                    </div>
                    
                  </div>
                  <div className={styles.iconHeart}>
                    <button className={styles.buttonHeart}>
                      {
                        product.favorite
                        ? <AiFillHeart size={25} color='#dd0d0d'/> 
                        : <AiOutlineHeart size={25}/>
                      }
                    </button>
                  </div> 
                </div>
              </div>
            )
          })}
        </div>
      )
}


export default Main;