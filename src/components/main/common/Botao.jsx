import React from 'react';
import WhatsappImg from '../../../img/WhatsApp.png'

export default function Botao({value, titulo}){

    const handleWhatsAppClick = () => {
        const phoneNumber = '+5534997982185';
        const message = 'Olá, estou interessado(a) no produto destacado '+titulo;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(url, '_blank');
      }; 


    return(
        
        <button className='botao' onClick={handleWhatsAppClick}>{value}</button>
    )

}