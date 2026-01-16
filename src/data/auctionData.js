import amgGt from "assets/images/automotive/amg-gt.png";
import cls from "assets/images/automotive/cls.png";
import gAmg from "assets/images/automotive/g-amg.png";

const auctionData = [
  {
    image: amgGt,
    title: "Mercedes-Benz AMG GT",
    year: 2022,
    currentBid: 125000,
    endTime: new Date().getTime() + 1000 * 60 * 60 * 24, // 24 hours from now
    bids: 12,
  },
  {
    image: cls,
    title: "Mercedes-Benz CLS",
    year: 2021,
    currentBid: 72000,
    endTime: new Date().getTime() + 1000 * 60 * 60 * 5, // 5 hours from now
    bids: 8,
  },
  {
    image: gAmg,
    title: "Mercedes-Benz G-Class AMG",
    year: 2023,
    currentBid: 180000,
    endTime: new Date().getTime() + 1000 * 60 * 60 * 48, // 48 hours from now
    bids: 15,
  }
];

export default auctionData;