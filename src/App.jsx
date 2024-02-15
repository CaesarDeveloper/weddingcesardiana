import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cdCover from "./assets/cdcover.png";
import decorationTopRight from "./assets/decorationTopRight.png";
import decorationTopLeft from "./assets/decorationTopLeft.png";
import howmet from "./assets/howmet.png";
import propuesta from "./assets/propuesta.png";
import linearGold from "./assets/linearGold.png";
import leftDecorators from "./assets/leftDecorators.png";
import rightDecorators from "./assets/rightDecorators.png";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const links = [
    { label: "Instagram", link: "https://www.instagram.com/" },
    { label: "Twitter", link: "https://twitter.com/" },
    { label: "LinkedIn", link: "https://www.linkedin.com/" },
    // Add more links as needed
  ];
  //i.imgur.com/t6ffnbn.png

  return (
    <div class="container mx-auto">
      {/* Top left decoration */}
      <img
        src={decorationTopLeft}
        alt="image-top-left"
        class="top-left-decoration absolute top-0 right-0"
      />
      <img
        src={decorationTopRight}
        alt="image-top-right"
        class="top-right-decoration absolute top-0 right-0"
      />

      <img
        src={leftDecorators}
        alt="image-top-right"
        class="top-left-decoration-variable-a absolute top-0 right-0"
      />

      <img
        src={leftDecorators}
        alt="image-top-right"
        class="top-left-decoration-variable-b absolute top-0 right-0"
      />

      <img
        src={rightDecorators}
        alt="image-top-right"
        class="top-right-decoration-variable-a absolute top-0 right-0"
      />

      <img
        src={rightDecorators}
        alt="image-top-right"
        class="top-right-decoration-variable-b absolute top-0 right-0"
      />

      {/* First section */}
      <div class="wrap">
        <div class="title relative">
          <img
            alt="César & Diana"
            className="mb-4 w-full h-auto"
            src={cdCover}
            style={{
              objectFit: "cover",
              margin: "auto",
              position: "relative",
              zIndex: 22,
              height: "893px",
            }}
          />
          <div
            class="absolute text-white p-4 bottom-0 right-0 left-0"
            style={{
              zIndex: 222,
              paddingBottom: "65px",
            }}
          >
            <h1 className="allura-regular text-2xl md:text-3xl lg:text-4xl">
              César & Diana
            </h1>
            <p className="arimo-regular title-description text-sm md:text-base">
              Boda Civil - 9 de Marzo, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div class="wrap relative">
        {/* <img
          src={decorationTopRight}
          alt="image-top-right"
          class="top-right-decoration absolute top-0 right-0"
        /> */}
        <div class="title">
          <h3 class="!text-2xl md:!text-3xl lg:!text-3xl pt-16 pb-6 !font-bold">
            Cómo Nos Conocimos
          </h3>
          <img
            src={howmet}
            alt="howmet"
            width={450}
            className=" items-center m-auto"
          />
          <p
            class="text-sm md:text-base"
            style={{
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            Después de hacer Match, atravesar media pandemia, sobrevivir a una
            relación a distancia, mudarse de ciudad, pasar por alegrías,
            tristezas, enojos, pero sobre todo por mucho amor, hemos decidido
            darnos el sí, sí al amor, sí a la felicidad ¡Sí a pasar el resto de
            nuestras vidas juntos!
          </p>
        </div>

        <div class="title">
          <h3 class="!text-2xl md:!text-3xl lg:!text-3xl pt-16 pb-6 !font-bold">
            La Propuesta
          </h3>
          <img
            src={propuesta}
            alt="howmet"
            width={450}
            className=" items-center m-auto"
          />
          <p
            class="text-sm md:text-base"
            style={{
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            En un día especial, arrodillé mi corazón y le pedí a la persona que
            ilumina mi mundo que fuera mi compañera de por vida. Hoy, con
            alegría y amor desbordante, los invitamos a celebrar este compromiso
            que nació de la conexión más profunda. Esperamos con emoción que se
            unan a nosotros en este día tan especial para sellar nuestro amor en
            el mundo real.
          </p>

          <img
            src={linearGold}
            alt="linearGold"
            width={400}
            className="m-auto"
          />
          <p
            class="text-sm md:text-base font-bold"
            style={{
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            ¡La presencia de cada uno de ustedes hará este momento aún más
            inolvidable!
          </p>
          <img
            src={linearGold}
            alt="linearGold"
            width={400}
            className="m-auto"
          />
        </div>
      </div>

      <div class="wrap relative">
        <div className=" p-6  mx-auto  text-left pl-28 pr-28">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <CalendarIcon className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">6 PM | Recepción</span>
            </li>
            <li className="flex items-center space-x-3">
              <HeartIcon className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">7 PM | Ceremonia</span>
            </li>
            <li className="flex items-center space-x-3">
              <MenuIcon className="text-gray-400 flex-shrink-" />
              <span className="text-gray-700">8 PM | Cena</span>
            </li>
            <li className="flex items-center space-x-3">
              <LocateIcon className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">
                Salón de fiestas Villa Victoria
              </span>
            </li>
            <li className="flex space-x-3">
              <HotelIcon className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">
                Si necesitas quedarte en Ags. éstas son algunas opciones dónde
                puedes hospedarte:
                <br />
                <a
                  target="_blank"
                  href="https://www.booking.com/hotel/mx/vive-place.es-mx.html?aid=356980&dest_id=7252021&dest_type=hotel&group_adults=2&group_children=0&label=gog235jc-1DCAMooAFCDmFndWFzY2FsaWVudGVzSFJYA2igAYgBAZgBUrgBB8gBDNgBA-gBAfgBAogCAagCA7gC2qSqrgbAAgHSAiQ2NGUzMjc1My1mNmQxLTRjMDAtYTBiMS1lYzU5Zjc4YjA5ZjDYAgTgAgE-Share-7kb8Di%401707774599&no_rooms=1&req_adults=2&req_children=0"
                  className="block  underline py-2 px-4 rounded-md  transition duration-300"
                >
                  Hotel Vice Place
                </a>
                <a
                  target="_blank"
                  href="https://www.booking.com/hotel/mx/ibis-budget-aguascalientes-norte.es-mx.html?aid=356980&label=gog235jc-1FCAMooAFCDmFndWFzY2FsaWVudGVzSFJYA2igAYgBAZgBUrgBB8gBDNgBAegBAfgBAogCAagCA7gC2qSqrgbAAgHSAiQ2NGUzMjc1My1mNmQxLTRjMDAtYTBiMS1lYzU5Zjc4YjA5ZjDYAgXgAgE&sid=7ba0767f1fac84cde6dfd92a8b67d303&all_sr_blocks=448067602_135050967_2_2_0;checkin=2024-03-09;checkout=2024-03-10;dest_id=4480676;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=448067602_135050967_2_2_0;hpos=1;matching_block_id=448067602_135050967_2_2_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=448067602_135050967_2_2_0__71155;srepoch=1707774742;srpvid=5dbb99c8691e004f;type=total;ucfs=1&#hotelTmpl"
                  className="block underline  py-2 px-4 rounded-md  transition duration-300"
                >
                  Ibis Budget Aguascalientes Norte
                </a>
                <a
                  target="_blank"
                  href="https://www.booking.com/hotel/mx/aranzazu-plaza-kristal-aguascalientes.es-mx.html?aid=356980&checkin=2024-03-09&checkout=2024-03-10&dest_id=22527&dest_type=hotel&group_adults=2&group_children=0&label=gog235jc-1DCAMooAFCDmFndWFzY2FsaWVudGVzSFJYA2igAYgBAZgBUrgBB8gBDNgBA-gBAfgBAogCAagCA7gC2qSqrgbAAgHSAiQ2NGUzMjc1My1mNmQxLTRjMDAtYTBiMS1lYzU5Zjc4YjA5ZjDYAgTgAgE-Share-3m6MXd%401707774796&no_rooms=1&req_adults=2&req_children=0"
                  className="block underline  py-2 px-4 rounded-md  transition duration-300"
                >
                  Aranzazu Plaza Kristal Aguascalientes
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <MessageCircleIcon className="text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">
                Para nosotros es muy importante contar contigo, por favor
                confirma tu asistencia en el botón de abajo
              </span>
            </li>
            <li className="items-center m-auto">
              <center className="p-10">
                <a
                  href="https://wa.me/+524491129140?text=Hola! Confirmo Asistencia para la Boda"
                  target="_blank"
                  class="m-auto mb-10 mt-5 font-bold bg-gradient-to-r from-[#DF9874] via-[#E7C1AB] to-[#E2BAA0] text-white py-4 px-6 rounded-[10px] "
                >
                  Confirmar Asistencia
                </a>
              </center>
            </li>
          </ul>
        </div>
      </div>

      {/* Text section */}
      <div class="wrap relative">
        <center>
          <img
            src={linearGold}
            alt="linearGold"
            width={400}
            className="m-auto"
          />
          <GiftIcon className="text-gray-400 flex-shrink-0 mt-10" />
          <div class="title">
            <p
              class="text-sm md:text-base"
              style={{
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              Contar con ustedes en nuestra boda es el mejor regalo, pero si lo
              desean, pueden hacernos un obsequio para nuestro nuevo hogar, un
              detalle en efectivo (en nuestra recepción habrá sobres) o a
              nuestra cuenta bancaria:
            </p>

            <p
              class="text-sm md:text-base font-bold"
              style={{
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              Beneficiario: Diana Elizabeth Cruz Macías Cuenta: 142 593 4397
              Tarjeta: 4152314160519248 BBVA
            </p>
            <img
              src={linearGold}
              alt="linearGold"
              width={400}
              className="m-auto mt-10 mb-10"
            />
          </div>
        </center>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="100" // Adjust the width to make it bigger
      height="100" // Adjust the height to make it bigger
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

export default App;
