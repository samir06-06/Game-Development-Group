import menu1_1 from "../Assets/images/menu1-1.png";
import menu1_2 from "../Assets/images/menu1-2.jpg";
import menu1_3 from "../Assets/images/menu1-3.jpg";

import webFlowImage from "../Assets/images/Web-Flow.jpg";
import webDesignerImage from "../Assets/images/Web-Designer.jpg";
import blogsImage from "../Assets/images/15-Blogs.jpg";
import powerRangersImage from "../Assets/images/Power-Rangers.jpg";
import responsiveDesignImage from "../Assets/images/Responsive-Design.png";

import johnLeronImage from "../Assets/images/John-Leron.jpg";
import harveySpectorImage from "../Assets/images/Harvey-Spector.jpg";
import michaelDonaldImage from "../Assets/images/Michael-Donald.jpg";
import markBroskiImage from "../Assets/images/Mark-Broski.jpg";
import bruceSmithImage from "../Assets/images/Michael-Donald.jpg";

let Imgdata1 = [
  {
    name: "trio-1",
    imagePath: menu1_1
  },
  {
    name: "Logo1-black",
    imagePath: menu1_2
  },
  {
    name: "Logo2-white",
    imagePath: menu1_3
  }
];

let Imgdata2 = [
  {
    catagory: "Art",
    personImgPath: johnLeronImage,
    personName: "John Leron",
    MainImagePath: webFlowImage,
    heading: "Why We Love Webflow (And You Should, Too!)",
  },
  {
    catagory: "Gaming",
    personImgPath: harveySpectorImage,
    personName: "Harvey Spector",
    MainImagePath: webDesignerImage,
    heading: "Designers Who Changed the Web",
  },
  {
    catagory: "Gaming",
    personImgPath: michaelDonaldImage,
    personName: "Michael Donald",
    MainImagePath: blogsImage,
    heading: "15 Best Blogs To Follow About Web Design",
  },
  {
    catagory: "Games",
    personImgPath: markBroskiImage,
    personName: "Mark Broski",
    MainImagePath: powerRangersImage,
    heading: "5 Principles Of Effective Web Design",
  },
  {
    catagory: "Games",
    personImgPath: bruceSmithImage,
    personName: "Michael Donald",
    MainImagePath: responsiveDesignImage,
    heading: "10 Great Examples of Responsive Websites",
  }
]


export  { Imgdata1, Imgdata2 };
