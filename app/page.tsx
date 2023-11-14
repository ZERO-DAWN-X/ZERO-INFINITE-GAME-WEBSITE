import Image from 'next/image'
// import Sidebar from "../SlideBar/sidebar"
import Heropage from './../Body/heropage';

export default function Home() {
  return (
    <main>
      <div className="ellipse-div"></div>
	    <div className="ellipse2-div"></div>
      <div className="ellipse3-div"></div>
      <div className="ellipse4-div"></div>
      <Heropage/>
    </main>
  )
}
