const projects = [
  {
    id: 1,
    title: "Service Sharing",
    description: "Service Sharing is a platform dedicated to connecting people with quality service providers in various fields. Whether you need help with home cleaning, repairs, or any specialized service, our goal is to make your life easier by bringing trustworthy professionals right to your fingertips.",
    features: [
      "🔧 Authentication:Implemented secure login using Firebase (email/password and Google), protected routes using JWT.",
      "🛒 Full Service Lifecycle Management:Users can add, edit, and delete their own services. Others can book services, and service owners can update booking status (pending, working, completed) — ensuring end-to-end service flow.",
      "📢 Real-Time Search, Sorting & Responsive UI:Built an interactive and responsive interface with real-time service search, sorting by price, and dark/light theme toggle using Tailwind, DaisyUI, and React.",
    ],
    stack: ["React", "Node.js", "MongoDB", "JWT", "Firebase", "Tailwind CSS"],
    live: "https://service-sharing-app.web.app/",
    githubClient: "https://github.com/newaz2580/service-sharing-app-clients",
    githubServer: "https://github.com/newaz2580/service-sharing-app-server",
    images: [
      "https://i.ibb.co/1JQzFSFy/Screenshot-24.png",
      "https://i.ibb.co/5xg0BchK/Screenshot-25.png",
      "https://i.ibb.co/v6D5vvr6/Screenshot-26.png",
    ],
    challenges: "Managing authentication and secure role-based access.",
    improvements: "Adding real-time chat and payment gateway integration."
  },
  {
    id: 2,
    title: "HobbyHub",
    description: "HobbyHub is a comprehensive hobby management platform developed to enable users to efficiently create, discover, and join hobby groups. It facilitates meaningful connections among like-minded individuals, promotes active participation in activities, and ensures timely updates on group events—all within a secure and intuitive environment.",
    features: [
      "📚 Create & Manage Hobby Groups:Authenticated users can create, update, and delete hobby groups with fields like category, location, image, and group deadline.",
      "👥 Join & View Hobby Communities:Users can browse all groups, view detailed group info, and join active groups — restricted based on the group’s start date.",
      "🔔 Authentication with Protected Routes:Implemented secure login and registration using Firebase Auth (email/password + Google), with full route protection and toast-based feedback.",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Firebase"],
    live: "https://hobby-group-app.web.app",
    githubClient: "https://github.com/newaz2580/hobby-clients",
    githubServer: "https://github.com/newaz2580/hobby-server",
    images: [
      "https://i.ibb.co/SDWCv4tZ/Screenshot-27.png",
      "https://i.ibb.co/9Xy2z3b/Screenshot-28.png",
      "https://i.ibb.co/fY5r7NH4/Screenshot-29.png",
    ],
    challenges: "Implementing user roles and managing real-time data updates.",
    improvements: "Future group video support, calendar, and notifications."
  },
  {
    id: 3,
    title: "EventDiscovery",
    description: "An event hosting and discovery platform with user-friendly dashboards.",
    features: [
      "📅 Create & publish events with categories",
      "👥 Attendees can register and explore events",
      "📊 Admin panel to track users, events & registrations",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    live: "https://even-discovery-platform.web.app/",
    githubClient: "https://github.com/newaz2580/EventDiscovery",
    githubServer: "https://github.com/newaz2580/EventDiscovery",
    images: [
      "https://i.ibb.co/r29WnZWP/Screenshot-30.png",
      "https://i.ibb.co/Q7zwbS22/Screenshot-31.png",
      "https://i.ibb.co/YFSGpjzs/Screenshot-32.png",
    ],
    challenges: "Building responsive dashboards and managing order queues.",
    improvements: "Add push notifications and real-time rider tracking."
  }
];

export default projects;
