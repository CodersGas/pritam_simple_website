import Grid from "@mui/material/Grid";
import { popularCards, directTopupCards, digitalVoucherCards } from "../../constants";
import {Card} from "../../components";

const HomePage = (props) => {

  return (
    <Grid container alignItems="center" justifyContent="center" className="homePageGrid" >
      <Grid item xl={8} lg={8} md={8} sm={12} xs={12} >
        <div className="cardsContainerDiv" >
          <h4>
            POPULAR
          </h4>

          <Grid container spacing={2} >
            {
              popularCards.map((card, index) => (
                <Card 
                  key={index}
                  imgSrc={card.image}
                  imgAlt={card.title}
                  title={card.title}
                />
              ))
            }
          </Grid>
        </div>

        <div className="cardsContainerDiv" >
          <h4>
            DIRECT TOP-UP
          </h4>

          <Grid container spacing={2} >
            {
              directTopupCards.map((card, index) => (
                <Card 
                  key={index}
                  imgSrc={card.image}
                  imgAlt={card.title}
                  title={card.title}
                />
              ))
            }
          </Grid>
        </div>

        <div className="cardsContainerDiv" >
          <h4>
            DIGITAL VOUCHERS
          </h4>

          <Grid container spacing={2} >
            {
              digitalVoucherCards.map((card, index) => (
                <Card 
                  key={index}
                  imgSrc={card.image}
                  imgAlt={card.title}
                  title={card.title}
                />
              ))
            }
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default HomePage;