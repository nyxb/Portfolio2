"use client";
import Image from 'next/image';

// Image Imports //
import avatar from '@/app/images/hexme.webp';

// Card Imports//
import SmartFitAICard from '@/app/components/ProjectCards/SmartFitAICard';
import PortFolioCard from '@/app/components/ProjectCards/PortFolioCard';

// CSS Imports //
import './Home.css';

export default function Home() {
   return (
      <div>
      <div className="maincontentheaderbox">
         <h1>Moin Moin</h1>
      </div>
      <div className="maincontentheaderline"></div>
      <div className="maincontent">
            <div className="textbox">
               <p><Image className='Avatar' src= {avatar} alt='Avatar'/>
                  <p>Mein Name ist Danny, bin 38 Jahre alt und angehender Fachinformatiker für Anwendungsentwicklung. <br></br>
                  Meine Umschulung zum FIAE ist nicht nur meine Zukunft, sondern auch meine Berufung. Nach Jahrelanger Arbeit als Monteur für hochwertige Küchen u. Möbel, habe ich die Chance ergriffen mein, seit der Jugend ausgeübtes Hobby, zum Beruf zu machen.</p>

                  <p>Ich möchte diese Website nutzen um Ihnen einen Einblick in mich als Person, meine Ausbildung, sowie meine Privaten Projekte zu ermöglichen.</p>
                  <p>Aktuell befinde ich mich auf der Suche nach einem 6 monatigen Praktikum.</p>
                  <p>Sollten Sie also Interesse an einem engaierten und lernwilligen Anwendungsentwickler in Ihrem Team haben, lade Ich Sie herzlichst dazu ein mein Port Folio zu durchstöbern.
                  Weitere Informationen rund um das Praktium finden Sie hier...</p>
               </p>
            </div>
      </div>
      <div className="maincontentheaderbox">
         <h2>Aktuelle Projekte</h2>
      </div>
      <div className="contentheaderline"></div>
      <div className="maincardbox">
         <div className='card'><SmartFitAICard></SmartFitAICard></div>
         <div className='card'><PortFolioCard></PortFolioCard></div>
         </div>
      </div>
   );
}
