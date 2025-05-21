const movieList = [
  {
    id: 1,
    title: "Auto Cartel (ecommerce)",
    description:
      "A Car ecommerce store built for IkeShalom import and export company, created with Nextjs plus working payment system using flutter wave and admin dashboard that store payment orders and to edit the products in the store. It has a private domain and seo optimization. Real time messaging system with socket.io , a 3d carousel and horizontal carousel, images are hosted with aws s3 bucket. It is also responsive on all screen size. Users data are stored on MongoDb.",

    rating: 10,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/auto+cartel.png",
    trailer: "https://www.youtube.com/embed/aXZbJLgRNpA?si=Wz0gc0BTyY1nHssF",
    githubcode: "https://github.com/LordCartel007/Auto-Cartel",
    packages:
      "Nextjs, axios, eslint, flutterwave-react-v3, micro, mongoose, next, react, react-dom, react-icons, react-toastify, styled-components, uuid",
    hostedsite: "https://www.autocartel.shop/",
  },

  {
    id: 2,
    title: "AutoCartel Admin",
    description:
      "An ecommerce car store admin dashboard built for IkeShalom import and export company , you can upload file which is handled by aws s3 bucket and stored in mongodb, drag and drop features , edit features, google sign in authentication, logout, categories and logout records, the site is email protected from the backend if your email is not added you will not be able to login. It is also responsive on all screen size.",
    rating: 8,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/autocartel+admin.png",
    trailer: "https://www.youtube.com/embed/a9qNuYxOwSc?si=t6JYl2ZtvfK2D1u0",
    githubcode: "https://github.com/LordCartel007/Ecommerce-Admin-AutoCartel",
    packages:
      "@auth/mongodb-adapter, @aws-sdk/client-s3, @react-oauth/google, axios, jwt-decode, mime-types, mongodb, mongoos, multiparty, next, next-auth, react, react-dom, react-sortablejs, react-sweetalert2, sortablejs, spinners-react, sweetalert2, @types/node, autoprefixer, postcss, tailwindcss",
    hostedsite:
      "https://ecommerce-admin-auto-cartel.vercel.app/products/edit/68245b58ccb27989d287e519",
  },
  {
    id: 3,
    title: "Nikky Fashion (start up)",
    description:
      "My start up, an ecommerce cloth store called Nikky fashion with working payment system using flutter wave and admin dashboard that store payment orders and to edit the products in the store. It has a private domain and seo optimization. Real time messaging system with socket.io , images are hosted with aws s3 bucket and we have a physical store address. It is also responsive on all screen size. Users data are stored on MongoDb.",
    rating: 10,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/nikky+fashion.png",
    trailer: "https://www.youtube.com/embed/rwFHp2yba7s?si=9o7U28e1NWXqHrXs",
    githubcode: "https://github.com/LordCartel007/nikkys-fashion",
    packages:
      "Nextjs, axios, eslint, flutterwave-react-v3, micro, mongoose, next, react, react-dom, react-icons, react-toastify, styled-components, uuid",
    hostedsite: "https://www.nikkyfashion.store/",
  },

  {
    id: 4,
    title: "NikkyFashion Admin",
    description:
      "My cloth store startup admin dashboard , you can upload file which is handled by aws s3 bucket and stored in mongodb, drag and drop features , edit features, google sign in authentication, logout, categories and logout records, the site is email protected from the backend if your email is not added you will not be able to login. It is also responsive on all screen size.",
    rating: 8,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/nikky+fashion+admin.png",
    trailer: "https://www.youtube.com/embed/8h2RoYG4O08?si=4LWLiyjuxU1enkDg",
    githubcode: "https://github.com/LordCartel007/nikkys-fashion-admin",
    packages:
      "@auth/mongodb-adapter, @aws-sdk/client-s3, @react-oauth/google, axios, jwt-decode, mime-types, mongodb, mongoos, multiparty, next, next-auth, react, react-dom, react-sortablejs, react-sweetalert2, sortablejs, spinners-react, sweetalert2, @types/node, autoprefixer, postcss, tailwindcss",
    hostedsite: "https://nikkys-fashion-admin.vercel.app/",
  },
  {
    id: 5,
    title: "Cartel AI (Startup)",
    description:
      "My little Ai startup, a chat bot that you can text and talk with , it uses voice recognition it can read and see any input file you give it , you can upload a pdf, code , maths questions, picture etc it will see the file and solve any problem or question you asked it about the file. So it can read a pdf file to you , solve maths , write code, tell you a joke and it has a voice recognition system that allows you to open any website with voice commands. it also has a dark or white theme plus sign up, login, forget password authentication and otp verification etc, It is also responsive on all screen size.",
    rating: 9,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/ai+cartel.png",
    trailer: "https://www.youtube.com/embed/3Qj4JlU-bbo?si=-FeGXTMWNSxG7kz_",
    githubcode: "https://github.com/LordCartel007/Cartel-Chat-Bot",
    packages:
      "@tailwindcss/vite, react vite,axios, framer-motion, react , react-dom, react-hot-toast, react-router-dom, sign-up-auth, styled-components, tailwindcss, zustand",
    hostedsite: "https://ai.autocartel.shop/",
  },
  {
    id: 6,
    title: "Ecommerce Store (stripe)",
    description:
      "A fictional Ecommerce Store with working payment system using stripe and admin dashboard that store payment orders and to edit the products in the store.  Images are hosted with aws s3 bucket . It is also responsive on all screen size. Users data are stored on MongoDb.",
    rating: 9,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/ecommerce+store.png",
    trailer: "https://www.youtube.com/embed/JRXR7gbrhfQ?si=CZ2G4wJ1aBpGSL92",
    githubcode: "https://github.com/LordCartel007/ecommerce-front",
    packages:
      "Nextjs, axios, eslint, stripe, micro, mongoose, next, react, react-dom, react-icons, react-toastify, styled-components, uuid",
    hostedsite: "https://ecommerce-front-kappa.vercel.app/",
  },
  {
    id: 7,
    title: "Ecommerce Admin",
    description:
      " The fictional Ecommerce Store admin dashboard , you can upload file which is handled by aws s3 bucket and stored in mongodb, drag and drop features , edit features, categories etc . It is also responsive on all screen size. You can view the admin verification has been removed",
    rating: 8,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/ecommerce+store+admin.png",
    trailer: "https://www.youtube.com/embed/K9lXpUjckWo?si=bAD_AcnqH7tnmSda",
    githubcode: "https://github.com/LordCartel007/Ecommerce",
    packages:
      "@auth/mongodb-adapter, @aws-sdk/client-s3, @react-oauth/google, axios, jwt-decode, mime-types, mongodb, mongoos, multiparty, next, next-auth, react, react-dom, react-sortablejs, react-sweetalert2, sortablejs, spinners-react, sweetalert2, @types/node, autoprefixer, postcss, tailwindcss",
    hostedsite: "https://ecommerce-admin-normal.vercel.app/",
  },
  {
    id: 8,
    title: "Chat App (Socket.io)",
    description:
      " A cool chat app called chat cartel created on react and socket.io for real time messaging , it has more than 30 different themes which you can change in the settings page, you can sign up and log in , change you profile pic , send messages and pictures , view picture in full screen , it is responsive on all screen size, it uses daisy ui and tailwind css for styling , images are store on cloudinary , data are stored on mongo db. It uses a sub domain, the hosting is free so you might expect a 40 seconds delay if there is inactivity .",
    rating: 9,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/chat+app.png",
    trailer: "https://www.youtube.com/embed/gAl5o96tn50?si=_WmPRIQwhTtD5-TW",
    githubcode: "https://github.com/LordCartel007/Chat-app/tree/main",
    packages:
      "bcryptjs, body-parser, chat-app, cloudinary, cookie-parser, cors, dotenv, express, jsonwebtoken, mongoose, socket.io, nodemon, axios, lucide-react, react, react-dom, react-hot-toast, react-router-dom, socket.io-client, zustand, daisyui, tailwindcss, postcss ",
    hostedsite: "https://chat.autocartel.shop/",
  },
  {
    id: 9,
    title: "Voice Ai Assistant ",
    description:
      " An ai assistant that uses voice recognition to open website and search the web.",
    rating: 8,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/cartel+ai+assistant.png",
    trailer: "https://www.youtube.com/embed/MRq9A51yfhc?si=-wPdcvuri836dqjP",
    githubcode: "https://github.com/LordCartel007/cartel-ai-assitant",
    packages: "react, react-dom  ",
    hostedsite: "https://cartel-ai-assitant.vercel.app/",
  },
  {
    id: 10,
    title: "Luxury Car Store",
    description:
      " A Luxury car store that showcase luxury cars including a carousel , It is also responsive on all screen size.",
    rating: 7,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/luxury+car+store.png",
    trailer: "https://www.youtube.com/embed/uatdmz5b2cg?si=W0F5u4jG6Hu5ZRuH",
    githubcode:
      "https://github.com/LordCartel007/Responsive-Store-Landing-Page-Design-",
    packages: " Boostrap css (just html and javascript) ",
    hostedsite: "https://luxury-car-store.vercel.app/",
  },
  {
    id: 11,
    title: "Weather App",
    description:
      " A weather app that uses weather api to get the weather of any city in the world using your exact geo location co-ordinates",
    rating: 8,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/weather-app.png",
    trailer: "https://www.youtube.com/embed/u8nQOvaLWvs?si=bsX74l8UkX4oYfh5",
    githubcode:
      "https://github.com/LordCartel007/Network-Requests-Weather-App-Project",
    packages: " none (just html and javascript) ",
    hostedsite: "https://weather-app-gamma-two-56.vercel.app/",
  },
  {
    id: 12,
    title: "Todo App",
    description:
      " A cool todo app that uses local storage to store your todo list, you can add, delete and edit your todo list. You can check hosted project in the links",
    rating: 8,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/todo+app.png",
    trailer: "https://www.youtube.com/embed/T1yNSgPZxFE?si=zfvag4Hm3Ms2Vobw",
    githubcode: "https://github.com/LordCartel007/Redux-Project-Todo-App",
    packages: " react, react-dom, react-hot-toast, react-redux  ",
    hostedsite: "https://todo-app-henna-omega-50.vercel.app/",
  },
  {
    id: 13,
    title: "Movie App ",
    description:
      " A cool movie app with search filter done with React use effect and use state. You can check hosted project in the links, It is also responsive on all screen size.",
    rating: 7,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/movie+app.png",
    trailer: "https://www.youtube.com/embed/5XjiPSF_4dQ?si=5WtrgaQXHmq83zW9",
    githubcode: "https://github.com/LordCartel007/React-Hooks-Movie-Project",
    packages: " react, react-dom, react-bootstrap , react-router-dom",
    hostedsite: "https://movie-cartel.vercel.app/",
  },
  {
    id: 14,
    title: "Fifa (Football) App ",
    description:
      " A cool Football app showcasing different players. You can check hosted project in the links, It is also responsive on all screen size.",
    rating: 7,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/fifa+app.png",
    trailer: "https://www.youtube.com/embed/0ZnuL9dO38g?si=zW_fVNYcwawhD5ls",
    githubcode: "https://github.com/LordCartel007/React_Project_Two",
    packages: " react, react-dom, react-bootstrap ,bootstrap, react-icons",
    hostedsite: "https://fifa-app-henna.vercel.app/",
  },
  {
    id: 15,
    title: "Portfolio",
    description:
      " A cool Portfolio website styled with tailwind css. You can check hosted project in the links, It is also responsive on all screen size.",
    rating: 6,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/tailwind+portfolio.png",
    trailer: "https://www.youtube.com/embed/3KNyJj7fjSQ?si=C7X3qRXAJTkh3Id5",
    githubcode: "https://github.com/LordCartel007/Tailwind-CSS-Portfolio",
    packages: " tailwind css",
    hostedsite: "https://tailwind-css-portfolio-liart.vercel.app/",
  },
  {
    id: 16,
    title: "Shopping Cart Dom",
    description:
      " A cool shopping cart with working increment, decrement and like button using OOP . You can check hosted project in the link.",
    rating: 8,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/Shopping+cart.png",
    trailer: "https://www.youtube.com/embed/yvl2RJcvMj4?si=vg2Fc0EGZfCxdqCb",
    githubcode: "https://github.com/LordCartel007/DOM-Project-1-Shopping-Cart",
    packages: " just javascript , css and html",
    hostedsite: "https://shopping-cart-dom-zeta.vercel.app/",
  },
  {
    id: 17,
    title: "3d Carousel",
    description:
      " A cool 3d carousel done with html and high level complex css. You can check hosted project in the link.",
    rating: 7,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/3d+Carousel.png",
    trailer: "https://www.youtube.com/embed/mmG470L4sOk?si=HGjZ5Mfb7o3xM29Y",
    githubcode: "https://github.com/LordCartel007/3d-carousel-autocartel",
    packages: " just javascript , css and html",
    hostedsite: "https://3d-carousel-autocartel.vercel.app/",
  },

  {
    id: 18,
    title: "Cool Image Slider",
    description:
      " A cool image slider done with html and high level css. You can check hosted project in the link.",
    rating: 7,
    Image:
      "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/image+slider.png",
    trailer: "https://www.youtube.com/embed/XQG2_QYiU1g?si=Srg-DVpVwYL0GMZe",
    githubcode: "https://github.com/LordCartel007/image-slider",
    packages: " just javascript , css and html",
    hostedsite: "https://image-slider-jet.vercel.app/",
  },
];

export default movieList;
