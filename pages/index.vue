<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" xs="6">
        <div class="pt-4 pl-6">
          <v-img max-width="70%" max-height="70%" :src="logoCima"> </v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6" xs="6" class="d-none d-sm-flex justify-end pr-16">
        <div>
          <v-img
            :src="status"
            width="20vh"
            height="20vh"
            @mouseover="onHoverHealthcheck"
            @mouseleave="onHoverHealthcheck"
          >
          </v-img>
          <p class="text-center">Serviços online</p>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex" no-gutters>
      <v-col cols="12" sm="6" xs="6" class="d-flex mt-10">
        <div class="pl-10">
          <h2 style="color: white; font-size: 30px">{{ textWelcome }}</h2>
          <p style="color: white" class="pt-6">{{ textIntroduction }}</p>
          <div class="pt-4">
            <v-btn elevation="6" outlined @click="searchPage">
              <v-icon class="pr-2">mdi-comment-search-outline</v-icon> Demorou!
            </v-btn>
          </div>

          <p style="color: white" class="pt-16">
            Ou talvez você queira ver o que já pesquisaram...
          </p>

          <div class="pt-4">
            <v-btn outlined elevation="6" @click="historyPage">
              <v-icon class="pr-2">mdi-text-box-search-outline</v-icon>Beleza,
              bora fuçar!</v-btn
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" xs="6" class="d-none d-sm-flex">
        <div>
          <v-img
            :src="indexImage"
            max-width="70%"
            max-height="70%"
            class="centro"
          >
          </v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
