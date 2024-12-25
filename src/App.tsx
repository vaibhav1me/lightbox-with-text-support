import { SlideshowLightbox } from "./lib/SlideshowLightbox";
import "./lib/SlideshowLightbox.module.css";
import './App.css'
import { useState } from "react";
import img from "/nick-design-8RrPve9MCDc-unsplash.jpg";
import img2 from "/pexels-photo-2071882.jpeg";

function App() {
  const data = [
    {
      src: img,
      captionTitle: "1",
      captionQuote: "1...",
      captionDescription: "1....",
      imageDetails: [
        {
          heading: "Equipment used:",
          content: [
            "Camera model: Nikon D5600 with T-ring",
            "Imaging scope: MEADE LX90",
          ],
        },
        {
          heading: "Acquisition:",
          content: [
            "Total exposure time: 103x15s",
            "Aperture: 4 inches",
            "ISO: 8000",
            "103 Lights",
            "20 Darks",
            "No flats, dark-flats, bias used",
          ],
        },
        {
          heading: "Processing:",
          content: [
            "All images are stacked in Siril",
            "Post processed in Adobe Photoshop",
          ],
        },
      ],
    },
    {
      src: img2,
      captionTitle: "2",
      captionQuote: "2...",
      captionDescription: "2....",
      imageDetails: [
        {
          heading: "Equipment used:",
          content: [
            "Camera model: Nikon D5600 with T-ring",
            "Imaging scope: MEADE LX90",
          ],
        },
        {
          heading: "Acquisition:",
          content: [
            "Total exposure time: 103x15s",
            "Aperture: 4 inches",
            "ISO: 8000",
            "103 Lights",
            "20 Darks",
            "No flats, dark-flats, bias used",
          ],
        },
        {
          heading: "Processing:",
          content: [
            "All images are stacked in Siril",
            "Post processed in Adobe Photoshop",
          ],
        },
      ],
    },
    {
      src: img2,
      captionTitle: "3",
      captionQuote: "3...",
      captionDescription: "3....",
      imageDetails: [
        {
          heading: "Equipment used:",
          content: [
            "Camera model: Nikon D5600 with T-ring",
            "Imaging scope: MEADE LX90",
          ],
        },
        {
          heading: "Acquisition:",
          content: [
            "Total exposure time: 103x15s",
            "Aperture: 4 inches",
            "ISO: 8000",
            "103 Lights",
            "20 Darks",
            "No flats, dark-flats, bias used",
          ],
        },
        {
          heading: "Processing:",
          content: [
            "All images are stacked in Siril",
            "Post processed in Adobe Photoshop",
          ],
        },
      ],
    }
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => { setIsOpen(true) }}>
          Open Lightbox
        </button>
        <SlideshowLightbox
          images={data}
          showThumbnails={true}
          open={isOpen}
          lightboxIdentifier="lbox1"
          onClose={() => { setIsOpen(false) }}>
        </SlideshowLightbox>
      </div>
    </>
  )
}

export default App
