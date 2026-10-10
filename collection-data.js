/* CYBEROS — COLLECTION DATA
   Add folders → add projects → done.
   Actions: open | copyLink | embed | copyCode */

const backendData = [

  {
    folderName: "UI Effects",
    folderColor: "#FF6BBC",
    projects: [

      {
        title: "Liquid Glass Generator",
        url: "/effects/liquid-glass/",
        video: "",
        thumbnail: "/effects/liquid-glass/thumbnail.mp4",
        category: "Glass / WebGL",
        technology: ["WebGL", "JavaScript"],
        sourceType: "Link",
        license: "",
        desc: "Interactive liquid-glass generator using WebGL and GLSL with real-time refraction, distortion, curvature, glow and shadow controls.",
        interaction: {
          enabled: true,
          type: "iframe",
          title: "LIVE GLASS INTERACTION",
          // hint: "Drag and explore the real Liquid Glass effect.",
          height: 360,
          actions: ["open", "copyLink", "embed", "copyCode"]
        }
      },

     {
        title: "Image to Particles",
        url: "/effects/imagetoparticles/",
        video: "",
        thumbnail: "/effects/imagetoparticles/thumbnail.mp4",
        category: "Particles / WebGL",
        technology: ["WebGL","Three.js","JavaScript"],
        sourceType: "Link",
        license: "",
        desc: "Interactive particle system that disperses, reassembles, and reacts to user input, transforming static images into dynamic particle clouds.",
        interaction: {
          enabled: true,
          type: "iframe",
          title: "LIVE PARTICLE INTERACTION",
          // hint: "Hover or click to scatter and reform the particles.",
          height: 360,
          actions: ["open", "copyLink", "embed", "copyCode"]
        }
      },

      {
      title: "Smoke Particles",
      url: "/effects/smokeparticles/",
      video: "",
      thumbnail: "/effects/smokeparticles/thumbnail.mp4",
      category: "Fluid / Particles",
      technology: ["Canvas", "JavaScript"],
      sourceType: "Link",
      license: "",
      desc: "Interactive pastel smoke simulation that flows, swirls, and disperses in response to pointer movement.",
      interaction: {
      enabled: true,
      type: "iframe",
      title: "LIVE SMOKE INTERACTION",
      height: 360,
      actions: ["open", "copyLink", "embed", "copyCode"]
      }
      },

       {
      title: "Slime Text",
      url: "/effects/slimetext/",
      video: "",
      thumbnail: "/effects/slimetext/thumbnail.mp4",
      category: "Fluid / Particles",
      technology: ["Canvas", "JavaScript"],
      sourceType: "Link",
      license: "",
      desc: "Interactive pastel smoke simulation that flows, swirls, and disperses in response to pointer movement.",
      interaction: {
      enabled: true,
      type: "iframe",
      title: "LIVE SMOKE INTERACTION",
      height: 360,
      actions: ["open", "copyLink", "embed", "copyCode"]
      }
      },

      {
      title:"Magnet Button",
      url:"/effects/magnetbutton/",
      video:"",
      thumbnail:"/effects/magnetbutton/thumbnail.mp4",
      category:"Buttons / Interaction",
      technology:["HTML","CSS","JavaScript"],
      sourceType:"Link",
      license:"",
      desc:"Interactive magnetic button that smoothly follows and responds to pointer movement with a playful magnetic pull effect.",
      interaction:{
        enabled:true,
        type:"iframe",
        title:"LIVE MAGNET BUTTON",
        height:360,
        actions:["open","copyLink","embed","copyCode"]
      }
      },

      
      {
        title: "Procedural Tile",
        url: "/effects/proceduraltile/",
        video: "",
        thumbnail: "/effects/proceduraltile/thumbnail.mp4",
        category: "Buttons / Interaction",
        technology: ["HTML", "CSS", "JavaScript"],
        sourceType: "Link",
        license: "",
        desc: "Procedurally generated tiles with customizable patterns, colors, and a dynamic visual style.",
        interaction: {
          enabled: true,
          type: "iframe",
          title: "LIVE PROCEDURAL TILE",
          height: 360,
          actions: ["open", "copyLink", "embed", "copyCode"]
        }
      },

      {
        title: "Alphabet Inside Alphabet",
        url: "/effects/alphabetinsidealphabet/",
        video: "",
        thumbnail: "/effects/alphabetinsidealphabet/thumbnail.mp4",
        category: "Text / Typography",
        technology: ["HTML", "CSS", "JavaScript"],
        sourceType: "Link",
        license: "",
        desc: "A playful typography effect where letters are filled with repeating alphabet patterns, creating a bold, customizable text visual.",
        interaction: {
          enabled: true,
          type: "iframe",
          title: "LIVE ALPHABET EFFECT",
          height: 360,
          actions: ["open", "copyLink", "embed", "copyCode"]
        }
      },



      /* Add more UI effects here:
      ,
      {
        title: "Another Effect",
        url: "/effects/another-effect/",
        video: "",
        category: "UI Effect",
        technology: ["HTML", "CSS", "JavaScript"],
        sourceType: "Link",
        license: "",
        desc: "Description here.",
        interaction: {
          enabled: true,
          type: "iframe",
          title: "LIVE EFFECT",
          hint: "Explore the effect.",
          height: 360,
          actions: ["open", "copyLink", "embed", "copyCode"]
        }
      }
      */

    ]
  },

  {
    folderName: "Web Experiments",
    folderColor: "#A18EC8",
    projects: [

      /* Add experiments here */

    ]
  }

  /* Add completely new folders here:
  ,
  {
    folderName: "Animations",
    folderColor: "#7CC7FF",
    projects: [
      {
        title: "Example Animation",
        url: "/effects/example-animation/",
        video: "",
        category: "Animation",
        technology: ["HTML", "CSS", "JavaScript"],
        sourceType: "Link",
        license: "",
        desc: "Interactive animation experiment.",
        interaction: {
          enabled: true,
          type: "iframe",
          title: "LIVE ANIMATION",
          hint: "Explore the animation.",
          height: 360,
          actions: ["open", "copyLink", "embed", "copyCode"]
        }
      }
    ]
  }
  */

];


/* CYBEROS HELPERS */

const allProjects = backendData.flatMap(folder => folder.projects);

const interactionProjects = allProjects.filter(
  project => project.interaction?.enabled !== false
);

console.log(
  `CYBEROS: ${backendData.length} folders | ${allProjects.length} projects | ${interactionProjects.length} interactive`
);