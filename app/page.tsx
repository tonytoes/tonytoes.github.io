import Image from "next/image";

const 

export default function Home() {
  return (
  <div className="desktop-body col-6 mx-auto">
  <div className="desktop-home">home</div>
  <div className="desktop-heading">
    <p className="text-center">
      hi! <span className="text-info font-bold">i’m tony</span>
    </p>
    <h2>developer, gamer, and reader</h2>
  </div>
  <div className="desktop-icons">
    <div className="desktop-icon" onClick={toggleWindow('profile')}>
      <button className="click bg-transparent border-0">
        <img src="photos/icon_about.webp" alt="about icon" />
        <span className="fs-6">about</span>
      </button>
    </div>
    <div className="desktop-icon" onClick={toggleWindow('links')}>
      <button className="click bg-transparent border-0">
        <img src="photos/icon_links.webp" alt="link icon" />
        <span className="fs-6">links</span>
      </button>
    </div>
    <div className="desktop-icon" onClick={toggleWindow('work')}>
      <button className="click bg-transparent border-0">
        <img src="photos/icon_work.webp" alt="Blog icon" />
        <span className="fs-6">work</span>
      </button>
    </div>
    <div
      className="desktop-icon"
      onClick={() => window.open('photos/resume.pdf', '_blank')}
    >
      <button className="click bg-transparent border-0">
        <img src="photos/icon_faq.webp" alt="resume icon" />
        <span className="fs-6">portfolio</span>
      </button>
    </div>
    <div className="desktop-icon" onClick={toggleWindow('contact')}>
      <button className="click bg-transparent border-0">
        <img src="photos/icon_contact.webp" alt="resume icon" />
        <span className="fs-6">contact</span>
      </button>
    </div>
  </div>
  <p className="text-center font-medium font-monospace">
    Better with sounds in full volume.
  </p>
</div>
  );
}
