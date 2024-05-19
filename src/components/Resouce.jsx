import React from 'react'

const Resouce = ({ nofDays }) => {
    const resourceList = ['A', "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O"]

    const handleClick = (e) => {
        e.stopPropagation()

        var overflowElement = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        var rect = overflowElement.getBoundingClientRect();
        console.log(rect);
        const innerDim = e.target.getBoundingClientRect()
        console.log(innerDim);
        // Calculate the mouse click position within the viewport
        // var x = e.clientX - rect.left;
        // var y = e.clientY - rect.top;
        // console.log(x);

        // Add the scroll position to the calculated click position
        var scrollX = overflowElement.scrollLeft;
        var scrollY = overflowElement.scrollTop;
        console.log(scrollX);

        // var clickX = x + scrollX;
        // var clickY = y + scrollY;

        // console.log('Click position relative to overflow element: ', clickX, clickY);

        const eventElement = document.createElement('div')
        eventElement.setAttribute("draggable", "true")
        eventElement.style.position = 'absolute';
        eventElement.style.left = `${innerDim.x + scrollX - 170}px`
        eventElement.classList.add("innerElement")
        e.target.parentElement.previousElementSibling.appendChild(eventElement)
        console.log(e.target);
    }
    const totalDays = nofDays.map((monthDate) =>
        <div className={`min-w-20 min-h-20 border-2 border-l-0 border-t-0  border-cyan-500  `} key={monthDate.date} onClick={handleClick}>
        </div>
    )
    const handleParentClick = (e) => {
        console.log(e.target.getBoundingClientRect())
        var rect = e.target.getBoundingClientRect();
        // const element = e.target
        console.log(rect.x);
        var x = e.clientX - rect.left;
        console.log(x);
        // const left = rect.x
        var scrollX = e.target.scrollLeft;
        console.log(scrollX);

        var clickX = (x + scrollX) / 80;
        const leftNum = Math.floor(clickX)
        console.log(Math.floor(clickX));

        const eventElement = document.createElement('div')
        // e.target.classList.add("parentElement")
        eventElement.style.position = 'absolute';
        // // eventElement.style.width = "90%"
        // // eventElement.style.backgroundColor = "grey"
        eventElement.style.left = `${leftNum * 80 + 4}px`
        eventElement.classList.add("innerElement")
        // eventElement.classList.add(`left:${rect.x}`)

        // console.log(eventElement.style.left);

        // eventElement.style.bottom = "0px"
        // eventElement.classList.add(`left-[${diff}px]`)
        e.target.appendChild(eventElement)
        // e.target.parentElement.previousElementSibling.appendChild(eventElement)

        // e.target.parentElement.firstChild.appendChild(eventElement)
        console.log(e.target);

    }
    const totalCol = resourceList.map((res) => {
        return (
            <div className='relative'>
                <div className='absolute min-h-16 min-w-full' onClick={handleParentClick}></div>
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
            <div >

                {totalCol}

            </div>
        </div>

    )
}

export default Resouce