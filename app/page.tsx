import Image from 'next/image'
import Sidebar from "../SlideBar/sidebar"

export default function Home() {
  return (
    <main>
      <Sidebar/>
      <div className="ellipse-div"></div>
	    <div className="ellipse2-div"></div>
    </main>
  )
}
