import React, { useState } from "react";
import Title from "./Title";

const Esignature = () => {
  const [name, setName] = useState("");
  const [date, setdate] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setdate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".345rem 0",
  };
  return (
    <div>
      <Title text={!name ? "Name" : name} classes={"subtitle"} />
      <Title text={!date ? "Dob" : date} classes={"subtitle"} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
        pariatur vero. Illum praesentium at dolore repellat harum veritatis,
        suscipit velit magnam ipsam cumque ratione quae? Cupiditate amet alias
        officia sequi quia quas! Architecto voluptas maiores nam laboriosam
        dicta nemo corporis, esse eaque numquam, doloremque qui animi sit
        veritatis provident quam. Exercitationem nihil nisi aliquam deleniti
        minima magnam accusamus doloremque? Libero at ratione ipsum
        necessitatibus non sint optio quibusdam aspernatur! Totam tempora at et
        excepturi eius, illo dolorem numquam, veniam ullam obcaecati
        voluptatibus, sint exercitationem ab mollitia consequuntur distinctio?
        Alias voluptatibus mollitia vitae distinctio, maiores tempora quae
        debitis voluptates molestias voluptatum adipisci dolores assumenda ad
        dignissimos nam hic ipsam ipsum expedita facilis magni praesentium! Enim
        perspiciatis, obcaecati optio fugiat similique debitis explicabo
        sapiente vero accusamus veritatis provident dolorum et vitae architecto
        quae accusantium quisquam tempore porro voluptas, quidem, aliquid non!
        Molestias natus magni ex sit cumque debitis cupiditate iusto ad sed
        ullam, iste voluptatem nisi perspiciatis placeat aliquam necessitatibus
        saepe error fuga veniam minus? Illo dolor ipsum soluta, dolorem ut
        obcaecati, numquam eligendi nisi sit ipsam quibusdam quam
        exercitationem. Cum minus nesciunt eligendi eos sequi reiciendis at
        aperiam ducimus officiis molestias necessitatibus alias, ut mollitia,
        quidem incidunt perferendis eveniet. Facere quibusdam commodi, saepe
        aliquid dolore sunt reiciendis amet culpa repellendus sed, eveniet vitae
        neque nobis cumque! Repudiandae vel minima ut beatae quasi dignissimos
        asperiores aliquid modi eius! Rem ut consequatur minus dolorem,
        voluptates a qui reprehenderit debitis suscipit adipisci, enim eaque
        distinctio quas quia minima recusandae voluptatum omnis placeat repellat
        commodi nostrum mollitia repellendus praesentium consectetur.
        Voluptatibus, ut architecto? Impedit enim ducimus necessitatibus
        molestiae alias rerum suscipit dolore vero quo incidunt delectus ut
        tenetur, hic nulla veniam unde minima earum aliquam. Eum corporis,
        voluptate minima provident facere sint magni obcaecati aut beatae, at
        quaerat corrupti quibusdam ad voluptates tempore rem culpa.
      </p>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          top: "15vh",
        }}
      >
        <input
          type="date"
          value={date}
          onChange={handleDate}
          style={inputStyle}
        />
        <input
          type="text"
          value={name}
          onChange={handleName}
          style={inputStyle}
        />
      </footer>
    </div>
  );
};

export default Esignature;
