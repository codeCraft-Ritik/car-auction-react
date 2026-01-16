import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import VehicleAuctionCard from "components/VehicleCards/VehicleAuctionCard";
import auctionData from "data/auctionData";

function AuctionListings() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={6} mb={6}>
          <MKTypography variant="h3" mb={1}>Active Auctions</MKTypography>
          <MKTypography variant="body2" color="text">
            Check out the latest luxury vehicles available for bidding.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {auctionData.map((car) => (
            <Grid item xs={12} md={6} lg={4} key={car.title}>
              <VehicleAuctionCard
                image={car.image}
                title={car.title}
                year={car.year}
                price={car.currentBid}
                countdown={<AuctionCountdown date={car.endTime} />}
                action={{ type: "internal", route: "/", color: "info", label: "Place Bid" }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AuctionListings;