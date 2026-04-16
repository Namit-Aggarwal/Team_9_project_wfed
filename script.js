const studySpaces = [
  {
    id: "hhd-building",
    name: "HHD Building",
    image: "images/hhd-building.jpg",
    types: ["9"],
    shortDescription:
      "A quiet and comfortable first-floor study area with natural light, outlets, and a relaxed open layout.",
    longDescription:
      "The first-floor area of the HHD building offers a quiet and comfortable study space that feels more relaxed than the library. Tables along the floor-to-ceiling windows provide plenty of natural light, making it a pleasant place to focus. It is usually less crowded, and many students with classes in HHD study here while waiting between classes. Outlets are available at most tables, which is convenient for charging devices. The space is open without dividers, so it works best for students who do not need complete isolation.",
    enneagramMatch:
      "This location matches Type 9, the Peacemaker, because it provides a peaceful, low-pressure environment with gentle background activity. It feels calm and comfortable without being too isolated, which suits Type 9’s preference for harmony and ease.",
    mapLink: "https://share.google/USKVUlrbOzwQr2L45"
  },
  {
    id: "chambers-building",
    name: "Chambers Building 2nd Floor Study Area",
    image: "images/chambers-building.jpg",
    types: ["5"],
    shortDescription:
      "A structured, semi-private, and quieter study area designed for serious individual work or planned group sessions.",
    longDescription:
      "Krause Innovation Studio, located on the second floor of the Chambers Building, feels more structured and intentional compared to typical study spots. The built-in dividers create a semi-private setup that helps reduce distractions, making it easier to stay focused for longer periods. It is quieter than most open spaces, and the layout is designed more for productivity than casual studying. With meeting rooms and front-desk support, it feels organized and professional.",
    enneagramMatch:
      "This space matches Type 5, the Investigator, because it supports quiet independence, deep focus, and reduced distraction. The structured layout and semi-private setup suit students who prefer thoughtful, uninterrupted work.",
    mapLink: "https://share.google/IfcUKVhcOnn8e3AuP"
  },
  {
    id: "mr-wish",
    name: "Mr. Wish Seating Area",
    image: "images/mr-wish.jpg",
    types: ["7"],
    shortDescription:
      "A social study environment with music, Wi-Fi, outlets, and a lively atmosphere.",
    longDescription:
      "Mr. Wish feels more like a social study space than a traditional one. It has Wi-Fi, air conditioning, and outlets, but the biggest difference is the atmosphere. There is usually music playing and a steady flow of people coming in and out. There are no dividers, and the layout encourages conversation rather than isolation. It is not ideal for deep focus or silent studying, but it works especially well for group projects, brainstorming, or casual study sessions.",
    enneagramMatch:
      "This location matches Type 7, the Enthusiast, because it has a vibrant, social, and energetic environment. Type 7 students often enjoy stimulation, movement, and collaboration instead of strict silence.",
    mapLink: "https://share.google/ruU3YlfG9Evo9CAgt"
  },
  {
    id: "dorm-study-room",
    name: "Dorm Study Room",
    image: "images/dorm-study-room.jpg",
    types: ["5"],
    shortDescription:
      "A convenient dorm-based study room with desks and whiteboards for focused work.",
    longDescription:
      "Most dorms have designated study rooms in their lobbies or on each floor. These rooms are convenient for students who live nearby and want to get straight to studying. They usually have whiteboards and desks, making them useful for both individual work and group work. They can be quiet depending on how many students are using them at the same time.",
    enneagramMatch:
      "This space fits Type 5 because it provides limited distractions and useful tools like whiteboards for organizing ideas. It gives a focused, practical setting for independent work.",
    mapLink: null
  },
  {
    id: "hub-lawn",
    name: "HUB Lawn",
    image: "images/hub-lawn.jpg",
    types: ["2"],
    shortDescription:
      "An outdoor study space with sunlight, shade, and a social but not overwhelming environment.",
    longDescription:
      "HUB Lawn is a great study location on a nice day. It offers both sunlight and shade depending on the weather, and it is a good place to get together with friends, work outside, or read on your own. It has a social atmosphere but still allows some flexibility for quieter studying.",
    enneagramMatch:
      "This spot matches Type 2 because it has a social and welcoming environment without being too overwhelming. Type 2 students often enjoy a sense of connection and warmth while they work.",
    mapLink: "https://share.google/GAW5uShd97VpqA2sx"
  },
  {
    id: "huck-life-science-building",
    name: "Huck Life Science Building",
    image: "images/huck-life-science-building.jpg",
    types: ["1", "6", "3"],
    shortDescription:
      "A comfortable study area with large windows, good views, and a balanced atmosphere.",
    longDescription:
      "Huck Life Science Building is located on Shortlidge Road near Thomas Building and close to East and Pollock Halls. It feels recently renovated and features comfortable seating areas and a pleasant atmosphere. One of its prominent upper-floor spaces hangs above Shortlidge with large windows that provide impressive views of southern campus. It can be somewhat busy, but it still offers a good overall study experience.",
    enneagramMatch:
      "This space matches Types 1, 6, and 3 because it blends comfort, structure, and moderate social energy. It works for students who want a productive setting that is not too loud but still feels active and well-designed.",
    mapLink: "https://share.google/LlxqXYlZozvLnSI6s"
  },
  {
    id: "alumni-garden",
    name: "Alumni Garden",
    image: "images/alumni-garden.jpg",
    types: ["9"],
    shortDescription:
      "A peaceful outdoor area with benches, plants, and a gazebo near west campus.",
    longDescription:
      "Alumni Garden is located on the west side of campus near the electrical engineering buildings and West Halls. It is ideal for students who want to enjoy nature while studying without walking all the way to the Arboretum. The area does not have traditional study furniture, but it offers benches, a gazebo, a small pond, and vibrant plants that make it feel calm and refreshing.",
    enneagramMatch:
      "This space matches Type 9 because it offers a peaceful connection to nature and a low-stress environment. The gentle atmosphere suits students who feel most productive when they are calm and undisturbed.",
    mapLink: "https://share.google/qqpJqWOQhKQkKBzIS"
  },
  {
    id: "business-building",
    name: "Business Building",
    image: "images/business-building.jpg",
    types: ["2", "7", "8"],
    shortDescription:
      "A modern and busy building with lots of study space, large windows, and nearby food.",
    longDescription:
      "The Business Building is on the north side of campus near North and East Halls. It has modern renovations, large windows, and a lot of room for studying. The building can get very busy and is more suited for students who like to study with others. It is a strong option for group work, meeting friends, or working on projects together. Saxbys inside the building adds convenience with coffee and small food items.",
    enneagramMatch:
      "This space matches Types 2, 7, and 8 because it is lively, social, and collaborative. It works well for students who feel energized by people, interaction, and activity around them.",
    mapLink: "https://share.google/8TdRwqoC8hckeXc1m"
  },
  {
    id: "music-building",
    name: "Music Building",
    image: "images/music-building.jpg",
    types: ["4", "5", "9"],
    shortDescription:
      "A quiet and lesser-known second-floor study area with couch spaces and minimal traffic.",
    longDescription:
      "The Music Building is a study space many students may not know about. It is located north of the library, and on the second floor there are small couch areas that provide an isolated and quiet environment. There is very little foot traffic in the halls, and although rehearsals happen on a lower floor, the space still feels calm and private.",
    enneagramMatch:
      "This location matches Types 4, 5, and 9 because it supports quiet independent work and has a calm atmosphere. It appeals to students who want solitude, low distraction, and a more peaceful study experience.",
    mapLink: "https://share.google/DrFpSVMVa76kUj1CH"
  },
  {
    id: "kern-building",
    name: "Kern Building",
    image: "images/kern-building.jpg",
    types: ["2", "7", "8"],
    shortDescription:
      "A large, open, and social study space that is good for group work and collaboration.",
    longDescription:
      "The Kern Building is northwest of the library and features a large open seating area. It is usually busy but offers plenty of space and works especially well for group work. Panera Bread inside the building also makes it convenient for longer study sessions.",
    enneagramMatch:
      "This location matches Types 2, 7, and 8 because it has a social atmosphere and supports collaboration. It suits students who enjoy active environments and studying around others.",
    mapLink: "https://share.google/kaaLXKgCEJXFeOnIo"
  },
  {
    id: "bbh-outdoor-seating",
    name: "BBH Outdoor Seating",
    image: "images/bbh-outdoor-seating.jpg",
    types: ["9"],
    shortDescription:
      "A calm outdoor patio with tables, chairs, sunlight, and nearby grassy space.",
    longDescription:
      "The outdoor seating outside the BBH building combines practical paved seating with peaceful natural surroundings. Metal tables and chairs provide a clear place for work or quiet conversation, while the nearby grassy circle and open sky create a relaxing atmosphere.",
    enneagramMatch:
      "This space matches Type 9 because it feels peaceful, functional, and low-pressure. The mix of structure and nature helps students focus without feeling overwhelmed.",
    mapLink: "https://share.google/75P0xdtUJPqaHYEtc"
  },
  {
    id: "hub-study-space",
    name: "HUB Study Space",
    image: "images/hub-study-space.jpg",
    types: ["3"],
    shortDescription:
      "A productive indoor study area with collaborative desks, whiteboards, and visible activity.",
    longDescription:
      "This HUB study space has long collaborative desks, varied seating, and a large whiteboard wall. It feels highly focused and goal-oriented, with students working in parallel and a clear sense of visible progress and productivity.",
    enneagramMatch:
      "This space matches Type 3, the Achiever, because it creates an environment built around progress, output, and accomplishment. The organized tools and productive energy help Type 3 students stay motivated.",
    mapLink: "https://share.google/GAW5uShd97VpqA2sx"
  },
  {
    id: "westgate-building",
    name: "Westgate Building Atrium",
    image: "images/westgate-building.jpg",
    types: ["4"],
    shortDescription:
      "A visually striking atrium with modern design, large windows, and a unique identity.",
    longDescription:
      "Westgate’s atrium is filled with natural light from massive windows and features dramatic glass-and-steel architecture. The space also has a distinct sense of identity through its visible IST branding, making it feel intellectual, modern, and memorable.",
    enneagramMatch:
      "This location matches Type 4 because it has aesthetic beauty, uniqueness, and a strong sense of identity. It appeals to students who value meaningful, expressive environments.",
    mapLink: "https://share.google/cet7BOGj1jMNjJYOn"
  },
  {
    id: "electrical-engineering-building",
    name: "Electrical Engineering Building",
    image: "images/electrical-engineering-building.jpg",
    types: ["1"],
    shortDescription:
      "A serious academic lounge with large tables, geometric lighting, and a focused atmosphere.",
    longDescription:
      "The Electrical Engineering study lounge has a classic academic feel with large wooden tables, simple windows, and unique geometric ceiling lights. Students here tend to work quietly and seriously, making the space suitable for precise and uninterrupted study.",
    enneagramMatch:
      "This space matches Type 1 because it reflects order, structure, logic, and discipline. It is ideal for students who want an organized setting for careful and focused work.",
    mapLink: "https://share.google/yHfGHvxQKwzIizTUd"
  },
  {
    id: "ecore-building",
    name: "ECORE Building",
    image: "images/ecore-building.jpg",
    types: ["7"],
    shortDescription:
      "A visually dynamic atrium with striking architecture, multiple perspectives, and lots of variety.",
    longDescription:
      "ECORE’s central atrium features an interwoven wooden ceiling canopy, skylight lighting, bold seating colors, and multiple floors with balconies. The space feels energetic, visually rich, and constantly engaging.",
    enneagramMatch:
      "This space matches Type 7 because it is stimulating, varied, and visually exciting. It works well for students who enjoy novelty, movement, and dynamic surroundings.",
    mapLink: "https://share.google/01xINmgee8KtYJB1t"
  },
  {
    id: "pollock-commons",
    name: "Pollock Commons",
    image: "images/pollock-commons.jpg",
    types: ["7"],
    shortDescription:
      "An active and useful study location with lots of seating, nearby food, and social energy.",
    longDescription:
      "Pollock Commons is a practical study location because it has many study areas in a place where students can also socialize. There is often ample seating, food is nearby, and the environment works well for people who can study with some background noise and movement.",
    enneagramMatch:
      "This location matches Type 7 because it is active, social, and full of energy. It suits students who are motivated by stimulation rather than silence.",
    mapLink: "https://share.google/XEUcDMue7ho7YGPOl"
  },
  {
    id: "library-starbucks",
    name: "Library Starbucks",
    image: "images/library-starbucks.jpg",
    types: ["3"],
    shortDescription:
      "A café inside the library that combines comfort, caffeine, and academic structure.",
    longDescription:
      "Library Starbucks is a good place for students who want both focus and comfort. Since it is located inside the library, it has more academic structure than a regular café. It is somewhat noisy, but less noisy than a dining hall, and many students use it for productive work sessions with coffee.",
    enneagramMatch:
      "This location matches Type 3 because it combines efficiency, productivity, and purpose. The goal-oriented atmosphere of the library plus the café setting can help Achiever types stay on track.",
    mapLink: "https://share.google/ioPlmNkgF4XGsalsL"
  },
  {
    id: "redifer-commons",
    name: "Redifer Commons",
    image: "images/redifer-commons.jpg",
    types: ["6"],
    shortDescription:
      "A relatively calm commons area with seating options, acceptable lighting, and a stable atmosphere.",
    longDescription:
      "Redifer Commons is quieter than many other busy campus areas. It offers different seating choices, reasonable lighting, and a less stressful environment. Students can eat and study in the same area, making it practical and dependable.",
    enneagramMatch:
      "This space matches Type 6 because it feels stable, predictable, and grounded. It supports students who prefer consistency, routine, and a dependable study environment.",
    mapLink: "https://share.google/Nmt7PRon0x7V92loS"
  },
  {
    id: "arboretum",
    name: "Arboretum",
    image: "images/arboretum.jpg",
    types: ["9"],
    shortDescription:
      "A very peaceful outdoor setting with gardens and paths for quiet study and reflection.",
    longDescription:
      "The Arboretum is one of the most peaceful places to study near Penn State. It is an open outdoor area with gardens and walking paths, offering a much more relaxed setting than indoor study spaces. It is ideal for reflection, reading, or steady focused work without much interruption.",
    enneagramMatch:
      "This location matches Type 9 because it is calm, quiet, and undisturbed. It works well for students who concentrate best in peaceful settings with minimal stress.",
    mapLink: "https://share.google/EsyY2BF5FZTsUZtCg"
  },
  {
    id: "downtown-panera-bread",
    name: "Downtown Panera Bread",
    image: "images/downtown-panera-bread.jpg",
    types: ["1"],
    shortDescription:
      "A structured off-campus café with Wi-Fi, varied seating, and a productive atmosphere.",
    longDescription:
      "Downtown Panera Bread gives students an informal but organized place to work away from campus. It has different types of seating, Wi-Fi, and steady traffic throughout the day. While it can get noisy during meals, it still offers a useful balance between structure and comfort.",
    enneagramMatch:
      "This space matches Type 1 because it feels organized, consistent, and practical. It supports disciplined students who want a steady environment for focused work.",
    mapLink: "https://share.google/0YEFCtOY4BNJ5WLsr"
  },
  {
    id: "downtown-starbucks",
    name: "Downtown Starbucks",
    image: "images/downtown-starbucks.jpg",
    types: ["3"],
    shortDescription:
      "A somewhat busy off-campus café with Wi-Fi, music, and a productive-feeling atmosphere.",
    longDescription:
      "The downtown Starbucks locations on Pugh Street and West College Avenue are popular with off-campus students. They can be noisy and seating may be limited, but they also provide Wi-Fi, background activity, and an atmosphere that feels productive and fast-moving.",
    enneagramMatch:
      "This location matches Type 3 because the active atmosphere and visible productivity of others can feel motivating. The environment encourages momentum, efficiency, and getting work done.",
    mapLink: "https://share.google/OMvHQej4rVOiLvhpd"
  },
  {
    id: "abba-java-coffeehouse",
    name: "Abba Java Coffeehouse",
    image: "images/abba-java-coffeehouse.jpg",
    types: ["5"],
    shortDescription:
      "A quieter and more relaxed downtown coffeehouse with free Wi-Fi and spacious seating.",
    longDescription:
      "Abba Java Coffeehouse is an off-campus study spot with a calm, laid-back atmosphere. It has lighter background noise, less foot traffic, and more spacious seating than some busier cafés. Free snacks, coffee, and Wi-Fi make it especially comfortable for longer sessions.",
    enneagramMatch:
      "This location matches Type 5 because it has a low-stimulation environment that supports clear thinking and long periods of concentration. It is ideal for students who prefer calm and focus over constant activity.",
    mapLink: "https://share.google/5PiYZDDMS0o0rKJ6c"
  },
  {
    id: "library-stacks",
    name: "Pattee and Paterno Library Stacks",
    image: "images/library-stacks.jpg",
    types: ["5"],
    shortDescription:
      "A very quiet and secluded library area with minimal distractions and low foot traffic.",
    longDescription:
      "The stacks in Pattee and Paterno Library are located on the Paterno side starting on floor 2. They are quiet, private, and often feel more secluded than the rest of the library. Foot traffic is low, noise is minimal, and the environment supports deep concentration.",
    enneagramMatch:
      "This space matches Type 5 because it offers privacy, quietness, and very few interruptions. It is excellent for students who want to fully immerse themselves in their work.",
    mapLink: "https://share.google/9teXlNy6bNcNI5RLA"
  },
  {
    id: "schlow-centre-region-library",
    name: "Schlow Centre Region Library",
    image: "images/schlow-centre-region-library.jpg",
    types: ["6"],
    shortDescription:
      "A balanced downtown library with quiet zones, open areas, and a calming structure.",
    longDescription:
      "Schlow Centre Region Library offers a mix of designated quiet spaces and more open community-oriented spaces. It has a calming atmosphere, moderate background activity in some areas, and enough seating to make it feel comfortable without being overwhelming.",
    enneagramMatch:
      "This location matches Type 6 because it provides structure, safety, and a steady environment while still having a small presence of others nearby. It feels grounding and dependable.",
    mapLink: "https://share.google/zMHxEbiKGfl4XNRTW"
  },
  {
    id: "barnes-and-noble",
    name: "Barnes and Noble",
    image: "images/barnes-and-noble.jpg",
    types: ["9"],
    shortDescription:
      "A calm bookstore and café setting with soft background music and a relaxed mood.",
    longDescription:
      "Barnes and Noble is off campus and offers a moderately busy but comfortable space that blends a bookstore and café. It has some tables, chairs, and armchairs, and the presence of books plus soft background noise makes the environment feel gentle and less stressful.",
    enneagramMatch:
      "This location matches Type 9 because it is calm, comfortable, and not overstimulating. The gentle background activity helps maintain a relaxing but still productive feeling.",
    mapLink: "https://share.google/2habwmXp9OZv1LMBz"
  }
];

function createCard(space) {
  const card = document.createElement("div");
  card.className = "location-card";
  card.innerHTML = `
    <img src="${space.image}" alt="${space.name}">
    <div class="card-content">
      <h3>${space.name}</h3>
      <p>${space.shortDescription}</p>
      <p class="type-label"><strong>Best for:</strong> ${space.types.map(type => `Type ${type}`).join(", ")}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `details.html?id=${space.id}`;
  });

  return card;
}

function renderHomePage() {
  const locationsGrid = document.getElementById("locationsGrid");
  const filterDropdown = document.getElementById("enneagramFilter");

  if (!locationsGrid || !filterDropdown) return;

  function renderCards(selectedType = "all") {
    locationsGrid.innerHTML = "";

    const filteredSpaces = studySpaces.filter(space => {
      return selectedType === "all" || space.types.includes(selectedType);
    });

    filteredSpaces.forEach(space => {
      locationsGrid.appendChild(createCard(space));
    });
  }

  filterDropdown.addEventListener("change", function () {
    renderCards(this.value);
  });

  renderCards();
}

function renderDetailsPage() {
  const detailsContainer = document.getElementById("detailsContainer");
  if (!detailsContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const space = studySpaces.find(item => item.id === id);

  if (!space) {
    detailsContainer.innerHTML = `
      <a class="back-button" href="index.html">← Back to Home</a>
      <h1>Location not found</h1>
      <p>Please go back and select a valid study space.</p>
    `;
    return;
  }

  detailsContainer.innerHTML = `
    <a class="back-button" href="index.html">← Back to Home</a>
    <img src="${space.image}" alt="${space.name}">
    <h1>${space.name}</h1>
    <p class="details-subtitle">Best for: ${space.types.map(type => `Type ${type}`).join(", ")}</p>

    <div class="details-section">
      <h2>About this location</h2>
      <p>${space.longDescription}</p>
    </div>

    <div class="details-section">
      <h2>Why it matches these Enneagram types</h2>
      <p>${space.enneagramMatch}</p>
    </div>

    <div class="details-section">
      <h2>Location</h2>
      ${
        space.mapLink
          ? `<a class="map-button" href="${space.mapLink}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>`
          : `<div class="no-location">No location link required</div>`
      }
    </div>
  `;
}

renderHomePage();
renderDetailsPage();