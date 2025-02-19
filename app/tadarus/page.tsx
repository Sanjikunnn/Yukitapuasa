import React from 'react'
import type { Metadata } from "next";
import Tadarus from './Tadarus'

export const metadata: Metadata = {
    title: "Yukita Puasa! - Baca Quran Online",
    description: "Yukita Puasa! adalah portal yang menghadirkan jadwal sholat dan imsak dengan akurat dan mudah diakses",
  };

const TadarusPage = () => {
  return (
    <div><Tadarus /></div>
  )
}

export default TadarusPage