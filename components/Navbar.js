import Link from 'next/link';

const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-md navbar-dark color-white bg-black height5">
			  <a className="navbar-brand img-container5" href="/"><img src="../static/hypelogo3.svg" width="100%" height="100%"/></a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon color-white"></span>
			  </button>

			  <div className="collapse navbar-collapse bg-black width100vh z-1000" id="navbarColor03">
			    <ul className="navbar-nav ml-auto fontsizeNavLink">
			      <li className="nav-item">
			        <Link href="/partner"><a className="nav-link color-white">Partner</a></Link>
			      </li>
			      <li className="nav-item">
				    <Link href="/rider"><a className="nav-link color-white">Rider</a></Link>
			      </li>
			      <li className="nav-item">
			      	<Link href="/about"><a className="nav-link color-white">Our Company</a></Link>
			      </li>
			      <li className="nav-item">
			      	<Link href="#"><a className="nav-link color-white">Help</a></Link>
			      </li>
			    </ul>
			  </div>
			</nav>
			{/*<style jsx>
				{`
					ul{
						background: #333;
						color: #fff
						list-style: none;
						display: flex
					}

					ul li {
						font-size: 18px;
						margin-right: 20px;
					}

					ul li a {
						color: #fff;
						text-decoration: none
					}
					`}
			</style>*/}
		</React.Fragment>
	)
}

export default Navbar;