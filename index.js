// import { createTypingTestElements, openCity } from "./elements";

// document.addEventListener("DOMContentLoaded", function () {
//     createTypingTestElements();
// });

const root = document.querySelector("#root");

const container = document.querySelector(".container");

const proTabcontent = document.querySelector("#pro");

const texts = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur totam suscipit est exercitationem, molestias vero modi, adipisci repudiandae et fugit! Odio explicabo dignissimos similique doloremque, maxime fuga, laborum aut ab dolore voluptate sapiente officiis voluptates excepturi numquam possimus veritatis consequuntur inventore autem quos. Animi autem perspiciatis dicta ex, aliquam officia veritatis fugit temporibus beatae! Cum natus ratione autem eaque error. Labore expedita nemo placeat, dolore tempore obcaecati quasi, libero reprehenderit deleniti vel, asperiores recusandae. Nisi nobis obcaecati eius ipsum? Saepe, illo! Ratione ipsum odio eligendi totam. Provident, suscipit. Iure non iusto veniam unde reprehenderit quisquam sapiente quas dolores beatae!`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolor? Deleniti praesentium cupiditate eaque totam, vitae ad! Reiciendis error at fugiat sit nostrum asperiores dolore veritatis, cupiditate culpa molestiae illo eveniet quod odit, fuga maxime ipsum? Sequi aspernatur, illo nisi neque, veniam expedita dignissimos voluptatum iusto assumenda itaque ducimus deleniti? Unde suscipit commodi ab dolor aperiam mollitia sapiente autem maiores explicabo vitae modi impedit eos aspernatur consequatur nesciunt placeat debitis totam dignissimos ad, reprehenderit molestiae? Quibusdam expedita culpa consectetur? Soluta odio voluptates quaerat reiciendis quidem mollitia veniam, ex alias atque impedit dignissimos sit quasi voluptatem ullam cumque dolorum doloremque eos.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit totam saepe obcaecati vitae laudantium repellat voluptatibus corrupti nihil. Consequatur, ad laborum adipisci non ipsum aut sed id eaque aliquid aspernatur soluta eveniet! Possimus inventore asperiores minus sapiente doloremque iusto amet adipisci saepe nesciunt eligendi aliquid sequi, obcaecati dolorum assumenda illum minima quis! Culpa adipisci, dignissimos perspiciatis placeat tempora dolore suscipit aperiam inventore aliquid tempore delectus hic, at ut voluptatem, soluta qui dicta dolorem laudantium quo earum. Laudantium nemo debitis dolor, eaque tenetur dolorum maxime et placeat? Alias inventore consequatur dolore earum cupiditate, natus maxime! Temporibus quisquam praesentium quod accusantium laborum?`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur illo officiis. Deleniti molestias consectetur rerum exercitationem, odio voluptatem ex debitis. Asperiores laboriosam, commodi cumque minima accusantium rerum ratione velit explicabo deserunt dolores reprehenderit dolore neque et? Dolores nostrum, totam facilis mollitia tenetur qui dolorum repellat! Sit numquam porro nihil facere. Vero consequuntur ullam earum quibusdam facilis neque necessitatibus. Nemo, quasi. Illo, deleniti! Quia, ad fugit error a voluptatibus deleniti libero molestiae! Sed quibusdam cumque ducimus. Dolor, natus consequuntur cupiditate asperiores, cumque a dignissimos, ut deleniti unde perspiciatis illum aliquid magni illo libero perferendis nostrum aperiam voluptatem porro voluptas esse?`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim, dolorem, officiis ratione sunt dicta harum architecto sequi eum officia eligendi? Atque, et veniam harum ad quia maxime molestias neque, illo alias dignissimos debitis fugit delectus! Enim earum temporibus provident molestiae dolores repellat nisi velit, nesciunt eum id asperiores harum tenetur ullam incidunt eos aut libero eveniet beatae magni esse eius accusantium aperiam! Vitae id corporis dolor earum totam aspernatur debitis, reprehenderit, quo cum consequuntur vero dolores praesentium repellendus voluptatem error sed corrupti itaque quaerat dolorem! Ratione modi, unde recusandae omnis, in dolore dicta a aliquid accusamus quis laborum. Assumenda!`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi eos architecto dolore consequuntur temporibus eaque ratione aspernatur ut dolorum nihil possimus, expedita, voluptates minima labore aut repellat, excepturi fuga accusantium corporis! Debitis mollitia deserunt ducimus ad iusto sapiente, voluptatibus itaque molestias optio dolorum eligendi deleniti sint voluptates minima earum minus inventore, sit et? Quae maiores cum voluptatibus incidunt cumque rem necessitatibus ex ratione corporis suscipit! Quisquam, saepe error sunt dolore facilis nihil tempore vel. Excepturi debitis nisi eius omnis voluptatum iste quasi cumque consequatur optio voluptatibus? Reiciendis hic nesciunt veniam voluptatum odio! Iste rerum libero dolore quisquam quibusdam nemo?`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam nisi nesciunt doloremque dolor eligendi dicta labore veniam sequi, dolorum magnam numquam quisquam, illum facilis pariatur. Natus, asperiores. Dolore quas, magnam porro repellat velit natus asperiores laborum adipisci mollitia eligendi aperiam blanditiis rerum vero nobis, sed repudiandae facere maiores laudantium neque non officia error. Placeat corrupti praesentium soluta nam culpa qui similique, temporibus numquam ducimus voluptatem neque tempore, rem quisquam minus iusto? Eaque, similique sint! Architecto possimus tempore exercitationem quia aut, unde, eos non corrupti, maxime a distinctio nostrum! Quisquam veritatis voluptatibus facilis ipsam eligendi cupiditate perferendis ipsum saepe soluta.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae placeat quaerat ea excepturi vero necessitatibus impedit dolore? Quae quos, minima atque, sed sunt perferendis officiis corrupti dolore nobis cum accusantium ratione cumque nihil quaerat consectetur amet? Laboriosam perspiciatis architecto officiis quos? Eum, possimus? Corporis, molestias assumenda sequi, quas quisquam mollitia similique voluptate quos atque reiciendis, tempore quis! Nam eaque necessitatibus cumque earum, dolore maiores ullam aspernatur inventore qui architecto harum velit rerum ex eligendi, adipisci doloremque laborum sint non? Deserunt, iusto magni quis, ipsum tempore animi cumque amet eius quidem tenetur omnis, possimus id sit nulla. Similique, debitis quo.`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis nemo placeat quibusdam vitae omnis quas molestias neque nisi similique error, optio aliquid facere, rerum commodi ipsa, necessitatibus earum eius quasi totam. Nesciunt sit dolor aperiam dicta molestias provident odio incidunt ullam. Distinctio adipisci earum assumenda modi. Exercitationem expedita qui, voluptatum reprehenderit blanditiis ratione fugit. Quo nemo praesentium facilis aspernatur tempore fuga vitae rem, consequatur eveniet molestiae ab atque rerum ratione vel doloribus voluptatum expedita magnam earum. Non, reprehenderit delectus consectetur cupiditate tempore dignissimos aliquam exercitationem inventore tenetur natus itaque quo repellat, fugit, aperiam architecto. Consequuntur quae nam laudantium reiciendis.`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facilis nemo placeat quibusdam vitae omnis quas molestias neque nisi similique error, optio aliquid facere, rerum commodi ipsa, necessitatibus earum eius quasi totam. Nesciunt sit dolor aperiam dicta molestias provident odio incidunt ullam. Distinctio adipisci earum assumenda modi. Exercitationem expedita qui, voluptatum reprehenderit blanditiis ratione fugit. Quo nemo praesentium facilis aspernatur tempore fuga vitae rem, consequatur eveniet molestiae ab atque rerum ratione vel doloribus voluptatum expedita magnam earum. Non, reprehenderit delectus consectetur cupiditate tempore dignissimos aliquam exercitationem inventore tenetur natus itaque quo repellat, fugit, aperiam architecto. Consequuntur quae nam laudantium reiciendis.`,
];

const label = document.querySelector("#text");
label.textContent = texts[Math.floor(Math.random() * 10)];

// input
const input = document.querySelector("#input");

let labelTextArray = label.textContent.split("");
let inputTextArray = input.value.split("");

labelTextArray.forEach((i) => {
  inputTextArray.forEach((j) => {
    console.log(j);
  });
});

// for (let i = 0; i < labelTextArray.length; i++) {
//     for (let j = 0; j < inputTextArray.length; j++) {
//         if (labelTextArray[i] == inputTextArray[j]) {
//             labelTextArray.style.color = "aqua";
//             break;
//         } else {
//             labelTextArray.style.color = "red";
//         }
//         console.log(labelTextArray[0], inputTextArray[0]);
//     }
// }

//  //
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const time = document.querySelector(".clock");
});

// timer

btn.addEventListener("click", (e) => {
  // <span id="countdown" style="font-weight: bold;"></span>
  const clock = document.querySelector(".clock");
  const options = document.querySelectorAll(".minute-option");
  let a = options[0].textContent.slice(0, 1);
  console.log(a);
  let timeInSecs;
  let ticker;

  function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval(tick(), 1000);
  }

  function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
      timeInSecs--;
    } else {
      clearInterval(ticker);
      startTimer(5 * 60); // 4 minutes in seconds
    }

    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

    clock.textContent = pretty;
  }

  startTimer(5 * 60); // 4 minutes in seconds
});
