// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-lectures",
          title: "lectures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lectures/";
          },
        },{id: "nav-join-us",
          title: "join us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join-us/";
          },
        },{id: "post-office-ambience",
        
          title: "Office Ambience",
        
        description: "Tune in to the Office Ambience playlist",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/office-ambience/";
          
        },
      },{id: "post-intersensory-data-representations-of-a-black-hole",
        
          title: 'Intersensory data representations of a black hole <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Interesting reading about Dr. Kyle Keane&#39;s research",
        section: "Posts",
        handler: () => {
          
            window.open("https://quest.mit.edu/news/intersensory-data-representations-black-hole", "_blank");
          
        },
      },{id: "events-the-summer-festival-2024-is-happening-on-july-15-2025-at-beach-park-barbados-expect-live-music-delicious-local-food-and-an-unforgettable-atmosphere-learn-more",
          title: 'The Summer Festival 2024 is happening on July 15, 2025, at Beach Park,...',
          description: "",
          section: "Events",},{id: "events-join-us-at-south-west-uk-pre-chi-2025-april-14th-15th-in-bristol-learn-more",
          title: 'Join us at South-West UK Pre-CHI 2025, April 14th-15th in Bristol Learn more...',
          description: "",
          section: "Events",},{id: "news-our-paper-fedwsq-efficient-federated-learning-with-weight-standardization-and-distribution-aware-non-uniform-quantization-has-been-accepted-to-iccv-2025",
          title: 'Our paper “FedWSQ: Efficient Federated Learning with Weight Standardization and Distribution-Aware Non-Uniform Quantization”...',
          description: "",
          section: "News",},{id: "news-our-project-intelligent-mobile-vision-efficient-federated-moe-with-device-specific-expert-models-and-semi-supervised-learning-has-been-selected-for-funding-by-the-national-research-foundation-of-korea-nrf",
          title: 'Our project, “Intelligent Mobile Vision: Efficient Federated MoE with Device-Specific Expert Models and...',
          description: "",
          section: "News",},{id: "news-our-project-development-of-a-multi-institutional-endoscopic-digital-twin-and-surgical-simulation-world-model-platform-based-on-4dgs-and-federated-learning-has-been-selected-for-funding-by-the-national-research-foundation-of-korea-nrf",
          title: 'Our project, “Development of a Multi-Institutional Endoscopic Digital Twin and Surgical Simulation World...',
          description: "",
          section: "News",},{id: "people-chi-hun-sung-성치훈",
          title: 'Chi-Hun Sung (성치훈)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/chi-hun/";
            },},{id: "people-ga-ryeong-kim-김가령",
          title: 'Ga-Ryeong Kim (김가령)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/garyeong/";
            },},{id: "people-hoju-shin-신호주",
          title: 'Hoju Shin (신호주)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/hoju/";
            },},{id: "people-ji-ah-kim-김지아",
          title: 'Ji-Ah Kim (김지아)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/jiah/";
            },},{id: "people-min-ji-kim-김민지",
          title: 'Min-Ji Kim (김민지)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/minji/";
            },},{id: "people-na-young-gu-구나영",
          title: 'Na-Young Gu (구나영)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/na-young/";
            },},{id: "people-seung-wook-kim-김승욱",
          title: 'Seung-Wook Kim (김승욱)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/professor/";
            },},{id: "people-seong-yeol-kim-김성열",
          title: 'Seong-Yeol Kim (김성열)',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/seongyeol/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%65%74%65%72.%62%65%6E%6E%65%74%74@%62%72%69%73%74%6F%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://biglab.co.uk/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
