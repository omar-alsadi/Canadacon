import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdTimer } from 'react-icons/md'
import { FaMoneyCheck, FaTheaterMasks } from 'react-icons/fa'


export const StatsData = [
    { icon: <GiEarthAmerica css={`color: #047bf1;`} />, title: "Over 30 Destinations", desc: "Join to over 30 comic events in Canada and USA" },
    { icon: <FaTheaterMasks css={`color: #f3a82e;`} />, title: "100+ Comic Events", desc: "Over 100 comic events completed last year" },
    { icon: <MdTimer css={`color: #f34f2e;`} />, title: "Fastest Support", desc: "Access our support team 24/7" },
    { icon: <FaMoneyCheck css={`color: #3af576`} />, title: "Best Price", desc: "We offer the best prices" },
]