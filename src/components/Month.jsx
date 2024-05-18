import React from 'react'
import dayjs from "dayjs";



const Month = ({ month }) => {
    // console.log(month);
    const totalDays = month.map((monthDate) =>
        <div className={`min-w-20 min-h-10 border-2 border-r-0 border-cyan-500 flex ${(monthDate.date === dayjs().date()) && 'bg-green-600 rounded-xl'}`} key={monthDate.date}>{monthDate.date} {monthDate.day}
        </div>
    )

    return (
        <>
            {/* <Resouce /> */}

            <div className='flex '>
                {totalDays}
            </div>
            {/* </div > */}
        </>
    )
}

export default Month