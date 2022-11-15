import React from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const doc = new jsPDF('l', 'in', [4,2]);

const width = doc.internal.pageSize.getWidth();
const height = doc.internal.pageSize.getHeight();


export default function PDF() {
const exportPdf = () => {
    html2canvas(document.querySelector(".CardView"), {
        allowTaint: true,
        useCORS: true,
        scale: 2,
        }).then(canvas => {
        //document.body.appendChild(canvas); //Adds png to bottom of page
        const img = canvas.toDataURL('image/png');
        doc.addImage(img, 'PNG', 0, 0, width, height);
        // to add a new page to the pdf file
        // doc.addPage('l', 'in', [4,2])
        doc.save("myBusinessCard.pdf")
    })
}

    return (
        <div  className = "text-center">
            <button  type="button" className="btn btn-primary" onClick = {exportPdf}>Export to PDF</button>
        </div> 
    )
}