import React from "react";
//@ts-ignore
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css'

export const ButtonGroup = ({ blockClass }: { blockClass?: string }) => {
  const { orderForm: {
      items,
      totalizers
  } } = useOrderForm();
  const buttonContainer = generateBlockClass(styles.buttonContainer, blockClass)
  const buttoOne = generateBlockClass(styles.buttonOne, blockClass)
  const buttoTwo = generateBlockClass(styles.buttonTwo, blockClass)
  const containerCart = generateBlockClass(styles.containerCart, blockClass)
    return (
      <div className={containerCart}>
          <div className="bl b--gray pa3">
            <h3 className="ma0">AGREGADO AL CARRITO</h3>
            <p>{items.length} artículos</p>
            <h4>Total: ${totalizers[0]?.value/100}</h4>
        </div>
        <div className={ buttonContainer}>
          <button className={ buttoOne}>
            <p>
              Ver más productos
            </p>
          </button>
          <a href="https://sebastiandev--itgloberspartnercl.myvtex.com/checkout/#/cart">
            <button className={ buttoTwo}>
                <p>Ir al carrito</p>
            </button>
          </a>
        </div>
        </div>
    )
}

