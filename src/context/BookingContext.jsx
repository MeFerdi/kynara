import React, { createContext, useContext, useState } from 'react';
import { PopupModal } from 'react-calendly';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

      //  https://calendly.com/kynaralabs/consultation
    const calendlyUrl = "https://calendly.com/oferdinanddev112";

    const openBooking = () => setIsOpen(true);
    const closeBooking = () => setIsOpen(false);

    return (
        <BookingContext.Provider value={{ openBooking, closeBooking }}>
            {children}
            <PopupModal
                url={calendlyUrl}
                pageSettings={{
                    backgroundColor: '1a1a1a',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '2d6a4f',
                    textColor: 'f0f0f0'
                }}
                dateDetails={{
                    startDate: new Date(),
                    is24Hour: true
                }}
                open={isOpen}
                onModalClose={closeBooking}
                rootElement={document.getElementById("root")}
            />
        </BookingContext.Provider>
    );
};
