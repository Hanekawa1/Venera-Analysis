<template>
  <v-container fluid>
    <v-row class="d-flex pl-4">
      <v-col cols="12" md="6" class="pt-10">
        <h2 class="d-flex">
          Histórico de pesquisas
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="red" class="class pl-4" v-bind="attrs" v-on="on">
                mdi-alert-circle-outline
              </v-icon>
            </template>
            <span
              >As pesquisas apresentadas são dos últimos 30 dias. Pesquisas que
              excedem esse período não são mantidas para melhorar a qualidade
              dos dados analisados.</span
            >
          </v-tooltip>
        </h2>
        <p>
          Aqui você encontra diversas pesquisas realizadas por outros e que
          possam lhe interessar.
        </p>
      </v-col>

      <v-col cols="12" md="6">
        <div class="d-sm-none d-md-flex justify-end pr-10">
          <v-img
            style="cursor: pointer"
            :src="orangeLogo"
            max-height="50%"
            max-width="50%"
            @click="back"
          ></v-img>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col
        v-for="item in top3"
        :key="item.id"
        class="d-flex justify-center"
        cols="12"
        xs="4"
        md="4"
      >
        <Spotlight :view="view" :item="item" :failed="failedFetch"
      /></v-col>
    </v-row>

    <v-row v-if="failedFetch" class="d-flex justify-center">
      <v-col
        v-for="item in 3"
        :key="item"
        class="d-flex justify-center"
        cols="12"
        xs="4"
        md="4"
      >
        <Spotlight :failed="failedFetch"
      /></v-col>
    </v-row>

    <div v-if="!failedFetch" class="pt-10 ma-10">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        :loading="loading"
        loading-text="Carregando pesquisas..."
      >
        <template v-slot:item.view="{ item }">
          <v-btn icon color="primary" @click="view(item._id)"
            ><v-icon>mdi-eye</v-icon></v-btn
          >
        </template>

        <template slot="no-data"> Nada para mostrar por aqui :( </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
