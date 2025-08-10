import React from 'react'

const Nav = () => {
    return (
        <nav className='navLinkss d-flex justify-content-between align-items-center py-1 px-4'>
            <img src="https://elevationng.org/wp-content/uploads/2024/01/pngwing.com-4.png" alt="mixlr logo" width={"100px"} />

            <div className='d-flex justifiy-content-between align-items-center gap-4 linkWrap '>
                <div className='d-flex justifiy-content-between align-items-center gap-4 linkWrap2'>
                    <a className='text-decoration-none text-center' href="">Solutions</a>
                    <a className='text-decoration-none text-center' href="">Use cases</a>
                    <a className='text-decoration-none text-center' href="">Customers</a>
                    <a className='text-decoration-none text-center' href="">Listen</a>
                    <a className='text-decoration-none text-center' href="">Pricing</a>
                </div>

                <div className='d-flex justify-content-between align-items-center gap-4 auth-links'>
                    <a className='text-decoration-none text-center' href="">Login</a>
                    <a href="" className='get-started d-flex justify-content-center text-center align-items-center gap-2 btn rounded-pill'>
                        <i class="fa-solid fa-plus"></i>
                        <span>Get started</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav