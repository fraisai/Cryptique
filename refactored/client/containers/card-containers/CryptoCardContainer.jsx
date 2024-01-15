import React from 'react'
import { CoinCard } from '../../componentImports';
import { Spinner } from '../../componentImports';
const CryptoCardContainer = ({ market }) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      

    if (market.length > 0) {
        return (
            <main >
                <div className="responsive-three-columns">
                    {market.map(el => {
                        // console.log(el.sparkline_in_7d)
                         
                        return (
                            <div>
                                <CoinCard 
                                    img={el.image}
                                    key={el.id}
                                    name={el.name} 
                                    price={formatter.format(el.current_price)}
                                    data={el.sparkline_in_7d.price}
                                />
                            </div>
                        )
                    })}
                </div>
            </main>
      )
    
    } else {
        return <Spinner/>;
    }
}

export default CryptoCardContainer