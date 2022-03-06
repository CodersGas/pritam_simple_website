import { useState } from "react";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { menuList } from "../../constants";

const Navbar = (props) => {

	const [openMenu, setOpenMenu] = useState(false);

	const handleMenu = () => setOpenMenu(!openMenu);

	return (
		<>
			<div className="mainNavDiv" >
				<Grid container justifyContent="center" alignItems="center" >
					<Grid xl={8} lg={8} md={8} sm={12} xs={12} >
						<Grid container >
							<div className="navBar" >
								<div className="navLeftSide" >
									<MenuIcon className="menuIcon" onClick={handleMenu} />
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
			<Drawer
				anchor="left"
				open={openMenu}
				onClose={handleMenu}
			>
				<div className="menuContainerDiv" >
					{
						menuList.map((menu, index) => (
							<div key={index} className="eachMenuItem" >
								<p>{menu.text}</p>
							</div>
						))
					}
				</div>
			</Drawer>
		</>
	)
}

export default Navbar;