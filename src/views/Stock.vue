<template>
  <v-container>
    <!-- Summary section -->
    <v-row class="py-4">
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="TOTAL"
          subtitle="1,800"
          avatar_bg="#00a65a"
          avatar_icon="mdi-cart-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="SOLD-OUT"
          subtitle="12"
          avatar_bg="#f39c12"
          avatar_icon="mdi-flask-empty-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="RETURN"
          subtitle="2"
          avatar_bg="#dd4b39"
          avatar_icon="mdi-keyboard-return"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="DISCOUNT"
          subtitle="101"
          avatar_bg="#00c0ef"
          avatar_icon="mdi-gift-outline"
        />
      </v-col>
    </v-row>
    <!-- Table section -->

    <v-card>
      <v-data-table :search="search" :headers="headers" :items="mDataArray">
        <template v-slot:top>
          <v-app-bar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              color="success"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push('/stock-create')" color="success" dark class="mb-2"
              ><v-icon left>add</v-icon> <span>New Product</span></v-btn
            >
          </v-app-bar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-img
                v-if="item.image"
                :src="item.image | imageUrl"
                aspect-ratio="1"
                max-width="50"
                max-height="50"
              >
                <template v-slot:placeholder>
                  <v-skeleton-loader
                    :loading="!item.image"
                    max-width="50"
                    max-height="50"
                    type="image"
                    class="custom-skeleton"
                  />
                </template>
              </v-img>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency("฿") }}</td>
            <td>{{ item.stock | number("0,0") }} pcs.</td>
            <td>
              <v-icon @click="editItem(item)" left>edit</v-icon>
              <v-icon @click="deleteItem(item)" left>delete</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import StockCard from "@/components/card/StockCard.vue";
import api from "@/service/api"

export default {
  name: "stock",
  components: {
    StockCard,
  },
  data() {
    return {
      search: "",
      mDataArray: [],
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
        },
        {
          text: "Image",
          value: "image",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Price",
          value: "price",
        },
        {
          text: "Stock",
          value: "stock",
        },
        {
          text: "Action",
          value: "action",
        },
      ],
    };
  },
  methods: {
    async loadProduct() {
      const result = await api.getProducts()
      this.mDataArray = result.data
    },
    editItem(item){
      this.$router.push(`/stock-edit/${item.id}`)
    }
  },
  mounted() {
    this.loadProduct();
  },
};
</script>
<style scoped>
.custom-skeleton {
  border-radius: 0;
}
</style>
