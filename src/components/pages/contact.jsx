import React from  'react';

function Contact (){
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-12 col-md-3"></div>
                <div className="col-sm-12 col-md-6 my-5">
                    <h1 className='text-center'>Contant us</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.3855859451605!2d55.2023461154339!3d25.156455083915088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b31fbc79cd5%3A0x498ee16c90e0e49f!2sPIZZA.AE!5e0!3m2!1sen!2sae!4v1656765121969!5m2!1sen!2sae"
                    
                    style={{frameBorder: '0', width:'100%', height:'400px'}}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                    <p className='text-center'> PIZZA.AE, Umm Suqaim 2, Jumeirah 3, Dubai, United Arab Emirates</p>
                    <p className='py-3 my-3 px-4 shadow'>
                        <i className="bi bi-envelope fs-3 "> </i> 
                        <span className='fs-3 px-3'>hi@sushi.ae</span>
                    </p>
                    <p className='py-3 my-3 px-4 shadow'>
                        <i className="bi bi-telephone-x fs-3 "> </i> 
                        <span className='fs-3 px-3'>+971566643345</span>
                    </p>
                    <p className='fs-4 text-center'>
                       <a href="" className='text-decoration-none mx-3' >
                            <i className="bi bi-instagram fs-3 "> </i> 
                       </a>
                       <a href="" className='text-decoration-none mx-3' >
                            <i className="bi bi-youtube fs-2 "> </i> 
                       </a>
                       <a href="" className='text-decoration-none mx-3' >
                            <i className="bi bi-whatsapp fs-3"> </i> 
                       </a>
                    </p>
                </div>
                <div className="col-sm-12 col-md-3"></div>
            </div>
        </div>
    );
}

export default Contact;