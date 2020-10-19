import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container  d-flex  justify-content-center">
               <div className="section-header col-md-6  text-center text-white mb-5">                   
                    <h2 className="text-dark ">Let us handle your project, professionally.</h2>
                    <p className="text-dark">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
               </div>
               <div className="col-md-6 ">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your email address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name / company’s name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group ">
                           <button type="button" className="btn btn-dark"> Send</button>
                       </div>
                   </form>
               </div>
           </div>
           <div className="copyRight text-center mt-5">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By Arif</p>
            </div>
       </section>
    );
};

export default Contact;