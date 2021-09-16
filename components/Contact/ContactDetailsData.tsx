import { MdLocationOn } from 'react-icons/md';
import { RiPhoneFill } from 'react-icons/ri';
import { IoIosClock } from 'react-icons/io';

const addressText = (
    <>
        1800 Abbot Kinney Blvd. Unit D & E Venice
    </>
);

const contactText = (
    <>
        Mobile: (+88) – 1990 – 6886
        <br />
        Mail: contact@lezadastore.com
    </>
);

const workTimeText = (
    <>
        Monday – Friday : 09:00 – 20:00
        <br />
        Sunday & Saturday: 10:30 – 22:00
    </>
);


export const ContactDetailsData = [
    {
        id: 1,
        icon: <span><MdLocationOn /></span>,
        title: "ADDRESS",
        content: addressText
    },
    {
        id: 2,
        icon: <span><RiPhoneFill /></span>,
        title: "CONTACT",
        content: contactText
    },
    {
        id: 3,
        icon: <span><IoIosClock /></span>,
        title: "WORK TIME",
        content: workTimeText
    }
];