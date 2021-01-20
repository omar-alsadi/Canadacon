import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdTimer } from 'react-icons/md'
import { FaMoneyCheck, FaTheaterMasks } from 'react-icons/fa'


export const StatsData = [
    {
        icon: <GiEarthAmerica css={`color: #047bf1;`} />, titleEn: "Over 30 Destinations", titleFr: "Plus De 30 Destinations",
        desc: "Join to over 30 comic events in Canada and USA", descFr: "Rejoignez plus de 30 événements de bande dessinée au Canada et USA"
    },
    {
        icon: <FaTheaterMasks css={`color: #f3a82e;`} />, titleEn: "100+ Comic Events", titleFr: "100+ Événements comiques",
        desc: "Over 100 comic events completed last year", descFr: "Plus de 100 événements comiques terminés l'année dernière"
    },
    {
        icon: <MdTimer css={`color: #f34f2e;`} />, titleEn: "Fastest Support", titleFr: "Assistance La Plus Rapide",
        desc: "Access our support team 24/7", descFr: "Accédez à notre équipe d'assistance 24/7"
    },
    {
        icon: <FaMoneyCheck css={`color: #3af576`} />, titleEn: "Best Price", titleFr: "Meilleur prix",
        desc: "We offer the best prices", descFr: "Nous offrons les meilleurs prix"
    },
]