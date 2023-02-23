import React from 'react'
import { CardsData } from '../../Data/Data'

const Cards = () => {
{CardsData.map((card,id)=>{
    return(
        <div>
            {CardsData.map((card,id)=>{
                return(
                    <div className='parent-card'>
                        <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        png={card.png}
                        


                        />

                    </div>
                )
            })}
        </div>
    )
})}
}

export default Cards
