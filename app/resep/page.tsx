import React from 'react'
import type { Metadata } from "next";
import Resep from './Resep'

export const metadata: Metadata = {
  title: "Yukita Puasa! - Resep masak untuk keluarga.",
  description: "Yukita Puasa! adalah portal yang menghadirkan jadwal sholat dan imsak dengan akurat dan mudah diakses",
};

const ResepPage = () => {
  return (
    <div><Resep/></div>
  )
}

export default ResepPage