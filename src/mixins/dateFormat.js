export const dateFormat = {
  created() {
    console.log("Hello mixins");
  },
  data() {
    return {
      mixinData: "mixins data",
    };
  },
  methods: {
    getDateAndTime(date) {
      if (date !== null) {
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let fullDate = `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()}`;
        return `${fullDate} ${hour}:${minutes}`;
      } else {
        return null;
      }
    },
  },
};
