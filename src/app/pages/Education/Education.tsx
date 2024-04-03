"use client";
// Accordion Imports MUI//
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Education() {
   return (
      <div>
      <div className="maincontentheaderbox">
         <h1>Meine Ausbildung zum Anwendungsentwickler</h1>
      </div>
      <div className="maincontentheaderline"></div>
      <div className="maincontent">
         Hier möchte ich Ihnen einen Einblick in den Inhalt, Ablauf und Ergebnisse meiner Umschulung zum FIAE geben. 


      <Accordion>
         <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Mein Bilungsträger
         </AccordionSummary>
            <AccordionDetails>
            <p>Nach ausgiebiger Suche nach einem guten Bildungsträger, viel meine Wahl auf das   "Institut für Berufliche Bildung" am Standort Elmshorn. Seit Juli 2023 befinde ich mich nun dort in einer IHK - Zertifizierten Ausbildung zum "Fachinformatiker für Anwendungsentwicklung" welche über einen Zeitraum von 2 Jahren (inklusive 6 monatigen Praktikum) läuft. Der Standort ist ruhig und schön in der "Norddeutschen" Landschaft gelegen. Er bietet ein ruhiges Umfeld zum lernen, ein Ort zum austausch mit Mitschülern und Gleichgesinnten und eine annehmbare Unterrichtsumgebung für den "Remote-Unterricht" mithilfe von Microsoft Teams.

            </p>
            </AccordionDetails>
         </Accordion>
         <Accordion>
         <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
>
          Programmierung
         </AccordionSummary>
            <AccordionDetails>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                     >
                     Python Modul I 
                  </AccordionSummary>
                     <AccordionDetails>
                     Inhalte waren Grundlagen der Programmierung mit hilfe der Programmiersprache Python.
                     Variablen, Operatoren, Datentypen und Schleifen standen im Vordergrund dieses Moduls.
                     Aber auch Kentnisse über Prorammablaufpläne, Pseudo Code und Struktorgramme wurden vermittelt. Auch die ersten Berührungen mit "Error-Handling" standen dort als "Anfänger" natürlich an der Tagesordnung. Es war ein guter Einstieg um von Grund auf zu verstehen wie Phyton oder generell eine Programmiersprache funktioniert und welche Möglichkeiten selbst ein begrenztes Wissen einen sich eröffnet. <br></br>
                     Abgeschlossen: 
                     </AccordionDetails>
                  </Accordion>
                  <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                     >
                     Python Modul II 
                  </AccordionSummary>
                     <AccordionDetails>
                     Inhalte waren Grundlagen der Programmierung mit hilfe der Programmiersprache Python.
                     Variablen, Operatoren, Datentypen und Schleifen standen im Vordergrund dieses Moduls.
                     Aber auch Kentnisse über Prorammablaufpläne, Pseudo Code und Struktorgramme wurden vermittelt. Auch die ersten Berührungen mit "Error-Handling" standen dort als "Anfänger" natürlich an der Tagesordnung. Es war ein guter Einstieg um von Grund auf zu verstehen wie Phyton oder generell eine Programmiersprache funktioniert und welche Möglichkeiten selbst ein begrenztes Wissen einen sich eröffnet. <br></br>
                     Abgeschlossen: 
                     </AccordionDetails>
                  </Accordion>
                  <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                     >
                     SQL / Datenbanken Modul 
                  </AccordionSummary>
                     <AccordionDetails>
                     Inhalte waren Grundlagen der Programmierung mit hilfe der Programmiersprache Python.
                     Variablen, Operatoren, Datentypen und Schleifen standen im Vordergrund dieses Moduls.
                     Aber auch Kentnisse über Prorammablaufpläne, Pseudo Code und Struktorgramme wurden vermittelt. Auch die ersten Berührungen mit "Error-Handling" standen dort als "Anfänger" natürlich an der Tagesordnung. Es war ein guter Einstieg um von Grund auf zu verstehen wie Phyton oder generell eine Programmiersprache funktioniert und welche Möglichkeiten selbst ein begrenztes Wissen einen sich eröffnet. <br></br>
                     Abgeschlossen: 
                     </AccordionDetails>
                  </Accordion>
               </AccordionDetails>
               
               
            </Accordion>
         


      
      </div>
      </div>
   );
}
