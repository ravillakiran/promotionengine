import { Injectable } from '@nestjs/common';
import { CartData } from '../model/engine.model';

@Injectable()
export class EngineService {
  public getEngineData(cartItems: CartData): number {
    let productCountA = 0;
    let productCountB = 0;
    let productCountC = 0;
    let productCountD = 0;

    const productPrices = this.getPrices();
    console.log(cartItems);
    try {
      if (cartItems?.products?.length) {
        for (const item of cartItems.products) {
          console.log(item);
          if (item.productId === 'A') {
            productCountA = productCountA + 1;
          }
          if (item.productId === 'B') {
            productCountB = productCountB + 1;
          }
          if (item.productId === 'C') {
            productCountC = productCountC + 1;
          }
          if (item.productId === 'D') {
            productCountD = productCountD + 1;
          }
        }
        const totalPriceofA =
          Math.floor(productCountA / 3) * 130 +
          (productCountA % 3) * productPrices.A;
        const totalPriceofB =
          Math.floor(productCountB / 2) * 45 +
          (productCountB % 2) * productPrices.B;
        // const totalPriceofC = productCountC * productPrices.C || 0;
        // const totalPriceofD = productCountD * productPrices.D || 0;
        const priceOfCD = this.getPriceCD(
          productCountC,
          productCountD,
          productPrices,
        );
        return totalPriceofA + totalPriceofB + priceOfCD;
      } else {
        throw 'error';
      }
    } catch (err) {
      console.log(`error while processing the data ${err}`);
      throw err;
    }
  }

  private getPrices() {
    const productPrices = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };

    return productPrices;
  }

  private getPriceCD(productCountC, productCountD, prices) {
    // let largerCount;
    // let smallerCount;
    // if (productCountC > productCountD) {
    //   largerCount = productCountC;
    // } else if (productCountC < productCountD) {
    //   smallerCount = productCountD;
    // } else if (productCountD > productCountC) {
    //   largerCount = productCountD;
    // } else if (productCountD < productCountC) {
    //   smallerCount = productCountC;
    // }
    let promotionAppliedCD = 0;
    let promotionNotAppliedC = 0;
    let promotionNotAppliedD = 0;
    if (productCountD) {
      for (let j = 0; j <= productCountD; j++) {
        if (productCountC > j) {
          promotionAppliedCD = promotionAppliedCD + 1;
        }
      }
    }

    promotionNotAppliedC = Math.abs(promotionAppliedCD - productCountC);
    promotionNotAppliedD = Math.abs(promotionAppliedCD - productCountD);
    return (
      promotionAppliedCD * 30 +
      promotionNotAppliedD * prices.D +
      promotionNotAppliedC * prices.C
    );
  }
}
