import { useState } from "react";
import "./App.css";
import Person from "./Person";

const info = [
  {
    name: "susan smith",
    role: "web developer",
    descpiption:
      "I am  baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    image: "./pic0.jpeg",
  },
  {
    name: "peter jones",
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
  const [people, setPeople] = useState(info);

  // let number = 2;

  const [num, setNum] = useState(0);

  function incrementCount() {
    setNum((prevNum) => prevNum + 1);
  }

  function decrementCount() {
    setNum((prevNum) => prevNum - 1);
  }

  return (
    <>
      <Person
        name={people[num].name}
        role={people[num].role}
        descpiption={people[num].descpiption}
        image={people[num].image}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </>
  );
}

export default App;
