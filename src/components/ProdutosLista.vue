<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0]"
        :alt="produto.fotos[0].titulo"
      />
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p class="preco">{{ produto.preco }}</p>
      <p class="descricao">{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services/services.js";
export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    getProdutos() {
      api.get("/produto").then((response) => {
        this.produtos = response.data;
      });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped></style>
