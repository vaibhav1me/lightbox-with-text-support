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
      captionTitle: "C / 2022 E3(ZTF) – Untracked",
      captionQuote: "Lurking in space, lingering its tail Lurking in space, lingering its tail Lurking in space, lingering its tail Lurking in space, lingering its tail",
      captionDescription: "Presenting you a cosmic gift, glowing in all its green and glory, C / 2022 E3(ZTF), once in 50,000 years wonder, yet another tale that's temporary.",
      imageDetails: [
        {
          heading: "Equipment used:",
          content: [
            "Camera model: Nikon D5600",
            "Imaging scope: Celestron Omni XLT 120, 1000mm focal length, 120mm aperture",
            "Mount: Celestron Omni CG4"
          ],
        },
        {
          heading: "Acquisition:",
          content: [
            "Exposure: 0.77 seconds",
            "ISO: 25600",
            "Lights: 530",
            "Darks: 8",
            "No flats, dark - flats, bias frames were used."
          ],
        },
        {
          heading: "Processing:",
          content: [
            "All images stacked in Siril",
            "Stars and Comet stacked separately",
            "No colour calibration.",
            "Stars and Comet combined in photoshop"
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
