import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul>
          {i === 0 ? (
            <a href="#">
              <svg
                id="logo-25"
                width="147"
                height="46"
                viewBox="0 0 147 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M72.6756 7.40747C74.0634 6.01977 76.3134 6.01977 77.7012 7.40747C79.089 8.79527 79.089 11.0453 77.7012 12.4331L69.2403 20.894C66.8111 17.6384 67.075 13.0082 70.032 10.0512L72.6756 7.40747Z"
                  class="ccompli1"
                  fill="#4F9E91"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M84.771 26.4967C86.159 27.8844 86.159 30.1345 84.771 31.5222C83.384 32.91 81.1336 32.91 79.7458 31.5222L71.2849 23.0614C74.5405 20.6322 79.1707 20.896 82.1277 23.853L84.771 26.4967Z"
                  class="ccustom"
                  fill="#EBE1C5"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M65.6821 38.5924C64.2944 39.9802 62.0443 39.9802 60.6566 38.5924C59.2688 37.2046 59.2688 34.9546 60.6566 33.5668L69.1174 25.106C71.5466 28.3616 71.2828 32.9918 68.3258 35.9487L65.6821 38.5924Z"
                  class="ccompli2"
                  fill="#EBCC6E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.5865 19.5032C52.1987 18.1154 52.1987 15.8654 53.5865 14.4776C54.9743 13.0898 57.2243 13.0898 58.6121 14.4776L67.073 22.9385C63.8174 25.3677 59.1871 25.1038 56.2302 22.1469L53.5865 19.5032Z"
                  class="ccustom"
                  fill="#ED834E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M70.7849 37.5562C72.8312 35.281 73.7823 32.3697 73.638 29.5033L77.7014 33.5667C77.7115 33.5768 77.7217 33.5869 77.7319 33.597V36.498C77.7319 38.4606 76.1409 40.0516 74.1783 40.0516C72.5842 40.0516 71.2353 39.002 70.7849 37.5562Z"
                  class="ccustom"
                  fill="#ED834E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.6226 24.6058C56.8977 26.6522 59.809 27.6033 62.6754 27.459L58.6121 31.5224C58.6019 31.5325 58.5918 31.5427 58.5818 31.5528H55.6808C53.7182 31.5529 52.1272 29.9618 52.1272 27.9992C52.1272 26.4052 53.1768 25.0562 54.6226 24.6058Z"
                  class="ccompli1"
                  fill="#4F9E91"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M83.735 21.3942C81.4601 19.3478 78.5488 18.3967 75.6824 18.5409L79.7457 14.4776C79.7559 14.4675 79.7659 14.4573 79.776 14.4471H82.6771C84.64 14.4471 86.231 16.0382 86.231 18.0008C86.231 19.5949 85.181 20.9438 83.735 21.3942Z"
                  class="ccompli2"
                  fill="#EBCC6E"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M67.573 8.44368C65.5266 10.7188 64.5756 13.6301 64.7198 16.4966L60.6565 12.4332C60.6463 12.4231 60.6362 12.413 60.626 12.4029V9.50188C60.626 7.53928 62.217 5.94818 64.1796 5.94818C65.7737 5.94818 67.1226 6.99788 67.573 8.44368Z"
                  class="ccustom"
                  fill="#EBE1C5"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.1798 3.05701C60.6204 3.05701 57.7349 5.94251 57.7349 9.50191V10.7554C55.5935 10.1959 53.2203 10.7551 51.5422 12.4332C49.0253 14.9501 49.0253 19.0308 51.5422 21.5477L52.4285 22.434C50.5187 23.5526 49.2361 25.6261 49.2361 27.9992C49.2361 31.5586 52.1216 34.4441 55.681 34.4441H56.9344C56.3749 36.5855 56.9341 38.9587 58.6122 40.6367C61.1291 43.1536 65.2098 43.1536 67.7267 40.6367L70.3703 37.9931C72.7024 35.661 73.7916 32.5566 73.6379 29.5032L77.7014 33.5666C80.2183 36.0835 84.2991 36.0835 86.8161 33.5666C89.3331 31.0497 89.3331 26.969 86.8161 24.4522L85.9301 23.566C87.8391 22.4474 89.1221 20.3739 89.1221 18.0008C89.1221 14.4414 86.2361 11.5559 82.6771 11.5559H81.4236C81.9832 9.41441 81.4239 7.04121 79.7458 5.36311C77.229 2.84621 73.1483 2.84621 70.6314 5.36311L67.9877 8.00681C65.6556 10.3389 64.5664 13.4432 64.7201 16.4966L60.6567 12.4332C60.6465 12.4231 60.6364 12.413 60.6262 12.4029V9.50191C60.6262 7.53931 62.2172 5.94831 64.1798 5.94831C65.7739 5.94831 67.1228 6.99791 67.5732 8.44371C67.7067 8.29531 67.8448 8.14961 67.9876 8.00681L69.745 6.24941C68.6264 4.33961 66.5529 3.05701 64.1798 3.05701ZM79.7761 14.4472C79.766 14.4573 79.756 14.4675 79.7458 14.4776L75.6825 18.5409C78.549 18.3967 81.4602 19.3477 83.7351 21.3942C85.1811 20.9438 86.2311 19.5948 86.2311 18.0008C86.2311 16.0382 84.6401 14.4472 82.6771 14.4472H79.7761ZM58.5818 31.5528C58.5919 31.5426 58.602 31.5324 58.6122 31.5223L62.6755 27.4589C59.8091 27.6032 56.8979 26.6521 54.6228 24.6058C53.177 25.0562 52.1273 26.4051 52.1273 27.9992C52.1273 29.9618 53.7184 31.5528 55.681 31.5528H58.5818ZM54.512 24.5048C54.4017 24.4029 54.293 24.2984 54.1859 24.1913V24.1914C54.293 24.2985 54.4017 24.4029 54.512 24.5048ZM74.1783 42.943C71.8051 42.943 69.7316 41.6603 68.613 39.7505L70.3703 37.9931C70.5132 37.8503 70.6513 37.7046 70.7848 37.5562C71.2352 39.002 72.5841 40.0517 74.1783 40.0517C76.1409 40.0517 77.7319 38.4607 77.7319 36.4981V33.5971C78.5647 34.419 79.5657 34.9682 80.6232 35.2445V36.4981C80.6232 40.0575 77.7377 42.943 74.1783 42.943ZM77.7014 7.40751C76.3136 6.01981 74.0636 6.01981 72.6758 7.40751L70.0321 10.0512C67.0752 13.0082 66.8113 17.6384 69.2405 20.894L77.7014 12.4331C79.0892 11.0453 79.0892 8.79531 77.7014 7.40751ZM84.7711 31.5222C86.1591 30.1344 86.1591 27.8844 84.7711 26.4966L82.1277 23.8529C79.1708 20.896 74.5405 20.6321 71.2849 23.0613L79.7458 31.5222C81.1336 32.91 83.3841 32.91 84.7711 31.5222ZM65.6822 38.5923C64.2944 39.9801 62.0444 39.9801 60.6566 38.5923C59.2689 37.2045 59.2689 34.9545 60.6566 33.5667L69.1175 25.1058C71.5467 28.3614 71.2828 32.9917 68.3259 35.9486L65.6822 38.5923ZM53.5866 14.4776C52.1989 15.8654 52.1989 18.1154 53.5866 19.5032L56.2303 22.1469C59.1873 25.1038 63.8175 25.3677 67.0731 22.9385L58.6122 14.4776C57.2244 13.0899 54.9744 13.0899 53.5866 14.4776Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M1.53271 16.0898H4.69331V25.911H10.1217V28.5716H1.53271V16.0898Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M15.8603 28.8395C14.8008 28.8395 13.8722 28.649 13.0746 28.2681C12.277 27.8752 11.658 27.3395 11.2175 26.661C10.789 25.9705 10.5747 25.1789 10.5747 24.286C10.5747 23.3932 10.789 22.6075 11.2175 21.929C11.658 21.2385 12.277 20.7028 13.0746 20.3219C13.8722 19.929 14.8008 19.7326 15.8603 19.7326C16.9198 19.7326 17.8483 19.929 18.6459 20.3219C19.4435 20.7028 20.0566 21.2385 20.4851 21.929C20.9256 22.6075 21.1458 23.3932 21.1458 24.286C21.1458 25.1789 20.9256 25.9705 20.4851 26.661C20.0566 27.3395 19.4435 27.8752 18.6459 28.2681C17.8483 28.649 16.9198 28.8395 15.8603 28.8395ZM15.8603 26.3931C16.4912 26.3931 16.9912 26.2086 17.3602 25.8396C17.7412 25.4586 17.9316 24.9408 17.9316 24.286C17.9316 23.6313 17.7412 23.1194 17.3602 22.7504C16.9912 22.3694 16.4912 22.179 15.8603 22.179C15.2293 22.179 14.7234 22.3694 14.3425 22.7504C13.9734 23.1194 13.7889 23.6313 13.7889 24.286C13.7889 24.9408 13.9734 25.4586 14.3425 25.8396C14.7234 26.2086 15.2293 26.3931 15.8603 26.3931Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M27.0492 32.6787C26.4778 32.6787 25.9004 32.6251 25.3171 32.518C24.7457 32.4108 24.2516 32.268 23.835 32.0894V29.9109C24.7754 30.3156 25.8468 30.518 27.0492 30.518C27.9182 30.518 28.5432 30.3394 28.9241 29.9823C29.317 29.6252 29.5134 29.1014 29.5134 28.4109V27.8931C29.1682 28.1907 28.7396 28.4228 28.2277 28.5895C27.7277 28.7562 27.192 28.8395 26.6206 28.8395C25.7159 28.8395 24.9183 28.649 24.2278 28.2681C23.5374 27.8871 22.9957 27.3514 22.6029 26.661C22.2219 25.9705 22.0315 25.1789 22.0315 24.286C22.0315 23.3813 22.2219 22.5837 22.6029 21.8933C22.9838 21.2028 23.5195 20.673 24.21 20.304C24.9004 19.9231 25.6921 19.7326 26.5849 19.7326C27.8111 19.7326 28.8229 20.1076 29.6205 20.8576V20.0004H32.6562V27.9824C32.6562 29.4704 32.1978 30.6252 31.2812 31.4466C30.3765 32.268 28.9658 32.6787 27.0492 32.6787ZM27.4063 26.411C27.8944 26.411 28.3289 26.286 28.7098 26.036C29.0908 25.786 29.3586 25.4527 29.5134 25.036V23.5361C29.3467 23.1194 29.0729 22.792 28.692 22.5539C28.311 22.304 27.8825 22.179 27.4063 22.179C26.7635 22.179 26.2456 22.3694 25.8528 22.7504C25.4599 23.1194 25.2635 23.6253 25.2635 24.2682C25.2635 24.9229 25.4599 25.4467 25.8528 25.8396C26.2456 26.2205 26.7635 26.411 27.4063 26.411Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M38.739 28.8395C37.6795 28.8395 36.751 28.649 35.9534 28.2681C35.1558 27.8752 34.5367 27.3395 34.0963 26.661C33.6677 25.9705 33.4534 25.1789 33.4534 24.286C33.4534 23.3932 33.6677 22.6075 34.0963 21.929C34.5367 21.2385 35.1558 20.7028 35.9534 20.3219C36.751 19.929 37.6795 19.7326 38.739 19.7326C39.7985 19.7326 40.727 19.929 41.5246 20.3219C42.3222 20.7028 42.9353 21.2385 43.3639 21.929C43.8043 22.6075 44.0246 23.3932 44.0246 24.286C44.0246 25.1789 43.8043 25.9705 43.3639 26.661C42.9353 27.3395 42.3222 27.8752 41.5246 28.2681C40.727 28.649 39.7985 28.8395 38.739 28.8395ZM38.739 26.3931C39.3699 26.3931 39.8699 26.2086 40.239 25.8396C40.6199 25.4586 40.8104 24.9408 40.8104 24.286C40.8104 23.6313 40.6199 23.1194 40.239 22.7504C39.8699 22.3694 39.3699 22.179 38.739 22.179C38.1081 22.179 37.6021 22.3694 37.2212 22.7504C36.8521 23.1194 36.6676 23.6313 36.6676 24.286C36.6676 24.9408 36.8521 25.4586 37.2212 25.8396C37.6021 26.2086 38.1081 26.3931 38.739 26.3931Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M94.4319 16.0898H97.5929V28.5716H94.4319V16.0898Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M99.1931 20.0004H102.229V20.8576C103.026 20.1076 104.038 19.7326 105.264 19.7326C106.157 19.7326 106.949 19.9231 107.639 20.304C108.33 20.673 108.865 21.2028 109.246 21.8933C109.627 22.5718 109.818 23.3635 109.818 24.2682C109.818 25.161 109.627 25.9586 109.246 26.661C108.865 27.3514 108.33 27.8871 107.639 28.2681C106.961 28.649 106.169 28.8395 105.264 28.8395C104.693 28.8395 104.145 28.7502 103.622 28.5716C103.11 28.405 102.681 28.1728 102.336 27.8752V32.4822H99.1931V20.0004ZM104.443 26.3931C105.086 26.3931 105.604 26.2027 105.996 25.8217C106.389 25.4408 106.586 24.9229 106.586 24.2682C106.586 23.6134 106.389 23.1016 105.996 22.7325C105.604 22.3516 105.086 22.1611 104.443 22.1611C103.967 22.1611 103.538 22.2861 103.157 22.5361C102.776 22.7742 102.503 23.1016 102.336 23.5182V25.036C102.503 25.4527 102.776 25.786 103.157 26.036C103.538 26.2741 103.967 26.3931 104.443 26.3931Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M114.503 28.8395C113.813 28.8395 113.093 28.7681 112.343 28.6252C111.593 28.4943 110.997 28.3038 110.557 28.0538V25.7503C111.045 26.036 111.628 26.2741 112.307 26.4646C112.997 26.6431 113.628 26.7324 114.2 26.7324C114.616 26.7324 114.92 26.7026 115.11 26.6431C115.301 26.5836 115.396 26.4646 115.396 26.286C115.396 26.1431 115.331 26.03 115.2 25.9467C115.081 25.8515 114.854 25.7562 114.521 25.661C114.2 25.5539 113.825 25.4408 113.396 25.3217C112.67 25.1074 112.099 24.8872 111.682 24.661C111.265 24.4348 110.956 24.1491 110.753 23.8039C110.551 23.4587 110.45 23.0242 110.45 22.5004C110.45 21.5718 110.813 20.8814 111.539 20.429C112.277 19.9647 113.283 19.7326 114.557 19.7326C115.176 19.7326 115.825 19.7981 116.503 19.929C117.194 20.06 117.711 20.2326 118.057 20.4469V22.7147C117.7 22.4766 117.223 22.2801 116.628 22.1254C116.045 21.9706 115.497 21.8933 114.985 21.8933C114.581 21.8933 114.265 21.9349 114.039 22.0182C113.813 22.0897 113.7 22.2206 113.7 22.4111C113.7 22.5897 113.813 22.7266 114.039 22.8218C114.265 22.917 114.67 23.0361 115.253 23.1789C115.634 23.2742 115.795 23.3158 115.735 23.3039C116.497 23.5063 117.086 23.7325 117.503 23.9825C117.92 24.2325 118.211 24.5301 118.378 24.8753C118.557 25.2086 118.646 25.6372 118.646 26.161C118.646 26.9824 118.289 27.6371 117.575 28.1252C116.872 28.6014 115.848 28.8395 114.503 28.8395Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M123.338 28.8395C122.16 28.8395 121.273 28.5121 120.678 27.8574C120.095 27.2026 119.803 26.3396 119.803 25.2682V20.0004H122.946V24.911C122.946 25.8991 123.392 26.3931 124.285 26.3931C124.69 26.3931 125.059 26.2979 125.392 26.1074C125.725 25.9169 125.999 25.6372 126.213 25.2682V20.0004H129.356V28.5716H126.321V27.6431C125.952 28.0359 125.505 28.3335 124.981 28.5359C124.458 28.7383 123.91 28.8395 123.338 28.8395Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
                <path
                  d="M130.965 20.0004H133.876V20.929C134.233 20.5481 134.644 20.2564 135.108 20.054C135.572 19.8397 136.066 19.7326 136.59 19.7326C137.233 19.7326 137.745 19.8278 138.126 20.0183C138.519 20.2088 138.834 20.4945 139.072 20.8754C139.429 20.5183 139.864 20.2385 140.376 20.0362C140.888 19.8338 141.406 19.7326 141.929 19.7326C143.06 19.7326 143.864 20.0243 144.34 20.6076C144.816 21.179 145.054 22.0063 145.054 23.0896V28.5716H142.054V23.5361C142.054 23.0599 141.965 22.7147 141.786 22.5004C141.608 22.2861 141.31 22.179 140.894 22.179C140.358 22.179 139.923 22.3694 139.59 22.7504C139.602 22.9527 139.608 23.2623 139.608 23.6789V28.5716H136.608V23.4111C136.608 22.9706 136.531 22.6551 136.376 22.4647C136.221 22.2742 135.947 22.179 135.555 22.179C134.947 22.179 134.424 22.5182 133.983 23.1968V28.5716H130.965V20.0004Z"
                  class="cneutral"
                  fill="#3D3A2C"
                ></path>{" "}
              </svg>
            </a>
          ) : (
            <b>{link.heading}</b>
          )}
          {link.links.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
const links = [
  {
    heading: "Casa Blossom",
    links: [
      {
        name: "Flowers always make people better, happier, they are sunshine and medicine for the soul.",
        link: "",
      },
      {
        name: ". ",
        link: "",
      },
      {
        name: "Calle Ocho, Miami, Florida",
        link: "",
      },

      {
        name: "+178843222222",
        link: "",
      },
    ],
  },
  {
    heading: "Working hours",
    links: [
      {
        name: "Monday - Friday: ",
        link: "",
      },
      {
        name: "9AM - 5PM",
        link: "",
      },
      {
        name: "Saturday:",
        link: "",
      },
      {
        name: "9Am - 3PM",
        link: "",
      },
      {
        name: "Sunday: Closed",
        link: "",
      },
    ],
  },
  {
    heading: "Customer service",
    links: [
      {
        name: "Customer service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Shipping Policy",
        link: "",
      },
      {
        name: "Events",
        link: "",
      },
    ],
  },
];
