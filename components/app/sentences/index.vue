<template>
  <v-dialog width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon
        ><v-icon color="primary" v-bind="attrs" v-on="on"
          >mdi-eye</v-icon
        ></v-btn
      >
    </template>
    <v-card>
      <v-card-title> Sentenças </v-card-title>

      <v-card-text>
        As sentenças são fragmentos dos comentários que tiveram maior impacto na
        análise dos textos. Cada uma tem uma análise própria, gerando assim
        dados únicos para a análise geral.
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-timeline align-top dense>
        <v-timeline-item v-for="sentence in sentences" :key="sentence.index">
          <div>
            {{ sentence.text }}
            <div class="mt-4">
              <v-icon class="ml-4" small color="green"
                >mdi-thumb-up-outline</v-icon
              >{{ sentence.confidenceScores.positive }}
              <v-icon class="ml-4" small color="grey">mdi-thumbs-up-down</v-icon
              >{{ sentence.confidenceScores.neutral }}
              <v-icon class="ml-4" small color="red"
                >mdi-thumb-down-outline</v-icon
              >{{ sentence.confidenceScores.negative }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-dialog>
</template>

<script type="text/javascript" src="./script.js" />
