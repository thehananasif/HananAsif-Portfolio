
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface WhatsAppQRProps {
  phoneNumber: string;
}

const WhatsAppQR: React.FC<WhatsAppQRProps> = ({ phoneNumber }) => {
  // Format phone number for WhatsApp URL
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}`;
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <QRCodeSVG 
        value={whatsappUrl} 
        size={128}
        bgColor={"#FFFFFF"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
    </div>
  );
};

export default WhatsAppQR;
