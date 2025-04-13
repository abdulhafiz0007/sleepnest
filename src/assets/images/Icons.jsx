export const BottomArrow = ({ headerFixed, arrowActive }) => {
   return (
      <svg
         className={`text-white ${arrowActive ? "block" : "hidden"}`}
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         version="1.1"
         width="10px"
         height="25px"
         viewBox="0 0 256 256"
         xmlSpace="preserve"
      >
         <g
            style={{
               stroke: "currentColor",
               strokeWidth: 0,
               strokeDasharray: "none",
               strokeLinecap: "butt",
               strokeLinejoin: "miter",
               strokeMiterlimit: 10,
               fill: "currentColor",
               fillRule: "nonzero",
               opacity: 1,
            }}
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
         >
            <path
               d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z"
               style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "currentColor",
                  fillRule: "nonzero",
                  opacity: 1,
               }}
               transform=" matrix(1 0 0 1 0 0) "
               strokeLinecap="round"
            />
         </g>
      </svg>
   );
};

export const TopArrow = ({ headerFixed, arrowActive }) => {
   return (
      <svg
         className={`text-white ${arrowActive ? "hidden" : "block"}`}
         fill="currentColor"
         height="25px"
         width="10px"
         version="1.1"
         id="Layer_1"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 330 330"
         xmlSpace="preserve"
      >
         <path
            id="XMLID_224_"
            d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
     l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
     C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
         />
      </svg>
   );
};

export const MenuIcon = ({ headerFixed, closeActive }) => {
   return (
      <svg
         className={` ${closeActive ? "hidden" : "block"}`}
         width="24px"
         height="24px"
         viewBox="0 0 20 20"
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
      >
         <path
            fill="currentColor"
            fillRule="evenodd"
            d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
         />
      </svg>
   );
};

export const CloseIcon = ({ headerFixed, closeActive }) => {
   return (
      <svg
         className={` ${
            closeActive ? "block absolute top-[15px] right-[15px]" : "hidden"
         }`}
         width="30px"
         height="34px"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="currentColor"
         />
      </svg>
   );
};

export const ServiceIcon1 = ({ headerFixed, closeActive }) => {
   return (
      <svg
         width={70}
         height={40}
         viewBox="0 0 70 40"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clipPath="url(#clip0_1_12)">
            <g clipPath="url(#clip1_1_12)">
               <path
                  d="M69.5055 27.904L67.6005 17.678C67.1453 15.2905 65.8717 13.1365 63.999 11.5871C62.1264 10.0377 59.772 9.19001 57.3415 9.18996H47.9855C47.6807 6.65863 46.461 4.32607 44.556 2.63157C42.6509 0.93706 40.1921 -0.00245285 37.6425 -0.0100386H13.7515C12.3555 -0.0167631 10.9819 0.340495 9.76617 1.0265C8.5504 1.71251 7.53444 2.70358 6.81848 3.90196C6.6755 4.15635 6.63715 4.45641 6.71157 4.73858C6.78599 5.02075 6.96732 5.26288 7.21716 5.41367C7.46701 5.56445 7.76573 5.61207 8.05007 5.54642C8.33441 5.48077 8.58203 5.30702 8.74048 5.06196C9.2578 4.19577 9.99211 3.4795 10.8709 2.98389C11.7497 2.48828 12.7426 2.23049 13.7515 2.23596H37.6415C39.791 2.24075 41.8524 3.09047 43.3809 4.60175C44.9093 6.11303 45.7824 8.16468 45.8115 10.314V32.514H26.9525C26.6911 31.0487 25.9226 29.7221 24.7815 28.7665C23.6403 27.8109 22.1994 27.2872 20.711 27.2872C19.2226 27.2872 17.7816 27.8109 16.6405 28.7665C15.4994 29.7221 14.7308 31.0487 14.4695 32.514H13.7505C12.7936 32.5147 11.8513 32.2805 11.0061 31.8319C10.161 31.3832 9.43897 30.7339 8.90348 29.941C8.73626 29.694 8.47781 29.5237 8.18497 29.4673C7.89213 29.411 7.5889 29.4732 7.34198 29.6405C7.09506 29.8077 6.92469 30.0661 6.86833 30.359C6.81198 30.6518 6.87426 30.955 7.04148 31.202C7.78263 32.2992 8.78194 33.1975 9.95159 33.8181C11.1212 34.4387 12.4254 34.7624 13.7495 34.761H14.4625C14.7223 36.2298 15.4911 37.5602 16.634 38.5187C17.7769 39.4772 19.2209 40.0026 20.7125 40.0026C22.2041 40.0026 23.6481 39.4772 24.791 38.5187C25.9339 37.5602 26.7027 36.2298 26.9625 34.761H45.8985C46.1583 36.2298 46.9271 37.5602 48.07 38.5187C49.2129 39.4772 50.6569 40.0026 52.1485 40.0026C53.6401 40.0026 55.0841 39.4772 56.227 38.5187C57.3699 37.5602 58.1387 36.2298 58.3985 34.761H63.8525C64.7027 34.7629 65.5428 34.5764 66.3123 34.2147C67.0819 33.8531 67.7616 33.3254 68.3027 32.6695C68.8438 32.0137 69.2328 31.246 69.4416 30.4218C69.6504 29.5976 69.674 28.7373 69.5105 27.903L69.5055 27.904ZM20.6895 37.741C19.6009 37.741 18.5569 37.3085 17.7872 36.5388C17.0174 35.769 16.585 34.725 16.585 33.6365C16.585 32.5479 17.0174 31.5039 17.7872 30.7341C18.5569 29.9644 19.6009 29.532 20.6895 29.532C21.7781 29.532 22.8221 29.9644 23.5918 30.7341C24.3615 31.5039 24.794 32.5479 24.794 33.6365C24.794 34.725 24.3615 35.769 23.5918 36.5388C22.8221 37.3085 21.7781 37.741 20.6895 37.741ZM52.1235 37.741C51.057 37.7405 50.033 37.3229 49.2703 36.5776C48.5076 35.8322 48.0665 34.8181 48.0415 33.752C48.0474 33.7142 48.0514 33.6761 48.0535 33.638V33.338C48.112 32.541 48.4021 31.7785 48.8881 31.1442C49.3742 30.5099 50.035 30.0315 50.7893 29.7678C51.5436 29.504 52.3585 29.4665 53.1339 29.6597C53.9093 29.8529 54.6113 30.2685 55.1537 30.8554C55.696 31.4423 56.055 32.1749 56.1866 32.9631C56.3181 33.7513 56.2164 34.5607 55.8941 35.2919C55.5718 36.0231 55.0428 36.6442 54.3721 37.0788C53.7015 37.5133 52.9186 37.7424 52.1195 37.738L52.1235 37.741ZM66.5645 31.241C66.2341 31.6406 65.8193 31.9621 65.3499 32.1822C64.8804 32.4023 64.368 32.5156 63.8495 32.514H58.3895C58.1202 31.0483 57.3463 29.7231 56.2021 28.7684C55.058 27.8136 53.6157 27.2895 52.1255 27.287C50.6352 27.2876 49.1939 27.8194 48.0605 28.787V11.435H57.3415C59.2478 11.4357 61.0942 12.1007 62.5634 13.3154C64.0325 14.5301 65.0325 16.2188 65.3915 18.091L67.2975 28.322C67.3985 28.8324 67.3851 29.359 67.2584 29.8637C67.1316 30.3684 66.8947 30.8387 66.5645 31.241Z"
                  fill="#F42C37"
               />
               <path
                  d="M13.0945 12.971C13.0945 12.8235 13.0654 12.6775 13.009 12.5413C12.9526 12.405 12.8698 12.2812 12.7656 12.1769C12.6613 12.0727 12.5375 11.9899 12.4012 11.9335C12.265 11.8771 12.119 11.848 11.9715 11.848H1.12147C0.829569 11.8567 0.552538 11.9788 0.349142 12.1884C0.145745 12.3979 0.0319824 12.6785 0.0319824 12.9705C0.0319824 13.2626 0.145745 13.5431 0.349142 13.7527C0.552538 13.9622 0.829569 14.0843 1.12147 14.093H11.9725C12.27 14.0928 12.5552 13.9745 12.7656 13.7641C12.9759 13.5537 13.0942 13.2685 13.0945 12.971Z"
                  fill="#F42C37"
               />
               <path
                  d="M13.0944 21.7779C13.0944 21.4801 12.9761 21.1944 12.7655 20.9838C12.5549 20.7732 12.2693 20.6549 11.9714 20.6549H3.97145C3.82122 20.6504 3.67162 20.6762 3.53152 20.7305C3.39141 20.7849 3.26365 20.8669 3.1558 20.9716C3.04795 21.0763 2.96221 21.2015 2.90366 21.3399C2.84511 21.4784 2.81494 21.6271 2.81494 21.7774C2.81494 21.9277 2.84511 22.0765 2.90366 22.2149C2.96221 22.3533 3.04795 22.4786 3.1558 22.5833C3.26365 22.6879 3.39141 22.7699 3.53152 22.8243C3.67162 22.8787 3.82122 22.9044 3.97145 22.8999H11.9714C12.2691 22.8999 12.5546 22.7817 12.7652 22.5714C12.9758 22.361 13.0942 22.0756 13.0944 21.7779Z"
                  fill="#F42C37"
               />
            </g>
         </g>
         <defs>
            <clipPath id="clip0_1_12">
               <rect width="69.61" height="39.98" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_12">
               <rect
                  width="69.613"
                  height={40}
                  fill="white"
                  transform="translate(-0.00152588 -0.0100098)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export const ServiceIcon2 = ({ headerFixed, closeActive }) => {
   return (
      <svg
         width="50"
         height="50"
         viewBox="0 0 50 50"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clip-path="url(#clip0_1_24)">
            <g clip-path="url(#clip1_1_24)">
               <path
                  d="M48.1815 26.984L47.3055 25.776C47.103 25.4988 46.9931 25.1647 46.9914 24.8214C46.9898 24.4781 47.0966 24.1431 47.2965 23.864L48.1515 22.645C48.4875 22.17 48.7188 21.6291 48.83 21.0581C48.9412 20.487 48.9299 19.8988 48.7967 19.3325C48.6634 18.7662 48.4114 18.2346 48.0573 17.773C47.7032 17.3114 47.255 16.9303 46.7425 16.655L45.4335 15.955C45.1312 15.794 44.887 15.5422 44.7354 15.235C44.5838 14.9279 44.5324 14.5809 44.5885 14.243L44.8395 12.774C44.9368 12.2006 44.911 11.6132 44.7638 11.0506C44.6167 10.488 44.3515 9.96316 43.986 9.5109C43.6204 9.05863 43.1629 8.6893 42.6437 8.42742C42.1244 8.16554 41.5555 8.0171 40.9745 7.99197L39.4835 7.93197C39.1412 7.91839 38.8119 7.79711 38.5425 7.58541C38.2732 7.37371 38.0776 7.08239 37.9835 6.75297L37.5515 5.33297C37.3889 4.77373 37.1094 4.2554 36.7315 3.81226C36.3535 3.36911 35.8859 3.01126 35.3593 2.76236C34.8328 2.51346 34.2594 2.37919 33.6771 2.36844C33.0948 2.35768 32.5169 2.47068 31.9815 2.69997L30.6125 3.28297C30.2976 3.41489 29.9495 3.4461 29.6161 3.37234C29.2828 3.29857 28.9804 3.12343 28.7505 2.87097L27.7505 1.76297C27.3629 1.32902 26.8874 0.982543 26.3556 0.746552C25.8237 0.510562 25.2478 0.390468 24.666 0.394252C24.0841 0.398035 23.5098 0.52561 22.9811 0.768497C22.4524 1.01138 21.9814 1.36402 21.5995 1.80297L20.6325 2.93097C20.4055 3.18749 20.1048 3.36769 19.7716 3.44697C19.4383 3.52626 19.0887 3.50076 18.7705 3.37397L17.3905 2.81097C16.8953 2.60799 16.3657 2.50207 15.8305 2.49897C14.9313 2.49991 14.0573 2.79585 13.3425 3.34138C12.6277 3.88691 12.1116 4.6519 11.8735 5.51897L11.4805 6.95797C11.3896 7.28912 11.1968 7.58325 10.9293 7.79865C10.6619 8.01404 10.3334 8.13976 9.99049 8.15797L8.51049 8.24897C7.92999 8.28197 7.36316 8.43807 6.8476 8.70689C6.33204 8.97572 5.87956 9.35113 5.52018 9.8082C5.1608 10.2653 4.90275 10.7936 4.76315 11.358C4.62356 11.9224 4.6056 12.5101 4.71049 13.082L4.98249 14.542C5.0454 14.8796 5.00045 15.2285 4.85399 15.5392C4.70753 15.8499 4.467 16.1066 4.16649 16.273L2.86649 16.998C2.35812 17.2809 1.91566 17.6686 1.56845 18.1354C1.22123 18.6022 0.977183 19.1374 0.852469 19.7057C0.727755 20.274 0.725225 20.8622 0.845046 21.4315C0.964867 22.0008 1.2043 22.5382 1.54749 23.008L2.42349 24.208C2.62603 24.4852 2.73593 24.8192 2.73755 25.1625C2.73916 25.5058 2.63241 25.8409 2.43249 26.12L1.57649 27.339C1.24063 27.814 1.00948 28.3549 0.89834 28.9259C0.787204 29.4969 0.798616 30.085 0.931821 30.6513C1.06503 31.2176 1.31698 31.7492 1.67102 32.2108C2.02506 32.6724 2.4731 33.0535 2.98549 33.329L4.29449 34.029C4.59693 34.1898 4.84121 34.4416 4.99282 34.7488C5.14444 35.056 5.19575 35.4031 5.13949 35.741L4.88849 37.21C4.79082 37.7843 4.81667 38.3729 4.96433 38.9365C5.11199 39.5 5.37806 40.0257 5.74481 40.4783C6.11157 40.931 6.57058 41.3003 7.09127 41.5617C7.61196 41.823 8.18237 41.9704 8.76449 41.994L10.2555 42.054C10.5977 42.0673 10.927 42.1884 11.1963 42.3999C11.4657 42.6115 11.6614 42.9027 11.7555 43.232L12.1675 44.662C12.3301 45.221 12.6096 45.739 12.9874 46.182C13.3652 46.6249 13.8327 46.9826 14.359 47.2314C14.8853 47.4802 15.4585 47.6144 16.0405 47.6252C16.6226 47.636 17.2003 47.5231 17.7355 47.294L19.1035 46.71C19.4187 46.5784 19.7669 46.5474 20.1004 46.6214C20.4339 46.6953 20.7364 46.8705 20.9665 47.123L21.9665 48.229C22.3541 48.6634 22.8298 49.0103 23.3619 49.2466C23.894 49.4829 24.4703 49.6032 25.0525 49.5994C25.6347 49.5956 26.2095 49.4679 26.7384 49.2247C27.2674 48.9815 27.7386 48.6284 28.1205 48.189L29.0955 47.061C29.3228 46.8045 29.6236 46.6243 29.957 46.5451C30.2904 46.4658 30.6401 46.4912 30.9585 46.618L32.3375 47.182C32.8332 47.3845 33.363 47.4904 33.8985 47.494C34.7976 47.4933 35.6717 47.1975 36.3864 46.6519C37.1011 46.1063 37.6168 45.3411 37.8545 44.474L38.2475 43.034C38.3391 42.703 38.5323 42.4092 38.7998 42.1939C39.0673 41.9786 39.3956 41.8527 39.7385 41.834L41.2285 41.744C41.8089 41.7109 42.3756 41.5549 42.8911 41.2861C43.4066 41.0173 43.859 40.642 44.2184 40.1851C44.5777 39.7281 44.8358 39.2 44.9755 38.6357C45.1152 38.0713 45.1332 37.4838 45.0285 36.912L44.7565 35.452C44.6936 35.1143 44.7385 34.7654 44.885 34.4547C45.0315 34.144 45.272 33.8873 45.5725 33.721L46.8725 32.995C47.3816 32.7128 47.8248 32.3254 48.1726 31.8587C48.5203 31.3919 48.7647 30.8564 48.8895 30.2879C49.0143 29.7194 49.0166 29.1308 48.8962 28.5613C48.7759 27.9918 48.5356 27.4544 48.1915 26.985L48.1815 26.984ZM46.4705 29.752C46.4216 29.9784 46.325 30.1918 46.187 30.3779C46.0491 30.564 45.873 30.7184 45.6705 30.831L44.3705 31.556C43.6187 31.9716 43.0165 32.6129 42.6488 33.3893C42.2812 34.1657 42.1667 35.038 42.3215 35.883L42.5935 37.343C42.6361 37.5718 42.6294 37.8071 42.5738 38.0331C42.5182 38.2591 42.415 38.4706 42.2711 38.6536C42.1273 38.8366 41.946 38.9867 41.7395 39.0941C41.533 39.2014 41.3059 39.2634 41.0735 39.276L39.5935 39.367C38.7353 39.4151 37.914 39.7317 37.2456 40.272C36.5772 40.8123 36.0954 41.549 35.8685 42.378L35.4755 43.808C35.3811 44.1548 35.1753 44.4609 34.8898 44.6792C34.6043 44.8975 34.2549 45.0158 33.8955 45.016C33.6814 45.0161 33.4693 44.9754 33.2705 44.896L31.8905 44.332C31.3953 44.1288 30.8657 44.0225 30.3305 44.019C29.7432 44.0194 29.1628 44.1453 28.6282 44.3883C28.0935 44.6313 27.617 44.9858 27.2305 45.428L26.2535 46.547C26.1003 46.7252 25.91 46.8678 25.6961 46.9651C25.4821 47.0623 25.2495 47.1117 25.0145 47.11C24.7845 47.1122 24.5568 47.0649 24.3468 46.9712C24.1368 46.8775 23.9494 46.7396 23.7975 46.567L22.7975 45.459C22.412 45.0302 21.9408 44.6872 21.4144 44.4521C20.888 44.2169 20.318 44.0949 19.7415 44.094C19.1841 44.092 18.6323 44.205 18.1205 44.426L16.7515 45.009C16.5486 45.0969 16.3296 45.1419 16.1085 45.141C15.7545 45.14 15.4104 45.0247 15.1273 44.8123C14.8442 44.5998 14.6373 44.3016 14.5375 43.962L14.1255 42.532C13.8852 41.7071 13.3927 40.9781 12.7172 40.4473C12.0416 39.9164 11.2168 39.6103 10.3585 39.572L8.86849 39.512C8.6368 39.5056 8.40932 39.4486 8.20201 39.3449C7.99471 39.2413 7.81261 39.0935 7.66849 38.912C7.52089 38.7329 7.41388 38.5239 7.35484 38.2995C7.29579 38.0751 7.28612 37.8405 7.32649 37.612L7.57749 36.143C7.72147 35.295 7.59473 34.4233 7.21527 33.6514C6.8358 32.8795 6.22288 32.2468 5.46349 31.843L4.15549 31.143C3.94874 31.0353 3.76782 30.8841 3.62521 30.6997C3.4826 30.5153 3.38171 30.3021 3.32949 30.075C3.27338 29.8494 3.26777 29.6142 3.31306 29.3862C3.35835 29.1582 3.45342 28.943 3.59149 28.756L4.44749 27.537C4.94488 26.8354 5.2087 25.995 5.20152 25.135C5.19434 24.275 4.91653 23.4391 4.40749 22.746L3.53149 21.546C3.39202 21.3596 3.29534 21.1448 3.24833 20.9168C3.20132 20.6888 3.20513 20.4533 3.25949 20.227C3.30928 20.0004 3.40696 19.787 3.54597 19.6013C3.68499 19.4155 3.86212 19.2616 4.06549 19.15L5.36549 18.425C6.11673 18.0083 6.71809 17.3661 7.08467 16.5892C7.45125 15.8122 7.56452 14.9398 7.40849 14.095L7.14649 12.646C7.10216 12.4175 7.10791 12.1822 7.16333 11.9562C7.21874 11.7302 7.32252 11.519 7.46749 11.337C7.61106 11.1531 7.79255 11.0022 7.99962 10.8947C8.20668 10.7872 8.43447 10.7256 8.66749 10.714L10.1475 10.623C11.0061 10.5729 11.8274 10.2547 12.4955 9.71303C13.1637 9.17138 13.6449 8.43369 13.8715 7.60397L14.2645 6.16497C14.3587 5.81798 14.5644 5.5116 14.8499 5.29311C15.1355 5.07462 15.4849 4.95615 15.8445 4.95597C16.0586 4.95659 16.2706 4.99764 16.4695 5.07697L17.8495 5.63997C18.3447 5.84295 18.8743 5.94887 19.4095 5.95197C19.9968 5.95163 20.5772 5.82573 21.1119 5.58272C21.6465 5.33971 22.123 4.9852 22.5095 4.54297L23.4865 3.42597C23.6387 3.25044 23.8265 3.10932 24.0375 3.01198C24.2484 2.91464 24.4777 2.86332 24.71 2.86143C24.9423 2.85954 25.1723 2.90712 25.3849 3.00101C25.5974 3.09489 25.7875 3.23294 25.9425 3.40597L26.9425 4.51197C27.3283 4.94195 27.8001 5.28603 28.3275 5.52188C28.8548 5.75772 29.4258 5.88007 30.0035 5.88097C30.5609 5.88258 31.1126 5.76957 31.6245 5.54897L32.9935 4.96597C33.1964 4.87818 33.4154 4.83357 33.6365 4.83497C33.9903 4.83546 34.3344 4.95034 34.6175 5.16247C34.9007 5.37459 35.1076 5.67258 35.2075 6.01197L35.6195 7.44297C35.86 8.26767 36.3525 8.99644 37.0281 9.52709C37.7036 10.0577 38.5283 10.3637 39.3865 10.402L40.8765 10.463C41.1091 10.4705 41.3373 10.528 41.5458 10.6315C41.7542 10.7351 41.9379 10.8822 42.0845 11.063C42.2326 11.2418 42.3399 11.4507 42.3992 11.6752C42.4584 11.8997 42.4681 12.1344 42.4275 12.363L42.1755 13.834C42.0324 14.6819 42.1596 15.5533 42.539 16.3249C42.9183 17.0966 43.5307 17.7294 44.2895 18.134L45.5985 18.834C45.8033 18.9428 45.9826 19.0938 46.1247 19.2771C46.2667 19.4604 46.3683 19.6718 46.4225 19.8972C46.4768 20.1227 46.4825 20.3571 46.4394 20.5849C46.3963 20.8128 46.3054 21.0289 46.1725 21.219L45.3175 22.438C44.8205 23.1401 44.557 23.9807 44.5641 24.8409C44.5713 25.7011 44.8489 26.5372 45.3575 27.231L46.2335 28.431C46.4823 28.823 46.5674 29.2969 46.4705 29.751V29.752Z"
                  fill="#F42C37"
                  stroke="white"
                  stroke-width="0.35"
               />
               <path
                  d="M28.2685 21.1829L23.1285 26.2929L21.4595 24.6129C21.3506 24.5034 21.2211 24.4164 21.0786 24.3569C20.936 24.2974 20.7831 24.2666 20.6287 24.2662C20.4742 24.2658 20.3212 24.2958 20.1783 24.3545C20.0354 24.4132 19.9055 24.4995 19.796 24.6084C19.6865 24.7174 19.5995 24.8468 19.54 24.9894C19.4805 25.1319 19.4496 25.2848 19.4492 25.4393C19.4488 25.5937 19.4788 25.7468 19.5375 25.8896C19.5963 26.0325 19.6826 26.1624 19.7915 26.2719L22.2915 28.7849C22.4002 28.8942 22.5295 28.981 22.6718 29.0402C22.8142 29.0993 22.9668 29.1298 23.121 29.1298C23.2752 29.1298 23.4278 29.0993 23.5702 29.0402C23.7125 28.981 23.8418 28.8942 23.9505 28.7849L29.9245 22.8489C30.0431 22.7424 30.1387 22.6128 30.2057 22.4682C30.2727 22.3235 30.3095 22.1667 30.314 22.0074C30.3185 21.848 30.2905 21.6894 30.2318 21.5412C30.1731 21.393 30.0849 21.2582 29.9725 21.1452C29.8601 21.0321 29.7259 20.9431 29.5781 20.8835C29.4302 20.8239 29.2718 20.795 29.1124 20.7985C28.953 20.802 28.796 20.8379 28.651 20.904C28.5059 20.9701 28.3758 21.065 28.2685 21.1829Z"
                  fill="#F42C37"
                  stroke="#F42C37"
                  stroke-width="0.3"
               />
               <path
                  d="M33.9099 15.943C28.917 10.9502 20.822 10.9502 15.8291 15.943C10.8363 20.9359 10.8363 29.0309 15.8291 34.0237C20.822 39.0166 28.917 39.0166 33.9099 34.0237C38.9027 29.0309 38.9027 20.9359 33.9099 15.943Z"
                  stroke="#F42C37"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-dasharray="55 10"
               />
            </g>
         </g>
         <defs>
            <clipPath id="clip0_1_24">
               <rect
                  width="48.58"
                  height="49.55"
                  fill="white"
                  transform="translate(0.579987 0.219971)"
               />
            </clipPath>
            <clipPath id="clip1_1_24">
               <rect
                  width="48.579"
                  height="49.552"
                  fill="white"
                  transform="translate(0.58049 0.218994)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export const ServiceIcon3 = ({ headerFixed, closeActive }) => {
   return (
      <svg
         width="51"
         height="40"
         viewBox="0 0 51 40"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clip-path="url(#clip0_1_38)">
            <path
               d="M48.9665 32.9328C49.7257 32.0327 50.1353 30.8893 50.1205 29.7118C50.1353 28.5344 49.7257 27.3909 48.9665 26.4908C48.2112 25.5697 47.1585 24.9406 45.9895 24.7118V24.6118C46.0612 23.5982 45.7993 22.589 45.2437 21.7382C44.6881 20.8874 43.8694 20.2417 42.9125 19.8998V17.3998C42.9484 15.1087 42.5143 12.8345 41.6372 10.7176C40.76 8.60074 39.4583 6.68608 37.8125 5.0918C36.2182 3.44594 34.3035 2.14427 32.1867 1.26711C30.0698 0.389954 27.7956 -0.044077 25.5045 -0.00819779C23.2134 -0.044077 20.9392 0.389954 18.8223 1.26711C16.7054 2.14427 14.7908 3.44594 13.1965 5.0918C11.5506 6.68608 10.249 8.60074 9.3718 10.7176C8.49464 12.8345 8.06061 15.1087 8.09649 17.3998V19.6118C7.18249 19.7628 6.3587 20.252 5.78868 20.9823C5.21866 21.7126 4.94409 22.6305 5.01949 23.5538V24.7078C3.84903 24.9357 2.79478 25.5649 2.03849 26.4868C1.28018 27.3887 0.872267 28.5336 0.889485 29.7118C0.874629 30.8893 1.28429 32.0327 2.04349 32.9328C2.79978 33.8547 3.85403 34.4839 5.02449 34.7118V35.8658C5.01358 36.4107 5.11443 36.9521 5.32081 37.4565C5.5272 37.961 5.83475 38.4178 6.22449 38.7988C6.59036 39.182 7.03084 39.4861 7.51876 39.6925C8.00669 39.8989 8.53172 40.0031 9.06149 39.9988H11.1765C11.7062 40.0031 12.2313 39.8989 12.7192 39.6925C13.2071 39.4861 13.6476 39.182 14.0135 38.7988C14.4032 38.4178 14.7108 37.961 14.9172 37.4565C15.1235 36.9521 15.2244 36.4107 15.2135 35.8658V23.5578C15.2244 23.0129 15.1235 22.4715 14.9172 21.9671C14.7108 21.4626 14.4032 21.0058 14.0135 20.6248C13.6476 20.2416 13.2071 19.9375 12.7192 19.7311C12.2313 19.5247 11.7062 19.4205 11.1765 19.4248H10.1205V17.4058C10.0913 15.3818 10.4773 13.3733 11.2545 11.5043C12.0317 9.63524 13.1838 7.94531 14.6395 6.5388C16.0458 5.08333 17.7354 3.93144 19.604 3.15422C21.4727 2.377 23.4808 1.99092 25.5045 2.0198C27.5283 1.99078 29.5366 2.37679 31.4055 3.15402C33.2743 3.93125 34.9641 5.08321 36.3705 6.5388C37.826 7.94508 38.9778 9.63468 39.7551 11.5034C40.5323 13.372 40.9184 15.3801 40.8895 17.4038V19.4228C40.2144 19.4132 39.5447 19.5451 38.9236 19.81C38.3026 20.0749 37.7439 20.4669 37.2835 20.9608C36.8036 21.4394 36.4245 22.0094 36.1686 22.637C35.9126 23.2646 35.7851 23.9371 35.7935 24.6148V34.8068C35.7851 35.4845 35.9126 36.157 36.1686 36.7846C36.4245 37.4122 36.8036 37.9822 37.2835 38.4608C37.7438 38.9549 38.3025 39.3471 38.9235 39.6121C39.5446 39.8772 40.2143 40.0093 40.8895 39.9998C41.5646 40.0094 42.2343 39.8775 42.8553 39.6126C43.4764 39.3477 44.0351 38.9557 44.4955 38.4618C44.9754 37.9832 45.3545 37.4132 45.6104 36.7856C45.8663 36.158 45.9939 35.4855 45.9855 34.8078V34.7078C47.1554 34.4809 48.2096 33.8532 48.9665 32.9328ZM5.02449 32.5968C4.38811 32.443 3.82668 32.069 3.43959 31.5409C3.0525 31.0129 2.86472 30.365 2.90949 29.7118C2.86472 29.0586 3.0525 28.4107 3.43959 27.8827C3.82668 27.3546 4.38811 26.9806 5.02449 26.8268V32.5968ZM13.1975 23.5588V35.8668C13.2035 36.138 13.1507 36.4073 13.0428 36.6562C12.9349 36.9051 12.7745 37.1277 12.5725 37.3088C12.2005 37.6751 11.7005 37.8821 11.1785 37.8858H9.06249C8.54046 37.8821 8.04043 37.6751 7.66849 37.3088C7.46649 37.1277 7.30605 36.9051 7.19817 36.6562C7.09029 36.4073 7.03752 36.138 7.04349 35.8668V23.5578C7.03752 23.2866 7.09029 23.0173 7.19817 22.7684C7.30605 22.5195 7.46649 22.2969 7.66849 22.1158C8.04043 21.7495 8.54046 21.5425 9.06249 21.5388H11.1775C11.6995 21.5425 12.1995 21.7495 12.5715 22.1158C12.7737 22.2968 12.9343 22.5194 13.0423 22.7683C13.1504 23.0172 13.2033 23.2875 13.1975 23.5588ZM43.9665 34.8088C43.9716 35.2085 43.8978 35.6053 43.7494 35.9764C43.601 36.3476 43.3808 36.6858 43.1015 36.9718C42.8185 37.2719 42.4749 37.5085 42.0936 37.6659C41.7122 37.8233 41.3018 37.8979 40.8895 37.8848C40.4772 37.8979 40.0667 37.8233 39.6854 37.6659C39.3041 37.5085 38.9605 37.2719 38.6775 36.9718C38.3982 36.6858 38.178 36.3476 38.0296 35.9764C37.8811 35.6053 37.8074 35.2085 37.8125 34.8088V24.6158C37.8074 24.2161 37.8811 23.8193 38.0296 23.4482C38.178 23.077 38.3982 22.7388 38.6775 22.4528C38.9604 22.1525 39.3039 21.9157 39.6853 21.7581C40.0666 21.6006 40.4771 21.5258 40.8895 21.5388C41.3018 21.5257 41.7122 21.6003 42.0936 21.7577C42.4749 21.9151 42.8185 22.1517 43.1015 22.4518C43.3808 22.7378 43.601 23.076 43.7494 23.4472C43.8978 23.8183 43.9716 24.2151 43.9665 24.6148V34.8088ZM45.9895 32.5968V26.8278C46.6259 26.9816 47.1873 27.3556 47.5744 27.8837C47.9615 28.4117 48.1493 29.0596 48.1045 29.7128C48.149 30.3658 47.9611 31.0135 47.574 31.5413C47.187 32.0691 46.6257 32.443 45.9895 32.5968Z"
               fill="#F42C37"
            />
            <path
               d="M31.6613 6.66384C29.7046 5.70335 27.541 5.24084 25.3625 5.31735C23.1841 5.39387 21.0583 6.00704 19.1738 7.10245"
               stroke="#F42C37"
               stroke-width="2.20099"
               stroke-linecap="round"
            />
         </g>
         <defs>
            <clipPath id="clip0_1_38">
               <rect
                  width="49.231"
                  height="40"
                  fill="white"
                  transform="translate(0.889511)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export const ServiceIcon4 = ({ headerFixed, closeActive }) => {
   return (
      <svg
         width="45"
         height="42"
         viewBox="0 0 45 42"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clip-path="url(#clip0_1_46)">
            <g clip-path="url(#clip1_1_46)">
               <path
                  d="M7.30095 36.1C7.14882 36.098 7.00352 36.0366 6.89594 35.929C6.78837 35.8214 6.72702 35.6761 6.72495 35.524V27.935C6.72495 27.7821 6.78568 27.6355 6.8938 27.5274C7.00191 27.4193 7.14855 27.3585 7.30145 27.3585C7.45434 27.3585 7.60098 27.4193 7.70909 27.5274C7.81721 27.6355 7.87794 27.7821 7.87794 27.935V35.476C7.88604 35.556 7.87706 35.6367 7.85157 35.713C7.82609 35.7892 7.78469 35.8591 7.73013 35.9181C7.67557 35.9771 7.60909 36.0238 7.5351 36.0552C7.4611 36.0866 7.38129 36.1018 7.30095 36.1ZM40.6899 37.582V33.289C40.6879 33.1369 40.6265 32.9916 40.5189 32.884C40.4114 32.7764 40.2661 32.7151 40.1139 32.713C39.9646 32.7233 39.824 32.7873 39.7181 32.8932C39.6122 32.999 39.5482 33.1396 39.5379 33.289V37.582C39.5391 37.8663 39.484 38.1479 39.3758 38.4108C39.2676 38.6736 39.1084 38.9124 38.9074 39.1134C38.7064 39.3144 38.4676 39.4736 38.2047 39.5819C37.9419 39.6901 37.6602 39.7452 37.3759 39.744H4.71195C4.42769 39.7452 4.14602 39.6901 3.88318 39.5819C3.62033 39.4736 3.38152 39.3144 3.18053 39.1134C2.97953 38.9124 2.82032 38.6736 2.71209 38.4108C2.60386 38.1479 2.54875 37.8663 2.54994 37.582V12.988C2.54889 12.7039 2.60409 12.4223 2.71238 12.1596C2.82067 11.8968 2.9799 11.6581 3.18088 11.4572C3.38187 11.2564 3.62063 11.0972 3.88341 10.9891C4.14619 10.8809 4.42778 10.8258 4.71195 10.827H37.3749C37.6592 10.8258 37.9409 10.8809 38.2037 10.9892C38.4666 11.0974 38.7054 11.2566 38.9064 11.4576C39.1074 11.6586 39.2666 11.8974 39.3748 12.1603C39.483 12.4231 39.5381 12.7048 39.5369 12.989V16.989C39.539 17.1411 39.6004 17.2864 39.7079 17.394C39.8155 17.5016 39.9608 17.5629 40.1129 17.565C40.2623 17.5547 40.4029 17.4908 40.5088 17.3849C40.6147 17.279 40.6787 17.1384 40.6889 16.989V12.989C40.6863 12.0982 40.3313 11.2446 39.7013 10.6146C39.0714 9.98471 38.2178 9.62966 37.3269 9.62702H4.71195C3.82127 9.62966 2.96782 9.98457 2.33792 10.6143C1.70802 11.244 1.35285 12.0973 1.34995 12.988V37.63C1.35258 38.5209 1.70764 39.3745 2.33757 40.0044C2.96749 40.6343 3.8211 40.9894 4.71195 40.992H37.3749C38.2636 40.9698 39.1082 40.6004 39.7278 39.963C40.3475 39.3257 40.6928 38.4709 40.6899 37.582ZM44.5799 25.909V24.609C44.5747 23.3111 44.0567 22.0678 43.139 21.15C42.2212 20.2322 40.9779 19.7143 39.6799 19.709H30.4099C29.112 19.7143 27.8687 20.2322 26.9509 21.15C26.0331 22.0678 25.5152 23.3111 25.5099 24.609V25.909C25.5152 27.207 26.0331 28.4502 26.9509 29.368C27.8687 30.2858 29.112 30.8038 30.4099 30.809H39.6799C40.9779 30.8038 42.2212 30.2858 43.139 29.368C44.0567 28.4502 44.5747 27.207 44.5799 25.909ZM39.6799 20.909C40.6587 20.9171 41.5952 21.3095 42.2873 22.0017C42.9794 22.6938 43.3718 23.6302 43.3799 24.609V25.909C43.3718 26.8878 42.9794 27.8242 42.2873 28.5164C41.5952 29.2085 40.6587 29.6009 39.6799 29.609H30.4099C29.4312 29.6009 28.4947 29.2085 27.8026 28.5164C27.1105 27.8242 26.718 26.8878 26.7099 25.909V24.609C26.718 23.6302 27.1105 22.6938 27.8026 22.0017C28.4947 21.3095 29.4312 20.9171 30.4099 20.909H39.6799ZM36.3669 7.56102C36.5125 7.48978 36.6242 7.36423 36.6781 7.21143C36.7319 7.05862 36.7236 6.89077 36.6549 6.74402L34.1089 1.31602C34.0783 1.24578 34.0321 1.18338 33.974 1.13351C33.9158 1.08363 33.847 1.04757 33.7729 1.02802C33.6165 0.980081 33.4494 0.980081 33.2929 1.02802L22.1009 6.31202C21.9679 6.3894 21.8689 6.51409 21.8236 6.66122C21.7784 6.80835 21.7903 6.96712 21.8569 7.10588C21.9235 7.24465 22.04 7.35322 22.183 7.40996C22.3261 7.46669 22.4853 7.46743 22.6289 7.41202L33.2439 2.41202L35.5499 7.31202C35.6027 7.40781 35.6787 7.4888 35.771 7.54751C35.8633 7.60623 35.9688 7.64079 36.0779 7.64802C36.2219 7.60902 36.3179 7.60902 36.3669 7.56102Z"
                  fill="#F42C37"
                  stroke="#F42C37"
                  stroke-width="0.8"
               />
               <path d="M40.117 25.099H37.851Z" fill="#F42C37" />
               <path
                  d="M40.117 25.099H37.851"
                  stroke="#F42C37"
                  stroke-width="2.6"
                  stroke-linecap="round"
               />
            </g>
         </g>
         <defs>
            <clipPath id="clip0_1_46">
               <rect
                  width="44.03"
                  height="40.8"
                  fill="white"
                  transform="translate(0.949951 0.589966)"
               />
            </clipPath>
            <clipPath id="clip1_1_46">
               <rect
                  width="44.03"
                  height="40.804"
                  fill="white"
                  transform="translate(0.949951 0.588013)"
               />
            </clipPath>
         </defs>
      </svg>
   );
};

export const SearchIcon = () => {
   return (
      <svg
         className="text-white"
         fill="#dc2626"
         height="24"
         viewBox="0 0 24 24"
         width="24"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="m19.25 19.25-3.75-3.75m-10.75-4.5c0-3.45178 2.79822-6.25 6.25-6.25 3.4518 0 6.25 2.79822 6.25 6.25 0 3.4518-2.7982 6.25-6.25 6.25-3.45178 0-6.25-2.7982-6.25-6.25z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
         />
      </svg>
   );
};

export const StarIcon = ({ isActive }) => {
   return (
      <svg
         className={`${isActive ? "text-[#ED8A19]" : "text-slate-400"}`}
         height="24px"
         width="24px"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 47.94 47.94"
      >
         <path
            style={{ fill: "currentColor" }}
            d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
            c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
            c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
            c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
            c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
            C22.602,0.567,25.338,0.567,26.285,2.486z"
         />
      </svg>
   );
};

