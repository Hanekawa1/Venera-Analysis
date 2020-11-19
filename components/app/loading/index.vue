<template>
  <div class="mt-8">
    <v-img max-height="50%" max-width="50%" class="running" :src="foxRunning">
    </v-img>
    <FloatingText class="d-flex justify-center" />
    <div class="d-flex justify-center mt-16 ml-16 mr-16">
      <p class="text-center">
        <v-icon color="primary" class="class" v-bind="attrs" v-on="on">
          mdi-information-outline
        </v-icon>
        Informação: a duração da busca é baseada na quantidade de comentários
        selecionados. Para comparação, a duração em média de uma busca com 200
        comentários é de 35 segundos.
      </p>
    </div>
  </div>
</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
