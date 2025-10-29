document.addEventListener('DOMContentLoaded', () => {
    
    const botonDescarga = document.getElementById('btnDescargarPDF');

    botonDescarga.addEventListener('click', () => {

        const elementoParaConvertir = document.querySelector('.informe-pagina');

        const opciones = {
            margin:       0.2, 
            filename:     'Informe-Laboratorio-12345.pdf', 
            image:        { type: 'jpeg', quality: 0.98 }, 
            html2canvas:  { scale: 2}, 
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
        };

        // Libreria para crear el pdf
        html2pdf()
            .from(elementoParaConvertir)
            .set(opciones)
            .save();
    });

});