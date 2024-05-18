import React from 'react'

const Topbar = () => {
    return (
        <>
            <div className='w-full sticky z-10 left-1'>
                <div className="">
                    <div className="flex justify-between">
                        <div aria-live="polite" className=" ">
                            <button tabIndex="0" className="c" data-index="0" type="button">
                                <span className="">May</span>
                                <span className="">2024</span>
                            </button>
                        </div>
                        <div>

                            <button tabIndex="0" aria-label="Previous page" className="inline-block w-6" type="button">
                                <span className="w-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></span>
                            </button>
                            <button tabIndex="0" className="" type="button">Today</button>
                            <button tabIndex="0" aria-label="Next page" className="inline-block w-6" type="button"><span className="m"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </>

    )
}

export default Topbar