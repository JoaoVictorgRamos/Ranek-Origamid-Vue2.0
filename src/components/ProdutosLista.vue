<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div
        v-if="produtos && produtos.length > 0"
        class="produtos"
        key="produtos"
      >
        <div v-for="(produto, index) in produtos" :key="index" class="produto">
          <router-link
            :to="{ name: 'ProdutoView', params: { id: produto.id } }"
          >
            <img
              v-if="produto.fotos"
              :src="produto.fotos[0]"
              :alt="produto.fotos[0].titulo"
            />
            <h2 class="titulo">{{ produto.nome }}</h2>
            <p class="preco">{{ produto.preco | NumeroPreco }}</p>
            <p class="descricao">{{ produto.descricao }}</p>
          </router-link>
        </div>
        <ProdutosPaginar
          :produtosTotal="produtosTotal"
          :produtosPorPagina="produtosPorPagina"
        />
      </div>
      <div v-else-if="produtos && produtos.length === 0" key="sem-resultado">
        <p class="sem-resultado">
          Busca sem resultado. Tente buscar outro termo.
        </p>
      </div>
      <PaginaCarregando v-else key="carregando" class="carregando" />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services/services.js";
import { serialize } from "@/helpers/helpers.js";
import ProdutosPaginar from "@/components/ProdutosPaginar.vue";
export default {
  name: "ProdutosLista",
  components: {
    ProdutosPaginar,
  },
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getProdutos() {
      this.produtos = null;
      window.setTimeout(() => {
        api.get(this.url).then((response) => {
          this.produtosTotal = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
        });
      }, 1500);
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultado,
.carregando {
  text-align: center;
}
</style>
