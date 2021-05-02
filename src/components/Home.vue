<template>
  <div class="vacate">
    <vue-up></vue-up>
    <header class="vacate__header">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Vacate</span>
        <span class="heading-primary--sub"
          >Vacate yourself before you leave the browser</span
        >
      </h1>
    </header>
    <multiselect
      v-model="selectedWebsites"
      :options="websitesList"
      label="name"
      :multiple="true"
      trackBy="name"
      :placeholder="logoutFieldPlaceholder"
      :preserve-search="false"
      :clear-on-select="false"
      aria-placeholder="Choose Websites"
      :hide-selected="true"
      @open="clearDisplay"
      class="vacate__multiselect"
    >
    </multiselect>
    <div class="vacate__btn">
      <a @click="logout" class="btn btn__white">Logout</a>
    </div>
    <div v-if="display">
      <app-website
        v-for="website in selectedWebsites"
        :key="website.name"
        :website="website"
      >
      </app-website>
    </div>
  </div>
</template>

<script>
import AppWebsite from "@/components/Website";
import websitesList from "@/assets/websites";
import Multiselect from "vue-multiselect";

export default {
  name: "Home",
  data() {
    return {
      display: false,
      selectedWebsites: [],
      websitesList
    };
  },
  components: {
    AppWebsite,
    Multiselect
  },
  computed: {
    areWebsitesSelected() {
      return Boolean(this.selectedWebsites.length);
    },
    logoutFieldPlaceholder() {
      return this.areWebsitesSelected
        ? "I want to log out from"
        : "I want to log out from all applications listed";
    }
  },

  methods: {
    logout() {
      if (this.selectedWebsites.length === 0) {
        return;
      }
      this.display = true;
      this.$popup({
        message: "Yay!! You Have Been Logged Out",
        color: "#FFFFFF",
        backgroundColor: "#FFC107",
        delay: 2
      });
    },
    clearDisplay() {
      this.display = false;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vacate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.vacate__header {
  text-align: center;
  margin-bottom: 5rem;
}
.vacate__multiselect {
  margin-bottom: 2rem;
  max-width: 80rem;
}
.heading-primary {
  color: #ffffff;
  margin-bottom: 2rem;
}
.heading-primary--main {
  display: block;
  font-size: 8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3rem;
}
.heading-primary--sub {
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.5rem;
}
.vacate__btn {
  font-size: 2rem;
}
.btn {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 1rem;
  position: relative;
}
.btn:hover {
  transform: translateY(-0.3rem);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}
.btn:active {
  transform: translateY(-0.1rem);
  box-shadow: 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
}
.btn__white {
  background-color: #ffffff;
  color: #757575;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
.btn__white::after {
  background-color: #ffffff;
}
.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

@media only screen and (max-width: 992px) {
  .vacate__multiselect {
    margin-bottom: 2rem;
    max-width: 60rem;
  }
}
@media only screen and (max-width: 768px) {
  .vacate__multiselect {
    margin-bottom: 2rem;
    max-width: 50rem;
  }
  .heading-primary--main {
    letter-spacing: 2rem;
  }
}
@media only screen and (max-width: 576px) {
  .vacate__multiselect {
    margin-bottom: 2rem;
    max-width: 40rem;
  }
  .heading-primary--main {
    font-size: 5rem;

    letter-spacing: 1rem;
  }
  .heading-primary--sub {
    font-size: 1.6rem;
  }
}
</style>
