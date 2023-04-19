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
      <v-data-table :headers="headers" :items="mDataArray">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.image }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency("฿") }}</td>
            <td>{{ item.stock | number("0,0") }} pcs.</td>
            <td>
              <v-btn color="info" class="mr-2" @click="editItem(item)">
                <v-icon class="mr-2">edit</v-icon>EDIT</v-btn>
              <v-btn color="error" @click="deleteItem(item)"><v-icon class="mr-2">delete</v-icon> DELETE</v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import StockCard from "@/components/card/StockCard.vue";
import axios from "axios";

export default {
  name: "stock",
  components: {
    StockCard,
  },
  data() {
    return {
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
    async getProduct() {
      const result = await axios.get("http://localhost:8081/api/v2/product");
      this.mDataArray = result.data;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
<style></style>
