<template>
  <div v-if="!failed">
    <v-card elevation="12" outlined shaped max-width="300">
      <v-card-title> {{ item.query }}</v-card-title>
      <v-card-subtitle color="primary"> {{ item.note }} </v-card-subtitle>

      <v-card-text>
        <div class="pt-2">
          <v-icon color="primary">mdi-chevron-triple-up</v-icon>Quantidade
          máxima inserida: {{ item.maximum }}
        </div>

        <div class="pt-2">
          <v-icon color="primary">mdi-counter</v-icon>Quantidade recolhida:
          {{ item.count }}
        </div>

        <div class="pt-2">
          <v-icon color="primary">mdi-alarm-check</v-icon> Tempo total de
          análise: {{ item.time | timeFormat }}
        </div>

        <div class="pt-2">
          <v-icon color="primary">mdi-calendar</v-icon> Data realizada:
          {{ item.date }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-row align="center" justify="end" class="pr-4">
          <v-btn icon @click="view(item._id)">
            <v-icon color="primary">mdi-eye</v-icon>
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>

  <div v-else>
    <v-card elevation="12" outlined shaped max-width="300">
      <v-card-title class="text-center">
        Não foi possível carregar os dados.</v-card-title
      >
      <v-img :src="sadFox"></v-img>
    </v-card>
  </div>
</template>

<script type="text/javascript" src="./script.js" />
