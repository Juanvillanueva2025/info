
'use client';

import React, { useState, useEffect } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Reset form and status when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setPhone('');
      setFormErrors({});
      setIsLoading(false);
      setSubmitStatus(null);
    }
  }, [isOpen]);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!name.trim()) {
      errors.name = 'El nombre es requerido.';
    }
    if (!email.trim()) {
      errors.email = 'El correo electrónico es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'El formato del correo electrónico no es válido.';
    }
    if (!phone.trim()) {
      errors.phone = 'El teléfono es requerido.';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
        // Basic international phone format check (e.g., +1234567890)
        // You might want a more robust validation library for production
        errors.phone = 'El formato del teléfono no es válido (ej: +51987654321).';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      // Assuming the API returns success status
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      // Optionally close modal after a delay
      // setTimeout(onClose, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg p-6 md:p-8 w-full max-w-md relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">Descarga el Mapa Definitivo de Objeciones</h2>
        <p className="text-gray-300 mb-6 text-center text-sm md:text-base">Completa tus datos para recibir el mapa directamente en tu correo.</p>

        {submitStatus === 'success' ? (
          <div className="text-center text-green-400 p-4 bg-green-900 bg-opacity-50 rounded-lg">
            <p className="font-semibold">¡Formulario enviado con éxito!</p>
            <p>Revisa tu correo electrónico.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 bg-gray-700 text-white border ${formErrors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                required
              />
              {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 bg-gray-700 text-white border ${formErrors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                required
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Teléfono (con código de país)</label>
              <input
                type="tel" // Use tel type for semantic meaning and potential mobile features
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+51987654321"
                className={`w-full px-3 py-2 bg-gray-700 text-white border ${formErrors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                required
              />
              {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
            </div>

            {submitStatus === 'error' && (
              <p className="text-red-500 text-center text-sm mb-4">Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 text-center font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Descargar Mapa Ahora'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;

