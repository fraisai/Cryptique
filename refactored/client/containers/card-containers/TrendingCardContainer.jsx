import React from 'react'
import CoinCard from '../../components/CoinCard';
import { Spinner } from '../../componentImports';

const TrendingCardContainer = ({ trending }) => {

    if (trending.length > 0) {
        return (

    <main >
        <div className="responsive-three-columns">
            {trending.map(el => {
                return (
                    <div><CoinCard 
                        img={el.item.large}
                        key={el.item.id}
                        name={el.item.name} 
                        price={el.item.data.price} 
                        data={ trending } />
                    </div>
                )
            })}
        </div>
    </main>)
        } else return <Spinner/>

}

export default TrendingCardContainer