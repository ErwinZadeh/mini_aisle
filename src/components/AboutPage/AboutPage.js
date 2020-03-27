import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
        <h2>Mini - A.I.S.L.E</h2><h5>( Advanced Integral Shopping List Experience )</h5>

        <h4>Overview:</h4>

        Every day, millions of people around the world who cook and eat at their own homes need to do their grocery shopping. Hundreds of different grocery items come to their mind and then checked or unchecked to be approved in the process of thinking of what should be cooked. Even if People be able to keep track of those different grocery items, planning to buy those in their super busy world are more than enough confusing. Grocery shopping is not something people enjoy, but they have to do. It is better to make an app that can integrate all their activities in grocery shopping. It is obvious anything that could help people make the process of their daily/weekly basis grocery shopping easier, will be accepted by them willingly.

        <h4>Goals:</h4>

        People hate when they come back home and were not able to recall buying a needed grocery item for the night. They love when they could do all their daily/weekly grocery shopping they had planned, in the least time with the best price, without any confusion.

        <h4>Difference:</h4>

        Instead of starting their grocery shopping by visiting a specific store or its website, they initiate their journey by choosing what items they need to buy. AISLE gives them all the possible options in different stores in only one place. People do not need to write a list and keep track of the items and go one by one to different stores to get those. All of the process of their daily/weekly grocery shopping from the start of thinking about it to the end of buying and bringing it to home is being managed by AISLE. It will almost be impossible for you to forget anything.

        <h4>Specification:</h4>

        <h5>Main Features:</h5> Organized Shopping List, In-store Aisle & Bay locator, Delivery to Home Option, Handicapped Help Option.

        <h5>Side Features:</h5> Adding & Removing items anytime & anywhere, Suggesting better price or closer Stores, Organic & Local Products Option, Coupons, Price comparison in all stores, Finding Items based on Recipe, Route Priority for store Shopping
      
    </div>
  </div>
);

export default AboutPage;
