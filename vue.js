const App = {
  data() {
    return {
      activeIndex: 0,
      isAppWork: true,
      steps: [
        {
          title: "React.js",
          text:
            "React.js is an open-source front-end library that was created by a team of Facebook developers in 2011. Having been evolved over 9 years, it can be considered one of the most popular front-end libraries. It became open-source in 2013.",
          img: "images/react.png",
        },
        {
          title: "Vue.js",
          text:
            "Vue.js was created by combining the positive features of AngularJS (The view layer) and the positive features of React (Virtual DOM) by an ex-Google engineer named Evan You. This is one of the easiest frontend frameworks to learn, and developers can implement SPAs very efficiently using Vue.js. Due to this reason, this has become very popular among developers.",
          img: "images/vue.png",
        },
        {
          title: "Angular",
          text:
            "Google introduced Angular in 2016. However, it had a predecessor AngularJS which goes back to 2010. In the early days, React popularity pushed Angular behind. However, Angular found its niche to become a proven and reliable enterprise-grade framework.",
          img: "images/angular.png",
        },
        {
          title: "Ember.js",
          text:
            "Ember.js is known to be a popular JavaScript framework to build modern web applications. It is a full-featured framework that allows developers to focus more on creating unique functionalities. This will boost a developer’s productivity as it avoids writing tedious code. It has grown popular in the past few years, and many top-notch companies use this framework in their products. The best examples for these are Netflix, Microsoft, and LinkedIn.",
          img: "images/ember.png",
        },
        {
          title: "Svelte.js",
          text:
            "Svelte.js has become very popular in the last 12 months or so. It is an open-source component-based JavaScript framework written in TypeScript. Svelte was released in 2016 and has had growing popularity among the developer community ever since.",
          img: "images/svetle.png",
        },
      ],
      rightButtonTitle: "Forward",
    };
  },
  methods: {
    prev() {
      if (this.activeIndex < 1) return;
      this.activeIndex--;
      this.rightButtonTitle = "Forward";
    },

    nextOfFinish() {
      if (this.isLastStep) {
        console.log("LastStep");
        this.isAppWork = false;
        return;
      }
      if (this.isNextToLastStep) {
        this.rightButtonTitle = "Finish?";
      }

      this.activeIndex++;
    },
    setActive(i) {
      this.activeIndex = i;
      if (this.isLastStep) {
        this.rightButtonTitle = "Finish?";
      } else {
        this.rightButtonTitle = "Forward";
      }
    },

    startFromBeginning() {
      this.activeIndex = 0;
      this.isAppWork = true;
      this.rightButtonTitle = "Forward";
    },
  },

  computed: {
    getActiveText() {
      return this.steps[this.activeIndex].text;
    },

    isDisabled() {
      return this.activeIndex === 0;
    },

    isNextToLastStep() {
      return this.activeIndex === this.steps.length - 2;
    },

    isLastStep() {
      return this.activeIndex === this.steps.length - 1;
    },

    linkToImage() {
      return this.steps[this.activeIndex].img;
    },
  },
};

Vue.createApp(App).mount("#app");
