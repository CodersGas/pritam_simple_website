import Grid from "@mui/material/Grid"
import { Link } from "react-router-dom";

const Card = ({
  imgSrc,
  imgAlt,
  title
}) => {

  return (
    <Grid item xl={2} lg={2} md={4} xs={6} sm={6} className="cardGrid" >
      <Link to="/payment" >
        <div className="cardDiv" >
          <img
            src={imgSrc}
            alt={imgAlt}
          />

          <div className="cardTitleDiv" >
            <p>
              {title}
            </p>
          </div>
        </div>
      </Link>
    </Grid>
  )
}

export default Card;