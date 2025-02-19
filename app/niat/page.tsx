import React from 'react'
import type { Metadata } from "next";
import Niat from './Niat'

export const metadata: Metadata = {
    title: "Yukita Puasa! - Niat Puasa Bulan Ramadhan",
    description: "Yukita Puasa! adalah portal yang menghadirkan jadwal sholat dan imsak dengan akurat dan mudah diakses",
  };

const NiatPage = () => {
  return (
    <div><Niat /></div>
  )
}

export default NiatPage