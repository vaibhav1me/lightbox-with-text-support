import { SlideshowLightbox } from "./lib/SlideshowLightbox";
import "./lib/SlideshowLightbox.module.css";
import './App.css'

function App() {

  return (
    <>
      <div>
        <SlideshowLightbox
        className=""
        showThumbnails="true"
      >
        <img
          className=""
          src="/nick-design-8RrPve9MCDc-unsplash.jpg"
        />
        <img
          className=""
          src="/nick-design-8RrPve9MCDc-unsplash.jpg"
        />
        <img
          className=""
          src="/nick-design-8RrPve9MCDc-unsplash.jpg"
        />
      </SlideshowLightbox>
      </div>
    </>
  )
}

export default App
