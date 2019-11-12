import Layout from "../components/Layout";
import Link from 'next/link';
import DownloadApp from "../components/DownloadApp";


const Index = () => {
	return (
		<Layout>
			<div className="container50vh margin-y-4em">
				<div className="">
					<video src="../static/hype_video.mp4" className="" min-height="100%" width="100%" loop muted autoPlay>
					</video>
				</div>
				<div className="row">
					<div className="col-12 margin-x-2em">

						<DownloadApp />
						
					</div>
					
				</div>
			</div>
		</Layout>
	)
}

export default Index;