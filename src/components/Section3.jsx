import React from 'react'

const Section3 = () => {
    return (
        <div className=' container text-center'>
            <div className='section3'>
                <h2>Become a Mixlr audio creator today</h2>
                <div><a href="" className='rounded-pill btn border-0 '>Start streaming now</a></div>
                <img src="https://tse4.mm.bing.net/th/id/OIP.BEZhLRimKoGn1vg15qyRxgAAAA?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="mixlr logo" width={"150px"} style={{ marginTop: "90px" }} />
                <div className='d-flex justify-content-center align-items-center gap-3 fs-5'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <footer className='footerlinks d-flex justify-content-center align-items-center gap-3 py-5'>
                <a href="" className='text-decoration-none'>Pricing</a>
                <a href="" className='text-decoration-none'>Blog</a>
                <a href="" className='text-decoration-none'>Support</a>
                <a href="" className='text-decoration-none'>Careers</a>
                <a href="" className='text-decoration-none'>Terms of Use</a>
                <a href="" className='text-decoration-none'>Privacy Policy</a>
            </footer>
            <p>&copy; Mixlr Ltd 2025 - All rights reserved</p>
        </div>
    )
}

export default Section3