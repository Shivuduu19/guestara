import React from 'react'

const Resouce = ({ nofDays }) => {
    const resourceList = ['A', "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O"]

    const totalDays = nofDays.map((monthDate) =>
        <div className={`min-w-20 min-h-20 border-2 border-l-0 border-t-0  border-cyan-500  `} key={monthDate.date}>
        </div>
    )
    const handleClick = (e) => {
        console.log(e.target)
        const element = e.target
        console.log(e.clientX);

        const diff = e.clientX
        const eventElement = document.createElement('div')
        e.target.classList.add("parentElement")
        eventElement.style.position = 'absolute';
        // eventElement.style.width = "90%"
        // eventElement.style.backgroundColor = "grey"
        eventElement.classList.add("innerElement")
        const num = Math.floor(((diff) - 172) / 80)
        console.log(num + 1);

        eventElement.style.left = `${num * 80 + 6}px`
        // eventElement.style.bottom = "0px"
        // eventElement.classList.add(`left-[${diff}px]`)
        // e.target.
        e.target.parentElement.firstChild.appendChild(eventElement)
        // console.log(e.target.parentElement.firstChild);

    }
    const handleParentClick = (e) => {

    }
    const totalCol = resourceList.map((res) => {
        return (
            <div className='relative'>
                <div className='absolute min-h-16 min-w-[90%]' onClick={handleParentClick}></div>
                <div className='flex'>{totalDays}</div>
            </div>
        )
    })


    // console.log(totalCol);
    // console.log(totalDays);

    return (
        <div className='flex'>

            <div className='flex flex-col sticky z-10 left-0 min-w-44 '>
                {resourceList.map((list) => <div className='min-w-24 min-h-20 border-2 border-b-0 border-cyan-500'>Resource {list} </div>)}
            </div>
            <div onClick={handleClick}>

                {totalCol}

            </div>
        </div>

    )
}

export default Resouce