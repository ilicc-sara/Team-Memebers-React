import React from "react";

function Person(props) {
  console.log(props);

  const { name, role, descpiption, image } = props;
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
  );
}

export default Person;
