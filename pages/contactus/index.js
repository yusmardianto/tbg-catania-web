import React from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactInfo from '@/components/ContactUs/ContactUs';
import ContactForm from '@/components/ContactUs/ContactForm';

const Contact = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Contact Us" />

            <ContactInfo />

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4877.20160768357!2d104.7667749109232!3d-2.9676806176934054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b772d29451467%3A0x283d2cd7399d18dd!2sCatania%20BANGAU!5e0!3m2!1sid!2sid!4v1637288512772!5m2!1sid!2sid" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;