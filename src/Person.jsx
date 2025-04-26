import React from "react";

function Person(props) {
  console.log(props);

  const { name, role, descpiption, image, incrementCount, decrementCount } =
    props;
  return (
    <article class="review">
      <div class="img-container">
        <img class="profile-pic" src={image} alt="Team Member picture" />
      </div>

      <div>
        <h4 class="member">{name}</h4>
        <p class="job">{role}</p>
      </div>

      <div class="info-cont">
        <p class="info">{descpiption}</p>
      </div>

      <div class="btn-container">
        <ion-icon
          class="icon btn-left"
          name="chevron-back-outline"
          onclick={() => decrementCount()}
        ></ion-icon>
        <ion-icon
          class="icon btn-right"
          name="chevron-forward-outline"
          onclick={() => incrementCount()}
        ></ion-icon>
      </div>

      {/* <div class="btn-cont">
        <button>Next</button>
      </div> */}
    </article>
  );
}

export default Person;
