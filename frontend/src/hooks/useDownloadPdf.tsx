import { useCallback } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const useDownloadPDF = () => {
  const downloadPDF = useCallback(
    async (elementId, fileName = 'download.pdf') => {
      const element = document.getElementById(elementId)
      if (element) {
        const canvas = await html2canvas(element, {
          scale: 4,
          logging: true,
          useCORS: true,
        })
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
          orientation: 'p',
          unit: 'px',
          format: [canvas.width, canvas.height],
        })
        const imgProps = pdf.getImageProperties(imgData)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save(fileName)
      } else {
        console.error('Element not found')
      }
    },
    [],
  )

  return downloadPDF
}

export default useDownloadPDF
