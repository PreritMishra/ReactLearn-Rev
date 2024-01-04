import { useState } from "react"
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {


    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            {/**Accordian Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-[70] shadow-lg p-4">
                <div 
                    className="flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-semibold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>🔽</span>
                </div>
                {/**Accordian Body */}
                { showItems && <ItemList items={data.itemCards} />}
            </div>
            
        </div>
    )
}

export default RestaurantCategory;