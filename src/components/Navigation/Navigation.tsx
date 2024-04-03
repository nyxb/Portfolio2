"use client"
// React Imports //
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

// MUI Icons Imports //
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// CSS Imports //
import './Navigation.css';

// Image Imports //

export default function Navigation() {
   return (
      <nav className='navbar'>

         <div className='navheaderbox'>
            .: Danny Mohr :. Anwendungsentwickler in Ausbildung
         </div>

         <div className='navcontentbox'>
            <ul>
               <li><Link href= "/" ><HomeOutlinedIcon />Startseite</Link></li>
               <li><Link href = "/about" ><HomeOutlinedIcon />Über mich</Link></li>
               <li><Link href= "/education" ><SchoolOutlinedIcon />Ausbildung</Link></li>
               <li><Link href="/projects"><AccountTreeOutlinedIcon />Projekte</Link></li>
               <li><a href=""><WorkspacePremiumOutlinedIcon />Zertifikate</a></li>
            </ul>
         <div className='navfooter'>
            <ul>
               <li><a href=""><PersonPinOutlinedIcon />Kontakt</a></li>
               <li><a href=""><PersonPinOutlinedIcon />Lebenslauf</a></li>
               <li><a href="http://github.com/Wab00se"><GitHubIcon />Github</a></li>
               <li><a href="http://linkedin.com/in/danny-mohr"><LinkedInIcon />Linked In</a></li>
            </ul>

         </div>


         </div>
      </nav>
      );
}
