
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LinkButton from './LinkButton';
import LeadModal from './LeadModal'; // Import the modal component
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaBook, FaUsers, FaDownload } from 'react-icons/fa';

const LinkTree: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const links = [
    {
      text: 'Descarga el Mapa Definitivo de Objeciones',
      href: '#',
      icon: <FaDownload />,
      onClick: openModal, // Open modal instead of direct link
    },
    {
      text: 'Libro: Cerrador Experto',
      href: 'https://cerradorexperto.hugoherreracoach.com/',
      icon: <FaBook />,
    },
    {
      text: 'Libro: Líder Experto',
      href: 'https://liderexperto.hugoherreracoach.com/',
      icon: <FaUsers />,
    },
    {
      text: 'Sígueme en Facebook',
      href: 'https://www.facebook.com/hugoherreracoach/',
      icon: <FaFacebook />,
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/hugoherreracoach',
      icon: <FaInstagram />,
    },
    {
      text: 'TikTok',
      href: 'https://www.tiktok.com/@hugoherreracoach',
      icon: <FaTiktok />,
    },
    {
      text: 'Conversemos por WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=51900239201&text=¡Hola Hugo! 😃 Mi nombre es...',
      icon: <FaWhatsapp />,
    },
  ];

  return (
    // Use custom background color and ensure full height flex layout for centering
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gray-900 text-white p-4">
      <div className="w-full max-w-md mx-auto text-center">
        <Image
          src="/hugo-avatar.jpg"
          alt="Hugo Herrera Avatar"
          width={128} // Adjust size as needed
          height={128}
          // Use custom border color
          className="rounded-full mx-auto mb-4 border-4 border-custom-gray-700"
          priority // Prioritize loading the avatar image
        />
        <h1 className="text-2xl font-semibold">Hugo Herrera</h1>
        {/* Use custom secondary text color */}
        <p className="text-custom-gray-300 mb-8">Entrenador de Ventas Especializado</p>

        <div className="space-y-4">
          {links.map((link, index) => (
            <LinkButton
              key={index}
              href={link.href}
              text={link.text}
              icon={link.icon}
              onClick={link.onClick} // Pass onClick handler
            />
          ))}
        </div>
      </div>
      {/* Render the modal conditionally */}
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LinkTree;

