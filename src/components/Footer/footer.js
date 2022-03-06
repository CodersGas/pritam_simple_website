import Grid from "@mui/material/Grid"
import { FacebookOutlined, Instagram } from "@mui/icons-material";
import Link from "@mui/material/Link";

const Footer = (props) => {

  return (
    <div >
      <Grid container alignItems="center" justifyContent="center" className="footerMainDiv" >
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} >
          <Grid container >
            <div className="innerFooterDiv" >
              <div className="footerDivs" >
                <p className="footerHeading" >
                  Need Help?
                </p>

                <button
                  className="footerButton"
                  type="button"
                >
                  Contact Us
                </button>
              </div>

              <div className="footerDivs" >
                <p className="footerHeading" >
                  Country
                </p>

                <button
                  className="footerButton"
                  type="button"
                >
                  भारत (India)
                </button>
              </div>

              <div className="footerDivs" >
                <p className="footerHeading" >
                  Stay updated with us:
                </p>

                <div className="socialIconsDivFooter" >
                  <Link href="https://www.facebook.com/Codashop.IN/" >
                    <FacebookOutlined fontSize="large" />
                  </Link>
                  <Link href="https://www.instagram.com/codashop.in/" >
                    <Instagram fontSize="large" />
                  </Link>
                </div>
              </div>

              <div className="footerDivs" >
                <p className="footerHeading" >
                  Registered Address
                </p>

                <span className="companyAddress" >
                  Coda Payments India Private Limited, New No. 19, Playground View Street, Nandhanam Extension, Nandhanam Chennai 600035. You may also contact us via support.in@codapayments.com
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid container alignItems="center" justifyContent="center">
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} >
          <div className="copyrightDiv" >
            <p >
              © Copyright Coda Payments
            </p>

            <Link>
              <p>
                Marketing & Partnerships
              </p>
            </Link>

            <Link>
              <p>
                For Game Publishers
              </p>
            </Link>

            <Link>
              <p>
                Terms & Conditions
              </p>
            </Link>

            <Link>
              <p>
                Privacy Policy
              </p>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;