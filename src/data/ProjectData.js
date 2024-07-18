import DataSport from "../Assets/datasport.png";
import DisneyClone from "../Assets/disneyClone.png";
import CovidTracker from "../Assets/covidTracker.png";
// --------------------------------------- Project List
export const ProjectList = [
  {
    img: DataSport,
    title: "Datasport",
    description:
      "Transform the management of your academy – optimize training sessions, increase member engagement, and ensure timely payments with a quick and easy overview of unpaid memberships. Datasport offers everything you need for top-notch results and easy management of daily operations.",
    tech_stack: "Typescript, React, Tanstack Query, Zustand, MantineUi",
    demo_url: "https://datasport.app/",
  },
  {
    img: DisneyClone,
    title: "Disney Clone",
    description:
      "I developed a Disney Plus Clone leveraging modern technologies to deliver a seamless user experience. The project is built with TypeScript and utilizes Firebase for robust data storage. For the design, I employed styled-components to create a visually appealing and responsive interface. Each movie entry includes a detailed description and an integrated trailer. To access the platform, users must authenticate via Google, ensuring a secure and personalized experience.",
    tech_stack: "Typescript, React, Redux, Firebase, Styled-components",
    github_url: "https://github.com/aldinhalilovic/disney-plus-clone",
    demo_url: "https://disney-clone-5baf3.firebaseapp.com/",
  },
  {
    img: CovidTracker,
    title: "Covid tracker",
    description:
      "I created a COVID-19 Tracker application that allows users to stay informed about the pandemic's impact. Users can select a specific date and country to retrieve the latest statistics. The app provides detailed results, including the number of cases, recoveries, and fatalities for the selected date and location, ensuring accurate and up-to-date information.",
    tech_stack: "React, Tailwind, Contenxt API, Chart.js",
    github_url: "https://github.com/aldinhalilovic/Covid-tracker",
    demo_url: "https://my-covid-virus-tracker.netlify.app/",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg",
    name: "ReactJS",
  },
  {
    img: "data:image/png;base64,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",
    name: "Typescript",
  },
  {
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAeFBMVEUAAAD///+Dg4PY2NgvLy9RUVErKyuIiIj8/PyysrLh4eGOjo5ra2s3Nzf5+flFRUVlZWVycnKmpqadnZ3p6ekUFBR6enoZGRnLy8s+Pj4sLCzx8fEmJiZMTEzPz88ICAjExMSwsLBcXFy7u7ugoKCWlpYeHh5YWFgRguI2AAAEjElEQVR4nO3ZaUPiOhiG4VARFKSyL4Isg47//x+eLkla2qwcp3y5ry8zlBDzdHmbpkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgdwzGw9LA2Ww1TDw2suU0WeeStbmjWWn9XH7c+Lr1jCvSc096cjbr93wmzQ6/Tf3M1be70H6f/0na3tXVbBCcVrypLdN2N2v13Y/c0E8flLY3/J20+vilH81edqrxWG15XFq9w/9nWrGVm5aNTjZ7+UV1Gj0wbbqxNotKK1Sq820nT3LzqNrUf3lY2vowzGmXT1b9WuuJyrCo93Ex7NTBTR9yL9U3jd7/WVp7pZJpXZd2nalS6Qr1x/qzcn+8hI49nkyrDsbY0mzg/rpl0TrB39UWxx577SjtWF1qlkoVm7ZVqVbtCtXWVdpE7fr0YGwWnVYsZYfH8qOqUM5JTFdphyKRwzFXqvi0E3XmFpXqonbmX9dvuksr/1TrtlGKT1tVqpkQQ/V/xy1ddJpWn2ymSHekrSrVR0iFynWZVhcSwwT3nrTiLPtbqo5fPT/oMq34lIN6aVequ9LqSiW5H7NEx2kdlUqmfZ2+tRlOBel2XpiefIPpNq24yIGdm81c8+S9vfe3ejv/jLfjtLpSNR/FXWmbjzp131WzxD+YrtPaKtW9aXWl6l0CBtN12mo6e1up7k4rRrLVMWAwnafVjyq3Ge68bvNfqko19w+m+7TiIke3rTeTafcjA89Rm6q9YlmFrPGmnaobwGQ4/0rMU3qXdlpxlKOrV6rI51s1uOIE0ZVq52vvTSu/nMghXr33tAZDWl2p3qptd80uDmnvnP+rKtV+5fmBN21aXDaDfDErza8Q+2KLmSFttTRYLRrelTYvUAv1n5xvMhWYNjuy2+ws/lxGT+5MaQ2V6p60V32CHAIrVWDa7NAWn3YBk9FbxrR6SVhXqjvSqss1X0b7o84W9xQjLO1GpRWnU+SFa06rK5VaNIxPqwMWpXisPjkrVeCxzc7grXNVwMqSVj++zMqP0Wk/GifvVX7c29esg9MW97TRZerqysyWVleqcp04Om1rChVSqQLTZne2omEaMGG5ZUsrZnJ0y+LSiE2rbzp6y0odbMcjfWja7DqZj/L+9r9z3YpGpYqcXegJRW2lP6BShafNh5TsPS8m2+xpdaXKz5e490D1BbiKXoqzPugGpE2zSrySs5RVL/8Yw5H2VKtUUWltt1ddqWxzKmvaz8UinyCfimObpKmc1Dpf1EWmrV6c7+LSNhbOK75KZUp7+JoWV0H+m3VxXf2oV8Nj39NmVFpdqfbiEJFWvRRpPwlu1NtaS6UypR3lr8myg9o7Jou0XGV4ytqcvxf5Oov/uSo8rfhSR2kVnlYvIxsmEj/qO/PfM6TNd9Cwemycqz1Q/xhO/n3brUVVKr3gYqWy6ReXM1N/ulIZFyrlhX2zLVme839211G63KqnsvVxmaaja/Sb7NPgkBlYn8X6pUnfR9353iXLFHGimL78W3YVmwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMf5D+CTNGY7cUYoAAAAAElFTkSuQmCC",
    name: "Next Js",
  },

  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg",
    name: "React Native",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoY5tnQGvnq1fLi08ZxCRg1Vj6PN16PLLyQ&usqp=CAU",
    name: "Expo",
  },
  {
    img: "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
    name: "Tanstack Query",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/git.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/responsive.svg",
    name: "Responsive",
  },
];

export const WorkList = [
  {
    img: DataSport,
    title: "Net Plus",
    description:
      "As a Software Engineer, I have extensive experience in creating high-quality React and React Native applications. My journey in this field has equipped me with the skills to design, develop, and deploy user-centric solutions that meet the needs of diverse users. In my current role, I have successfully delivered numerous projects involving complex frontend architectures and seamless user experiences. I specialize in using React for web applications, leveraging its powerful component-based architecture to build scalable and maintainable systems. With React Native, I have developed cross-platform mobile applications that provide a native look and feel on both iOS and Android devices.",
    tech_stack:
      "Typescript, React, React Native, Tanstack Query, Redux, Styled Components",
    time: "02/2023 - Currnet",
  },
  {
    img: DataSport,
    title: "Centar Nit - Mentor",
    description:
      "I have had the rewarding experience of working as a mentor for an intensive 9-month course focused on HTML, CSS, JavaScript, and React. This role has allowed me to guide and support aspiring developers in their journey to master frontend technologies and build their own projects.",
    tech_stack:
      "Typescript, React, React Native, Tanstack Query, Redux, Styled Components",
    time: "01/2022 - 10/2022",
  },
];
