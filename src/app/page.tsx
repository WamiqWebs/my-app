"use client";

import { useEffect } from "react";
import SearchFilter from "@/components/SearchFilter";
import Products from "@/components/Products";
import Footer from "@/components/footer";
import Icons from "@/components/icons";

export default function Home() {

  const allproducts = [
    { id: 1, image: "/watch.png", title: "Black Watch", description: "Kabhi bura waqt ni aane degi.", price: "₹500", rating: 5.5 },
    { id: 2, image: "/blackshirt.png", title: "black Shirt", description: "black logo pe zyada match kriengi.", price: "₹800", rating: 8.0 },
    { id: 3, image: "/blackinshirt.png", title: "black in Shirt", description: "one slave free with one shirt.", price: "₹1200", rating: 10.0 },
    { id: 4, image: "/blueshirt.png", title: "sky blue Shirt", description: "shirt itni aachi,log apki gndi shkl bhooljayn.", price: "₹800", rating: 7.6 },
    { id: 5, image: "/olevsgreenwatch.png", title: "unique design watch", description: "watch", price: "₹ 1000", rating: 10.0 },
    { id: 6, image: "/bjogger.png", title: "blue Jogger", description: "blue Color.", price: "₹800", rating: 7.9 },
    { id: 7, image: "/gjogger.png", title: "green Jogger", description: "Comfortable Supportive Joggers.", price: "₹800", rating: 6.6 },
    { id: 8, image: "/greyshoes.png", title: "Grey Shoes", description: "Smart Design.", price: "₹800", rating: 6.6 },
    { id: 9, image: "/rgloves.png", title: "red Gloves", description: "Smart Design.", price: "₹800", rating: 6.6 },
    { id: 10, image: "/bgloves.png", title: "Black Gloves", description: "Smart Design.", price: "₹800", rating: 6.6 },
    { id: 11, image: "/pgloves.png", title: "Pink Gloves", description: "Smart Design.", price: "₹800", rating: 6.9 },
    { id: 12, image: "/wgloves.png", title: "white gloves", description: "Smart Design.", price: "₹800", rating: 8.6 },
    { id: 13, image: "/nwatch.png", title: "watch", description: "watch.", price: "₹1800", rating: 6.6 },
    { id: 14, image: "/rhat.png", title: "Red Hat", description: "great color and design.", price: "₹20", rating: 10 },
    { id: 15, image: "/bcoat.png", title: "Coat", description: "Gracefull Coat.", price: "₹300", rating: 9.9 },
    { id: 16, image: "/bjacket.png", title: "Blue Jacket", description: "great cloth jacket.", price: "₹30", rating: 9.9 },
    { id: 17, image: "/blackjacket.png", title: "Black Jacket", description: "all size awailable.", price: "₹30", rating: 7.2 },
    { id: 18, image: "/blackandjacket.png", title: "black and Jacket", description: "ek baar pee or fr khulke jee.", price: "₹50", rating: 9.9 },
    { id: 19, image: "/redt-shirt.png", title: "Red Shirt", description: "shirt itni aachi,log apki gndi shkl bhooljayn.", price: "₹1200"  ,rating: 5.8  },
    { id: 20, image: "/shoes.png", title: "Running Shoes", description: "pehenke apni zimdedaryon se dur bhaagjayn.", price: "₹1500"  ,rating: 9.9  },
    { id: 21, image: "/jeans.png", title: "Jeans", description: "Stylish and comfortable jeans.", price: "₹800"  ,rating: 9.3  },
    { id: 22, image: "/bcoat.png", title: "Coat", description: "Gracefull Coat.", price: "₹1100"  ,rating: 8.7  },
    { id: 23, image: "/jogger.png", title: "Jogger", description: "Stylish and comfortable,perfect for kicking someone.", price: "₹200"  ,rating: 9.9  },
    { id: 24, image: "/blackcap.png", title: "Cap", description: "Premium Quality..", price: "₹2200"  ,rating: 9.9  },
    { id: 25, image: "/bmshirt.png", title: "Cool Shirt", description: "Stylish shirt", price: "₹900"  ,rating: 9.9  },
    { id: 26, image: "/newshoes.png", title: "Running Shoes", description: "Lightweight shoes", price: "₹1200"  ,rating: 9.9  },
    { id: 27, image: "/summershirt.png", title: "Summer Shirt", description: "Perfect for summer.", price: "₹800"  ,rating: 6.7  },
    { id: 28, image: "/leatherjacket.png", title: "Leather Jacket", description: "Premium And Heavy Clothe Leather Jacket.", price: "₹2500"  ,rating: 9.9  },
    { id: 29, image: "/blacknjacket.png", title: "Leather Jacket", description: "Premium leather.", price: "₹2900"  ,rating: 8.8  },
    { id: 30, image: "/njacket.png", title: "Leather Jacket", description: "Premium leather.", price: "₹2800"  ,rating: 10.0  },
    { id: 31, image: "/leatherjacket.png", title: "Leather Jacket", description: "Premium leather.", price: "₹2500"  ,rating: 9.0  },
  ];


  const productsitems = [
    { id: 1, image: "/watch.png", title: "Black Watch", description: "Kabhi bura waqt ni aane degi.", price: "₹500", rating: 5.5 },
    { id: 2, image: "/blackshirt.png", title: "black Shirt", description: "black logo pe zyada match kriengi.", price: "₹800", rating: 8.0 },
    { id: 3, image: "/blackinshirt.png", title: "black in Shirt", description: "one slave free with one shirt.", price: "₹1200", rating: 10.0 },
    { id: 4, image: "/blueshirt.png", title: "sky blue Shirt", description: "shirt itni aachi,log apki gndi shkl bhooljayn.", price: "₹800", rating: 7.6 },
    { id: 5, image: "/olevsgreenwatch.png", title: "unique design watch", description: "watch", price: "₹ 1000", rating: 10.0 },
    { id: 6, image: "/bjogger.png", title: "blue Jogger", description: "Crush impress hojaygi.", price: "₹800", rating: 7.9 },
    { id: 7, image: "/gjogger.png", title: "green Jogger", description: "Comfortable Supportive Joggers.", price: "₹800", rating: 6.6 },
    { id: 8, image: "/greyshoes.png", title: "Grey Shoes", description: "Smart Design.", price: "₹800", rating: 6.6 },
    { id: 9, image: "/rgloves.png", title: "red Gloves", description: "Smart Design.", price: "₹800", rating: 6.6 },
    { id: 10, image: "/bgloves.png", title: "Black Gloves", description: "Robbery Gloves.", price: "₹800", rating: 6.6 },
    { id: 11, image: "/pgloves.png", title: "Pink Gloves", description: "Smart Design.", price: "₹800", rating: 6.9 },
    { id: 12, image: "/wgloves.png", title: "white gloves", description: "Great Quality.", price: "₹800", rating: 8.6 },
    { id: 13, image: "/nwatch.png", title: "watch", description: "watch.", price: "₹1800", rating: 6.6 },
    { id: 14, image: "/rhat.png", title: "Red Hat", description: "great color and design.", price: "₹100", rating: 10 },
    { id: 15, image: "/blackcap.png", title: "Cap", description: "Premium Quality.", price: "₹200", rating: 9.9 },
    { id: 16, image: "/bjacket.png", title: "Blue Jacket", description: "Unique Color.", price: "₹400", rating: 9.9 },
    { id: 17, image: "/blackjacket.png", title: "Black Jacket", description: "Great clothe.", price: "₹300", rating: 9.9 },
    { id: 18, image: "/blackandjacket.png", title: "black and Jacket", description: "High Quality Jacket.", price: "₹50", rating: 9.9 },
  ];

  const product = [
    { id: 19, image: "/redt-shirt.png", title: "Red Shirt", description: "shirt itni aachi,log apki gndi shkl bhooljayn.", price: "₹1200" },
    { id: 20, image: "/shoes.png", title: "Running Shoes", description: "pehenke apni zimdedaryon se dur bhaagjayn.", price: "₹1500" },
    { id: 21, image: "/jeans.png", title: "Jeans", description: "Stylish and comfortable jeans.", price: "₹800" },
    { id: 22, image: "/bcoat.png", title: "Coat", description: "Gracefull Coat.", price: "₹1100" },
    { id: 23, image: "/jogger.png", title: "Jogger", description: "Stylish and comfortable,perfect for kicking someone.", price: "₹200" },
    { id: 24, image: "/blackcap.png", title: "cap", description: "Premium Quality..", price: "₹300" },
  ];

  const newProducts = [
    { id: 25, image: "/bmshirt.png", title: "Cool Shirt", description: "Stylish shirt", price: "₹900" },
    { id: 26, image: "/newshoes.png", title: "Running Shoes", description: "Lightweight shoes", price: "₹1200" },
    { id: 27, image: "/summershirt.png", title: "Summer Shirt", description: "Perfect for summer", price: "₹800" },
    { id: 28, image: "/leatherjacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
    { id: 29, image: "/blacknjacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
    { id: 30, image: "/njacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
    { id: 31, image: "/leatherjacket.png", title: "Leather Jacket", description: "Premium leather", price: "₹2500" },
  ];
  useEffect(() => {
    // ✅ ek hi baar save
    localStorage.setItem("allItems", JSON.stringify(allproducts));
  }, []);

  return (
    <>
      <SearchFilter
        productsitems={productsitems}
      />

      <Icons />
 <div className="mt-25"> 
       <Products 
        items={product}
        color={true}
      />
 </div>


     

    </>
  );
}


