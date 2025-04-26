import { useState } from "react";
import "./App.css";

const info = [
  {
    name: "susan smith",
    role: "web developer",
    descpiption:
      "I am  baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    image: "./pic0.jpeg",
  },
  {
    name: "anna johnson",
    role: "web designer",
    descpiption:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
    image: "./pic1.jpeg",
  },
  {
    name: "rachel green",
    role: "intern",
    descpiption:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    image: "./pic2.jpeg",
  },
  {
    name: "bill anderson",
    role: "the boss",
    descpiption:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    image: "./pic3.jpeg",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <article class="review">
        <div class="img-container">
          <img class="profile-pic" src="/pic0.jpeg" alt="Team Member picture" />
        </div>

        <div>
          <h4 class="member">Anna Smith</h4>
          <p class="job">Designer</p>
        </div>

        <div class="info-cont">
          <p class="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            hic amet dolorem aliquam asperiores nesciunt doloremque blanditiis
            veritatis doloribus dolorum aperiam, id repudiandae expedita fuga
            animi nam nobis sunt officiis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>

        <div class="btn-container">
          <ion-icon
            class="icon btn-left"
            name="chevron-back-outline"
            onclick={() => console.log("left-button clicked")}
          ></ion-icon>
          <ion-icon
            class="icon btn-right"
            name="chevron-forward-outline"
            onclick={() => console.log("right-button clicked")}
          ></ion-icon>
        </div>

        {/* <div class="btn-cont">
        <button>Next</button>
      </div> */}
      </article>
    </>
  );
}

export default App;
