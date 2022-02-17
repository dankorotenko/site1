import React from 'react'
import { Facebook, Email, Instagram } from '@mui/icons-material'

export default function Footer() {
  return (
    <div className="footer">
        <ul className="social">
            <li className="l"><a href="https://www.facebook.com/gottakeepit6rief" target="_blank" rel="noreferrer"><Facebook /></a></li>
            <li className="l"><a href="https://www.instagram.com/gottakeepitbrief/" target="_blank" rel="noreferrer"><Instagram /></a></li>
            <li className="l"><a href="mailto: gottakeepitbrief@gmail.com " ><Email /></a></li>
        </ul>
        <div className="brand">©2022 gottakeepitbrief</div>
        <div className="aleg">made by Aleg Inc.</div>
    </div>
  )
}