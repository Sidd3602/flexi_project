<template>
  <div style="background-color: pink;">    
  <v-toolbar color="#FF80AB">
    <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-h6 mr-6 hidden-sm-and-down">
      DewyHive
    </v-toolbar-title>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="id"
      label="Search for a Product"
      solo
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
            <strong>Product</strong>
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:selection="{ attr, on, item, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          class="white--text"
          v-on="on"
        >
          <span v-text="item.name"></span>
        </v-chip>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
        >
          {{ item.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        
      </template>
    </v-autocomplete>
    <template v-slot:extension>
      <v-tabs
        v-model="tab"
        :hide-slider="!model"
        color="blue-grey"
        slider-color="blue-grey"
      >
        <v-tab>
          Products
        </v-tab>
        <v-tab>
          Login
        </v-tab>
        <v-tab>
          Ai
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
  <div>
  <v-col cols="10" md="4" offset-md="4" sm="6" offset-sm="3">
  <v-card-center
  class="mx-auto"
  max-width="344"
  >
  <v-img
    src="@/assets/index-1588697883.png"
    height="200px"
  ></v-img>

  <v-card-title>
    Hydrate
  </v-card-title>

  <v-card-subtitle>
    
  </v-card-subtitle>

  <v-card-actions>
    <v-btn
      color="orange lighten-2"
      text
    >
      Explore
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      icon
      @click="show = !show"
    >
      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-btn>
  </v-card-actions>

  <v-expand-transition>
    <div v-show="show">
      <v-divider></v-divider>

      <v-card-text>
        Hydrating beauty products are skincare or cosmetic items formulated to increase the moisture content of the skin. These products usually contain ingredients like hyaluronic acid, glycerin, and ceramides that can help retain water in the skin and prevent dryness. 
      </v-card-text>
    </div>
  </v-expand-transition>
</v-card-center>
</v-col>
<v-col cols="10" md="4" offset-md="4" sm="6" offset-sm="3">
<v-card-end
  class="mx-auto"
  max-width="344"
  >
  <v-img
    src="@/assets/what_skincare_products_does_jessica_alba_use.png"
    height="200px"
  ></v-img>

  <v-card-title>
    Glow
  </v-card-title>

  <v-card-subtitle>
    
  </v-card-subtitle>

  <v-card-actions>
    <v-btn
      color="orange lighten-2"
      text
    >
      Explore
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      icon
      @click="show = !show"
    >
      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-btn>
  </v-card-actions>

  <v-expand-transition>
    <div v-show="show">
      <v-divider></v-divider>

      <v-card-text>
        Glow beauty products are a type of cosmetics designed to enhance the natural radiance and luminosity of the skin. These products often contain ingredients like antioxidants, vitamins, and minerals that work to nourish and protect the skin
      </v-card-text>
    </div>
  </v-expand-transition>
</v-card-end>
</v-col>
<v-col cols="10" md="4" offset-md="4" sm="6" offset-sm="3">
<v-card-start
  class="mx-auto"
  max-width="344"
  >
  <v-img
    src="@/assets/YMm6umCz.jpg"
    height="200px"
  ></v-img>

  <v-card-title>
    Nourish
  </v-card-title>

  <v-card-subtitle>
    
  </v-card-subtitle>

  <v-card-actions>
    <v-btn
      color="orange lighten-2"
      text
    >
      Explore
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      icon
      @click="show = !show"
    >
      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-btn>
  </v-card-actions>

  <v-expand-transition>
    <div v-show="show">
      <v-divider></v-divider>

      <v-card-text>
        Nourish refers to the process of providing the body with the necessary nutrients, vitamins, and minerals it needs to function optimally. This can be achieved through a balanced and healthy diet that includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Nourishing the body also involves drinking enough water and staying physically active to support overall health and wellness.
      </v-card-text>
    </div>
  </v-expand-transition>
</v-card-start>
</v-col>
</div>
</div>
</template>
<script>
import Login from '@/Login.vue'

export default {
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
  }),

  watch: {
    model (val) {
      if (val != null) this.tab = 0
      else this.tab = null
    },
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      this.isLoading = true

      // Lazily load input items
      fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(res => res.clone().json())
        .then(res => {
          this.items = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
  },
}
</script>

<style scoped>

</style>