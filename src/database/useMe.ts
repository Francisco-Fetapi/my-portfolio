export default function useMe() {
  const phone1 = "934712217";
  const me = {
    name: "Francisco Fetapi",
    email: "franciscofetapi@gmail.com",
    photo: "/my-photo1.jpg",
    professional: "Desenvolvedor Web",
    github: "https://github.com/Francisco-Fetapi",
    twitter: "https://twitter.com/FranciscoFetapi",
    instagram: "https://www.instagram.com/franciscofetapi/",
    facebook: "https://facebook.com/alexander.garret.75",
    linkedin: "https://www.linkedin.com/in/francisco-fetapi-058472223/",
    downloadCV: "https://downloadcv.com",
    phone1,
    phone2: "958727914",
    calendly: "https://linkdocalendly",
    whatsapp: `https://api.whatsapp.com?tel=${phone1}`,
    tecnologies: [
      "Typescript",
      "Javascript",
      "PHP",
      "Laravel",
      "ReactJs",
      "Nextjs",
    ],
  };
  return { me };
}
