import React, { Fragment } from "react";
// import { useProduct } from "vtex.product-context";
//@ts-ignore
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css'


export const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__item = generateBlockClass(styles.container__item, blockClass)
    const container__image = generateBlockClass(styles.container__image, blockClass)
    const prices = generateBlockClass(styles.prices, blockClass)
  const { orderForm: {
      items,
      totalizers
    } } = useOrderForm();
  console.log(`informacion ${totalizers[0]}`)
  return (
    <Fragment>
      <div className={ container}>
        {
            items.map((item: any, index: number) => {
            return (
              <div key={index} className={ container__item}>
                <div className={ container__image}>
                        <img src={item.imageUrls.at1x}/>
                    </div>
                <div className={prices}>
                        <p>{item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>${item.price/100}</p>
                    </div>
                </div>
            )
        })
        }
        <ButtonGroup/>
      </div>
    </Fragment>
  )
}
