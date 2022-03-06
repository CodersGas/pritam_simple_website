import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useSearchParams } from "react-router-dom";
import Cookie from "js-cookie";

const PaymentComplete = (props) => {

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    Cookie.remove("cardName");
  },[]);

  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid item md={4} xs={12} sm={12} >
        <Grid container >
          <div className="paymentReceiptDiv" >
            <div className="eachPaymentRow" >
              <p>
                Product
              </p>

              <p className="boldText" >
                {searchParams.get("name")}
              </p>
            </div>

            <div className="eachPaymentRow">
              <p>
                Amount
              </p>

              <p className="boldText" >
                {searchParams.get("am")}
              </p>
            </div>

            <div className="eachPaymentRow">
              <p>
                Order Id
              </p>

              <p className="boldText" >
                {Math.floor(Math.random() * 100000000)}
              </p>
            </div>

            <div className="eachPaymentRow">
              <p>
                Email
              </p>

              <p className="boldText" >
                {searchParams.get("email")}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PaymentComplete;