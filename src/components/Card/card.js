import Grid from "@mui/material/Grid"

const Card = ({
  imgSrc,
  imgAlt,
  title
}) => {

  return (
    <Grid item xl={2} lg={2} md={4} xs={6} sm={6} >
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
    </Grid>
  )
}

export default Card;