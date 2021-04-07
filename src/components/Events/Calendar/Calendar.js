import React from 'react';
import './Calendar.css'

const Calendar = () => {
    return (
        <div className="calendar">
            <iframe title="Calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffecec&amp;ctz=Europe%2FSofia&amp;src=cnVtZW5hc3RhbmV2YTIxMDZAZ21haWwuY29t&amp;src=ZW4uYnVsZ2FyaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237CB342&amp;color=%23E67C73&amp;title=Girls%20In%20Tech%20Events%202021" width="1800" height="800" scrolling="no"></iframe>
        </div>
    );
};

export default Calendar;