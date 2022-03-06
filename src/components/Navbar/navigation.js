import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = (props) => {

	return(
		<div className="mainNavDiv" >
			<Grid container justifyContent="center" alignItems="center" >
				<Grid xl={8} lg={8} md={8} sm={12} xs={12} >
					<Grid container >
						<div className="navBar" >
							<div className="navLeftSide" >
								<img 
									src="https://cdn1.codashop.com/S/content/mobile/images/codashop-logo-new-2x.png"
									className="navLogo"	
								/>
							</div>

							<div className="navRightSide" >
								<SearchIcon className="searchIcon" />
							</div>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Navbar;