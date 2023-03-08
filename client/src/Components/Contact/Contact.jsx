import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <DatasetLinkedIcon className="icon" />
            <span>Be in touch with us</span>
          </div>
          <div className="main">
            <input type="text" placeholder="Enter your e-mail..." />
            <button>Join us</button>
          </div>
          <div className="icons">
            <FacebookIcon className="fb" />
            <InstagramIcon className="ins" />
            <LinkedInIcon className="lin" />
            <YouTubeIcon className="you" />
          </div>
        </div>
        <div className="about">
          <div className="info">
            <img src="./assets/diamond.gif" alt="logo" />
          </div>
          <div className="details">
            <h2>Diamond</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
              blanditiis? Debitis rerum veritatis incidunt neque dolor. Aut
              laboriosam iste laudantium tempore aspernatur sunt illum porro rem
              accusamus nesciunt, quam voluptas architecto nobis doloremque iure
              molestiae labore aperiam vitae tenetur cumque? Quidem est incidunt
              ex consectetur magni sequi modi veniam. Dolores expedita veritatis
              in distinctio maiores officia aliquam culpa minus vero excepturi,
              cupiditate aperiam neque reiciendis nihil laboriosam! Aliquam
              dignissimos maiores voluptatibus rem incidunt illo dolores
              reprehenderit illum est qui, odio suscipit corporis corrupti
              tempore optio, ipsum, numquam repellendus natus nam libero
              veritatis nemo voluptates doloremque explicabo! Porro dignissimos
              similique odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
