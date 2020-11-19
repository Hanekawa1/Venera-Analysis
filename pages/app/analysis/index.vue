<template>
  <v-container fluid>
    <v-row class="d-flex pl-4">
      <v-col cols="12" md="6" class="pt-10">
        <h2 class="d-flex justify-sm-center justify-md-start">
          Aqui estão os resultados:
        </h2>
        <p class="mt-6">
          "Os comentários coletados estão na tabela abaixo. Cada comentário tem
          análise individual, sendo analisada sua taxa 'positiva', 'negativa' e
          'neutra' baseada nas palavras contidas nos comentários. A média geral
          da pesquisa é calculada de acordo com as médias dos comentários."
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-sm-none d-md-flex justify-end pr-10">
          <v-img
            style="cursor: pointer"
            :src="orangeLogo"
            max-height="30%"
            max-width="30%"
            @click="back"
          ></v-img>
        </div>
      </v-col>
    </v-row>

    <v-row class="pt-16">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card elevation="12" outlined shaped max-width="700" min-width="450">
          <div class="ma-6">
            <v-card-title>Pontos de análise </v-card-title>

            <div>
              <v-icon color="primary">mdi-bullseye-arrow</v-icon> Positiva:
              acima de 60%
            </div>
            <div>
              <v-icon color="primary">mdi-bullseye-arrow</v-icon> Negativa:
              abaixo de 40%
            </div>
            <div>
              <v-icon color="primary">mdi-bullseye-arrow</v-icon> Neutra: entre
              40% e 60%
            </div>
          </div>

          <div class="ml-6 mr-6">
            <div class="mt-2">
              <v-icon color="primary">mdi-home-city-outline</v-icon>
              Pesquisa: {{ document.query }}
            </div>

            <div class="mt-2">
              <v-icon color="primary">mdi-chevron-triple-up</v-icon>
              Aproximadamente {{ document.maximum }} comentários
            </div>

            <div class="mt-2">
              <v-icon color="primary">mdi-notebook-edit-outline</v-icon>
              Anotação: {{ document.note }}
            </div>

            <div class="mt-2">
              <v-icon color="primary">mdi-alarm-check</v-icon>
              Tempo de pesquisa: {{ document.time | timeFormat }}
            </div>

            <div class="mt-2">
              <v-icon color="primary">mdi-calendar</v-icon>
              Data da pesquisa: {{ document.date | dateFormat }}
            </div>
          </div>

          <div v-if="source === 'search'" class="ml-6 ma-4 mb-4">
            <v-btn color="red" outlined @click="deleteSearch"
              ><v-icon>mdi-delete-empty-outline</v-icon>Excluir pesquisa</v-btn
            >
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="d-flex justify-center">
        <div>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                outlined
                v-bind="attrs"
                v-on="on"
                @click="showQuantity = !showQuantity"
                ><v-icon>mdi-chart-donut</v-icon></v-btn
              >
            </template>
            <span>{{
              showQuantity
                ? 'Mostrar gráfico de quantidade por fonte'
                : 'Mostrar gráfico de quantidade por sentimento'
            }}</span>
          </v-tooltip>
        </div>

        <div>
          <div style="max-height: 350px; max-width: 350px">
            <DoughnutExample
              v-if="showQuantity"
              :chart-data="chartData"
              :options="options"
            >
            </DoughnutExample>
          </div>
        </div>

        <div>
          <div style="max-height: 350px; max-width: 350px">
            <DoughnutExample
              v-if="!showQuantity"
              :chart-data="chartDataSource"
              :options="optionsSource"
            >
            </DoughnutExample>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4" class="d-flex justify-center">
        <div v-if="sentiment == 'positive'" class="d-flex justify-end">
          <div>
            <v-icon x-large color="green" style="font-size: 300px"
              >mdi-thumb-up-outline</v-icon
            >
            <p>Os usuários falam bem de sua Instituição!</p>
            <p>
              Média de aprovação:
              {{ (analysis.totalAverage * 100) | percentFormat }}%
            </p>
          </div>
        </div>

        <div v-else-if="sentiment == 'negative'" class="d-flex justify-end">
          <div>
            <v-icon x-large color="red" style="font-size: 300px"
              >mdi-thumb-down-outline</v-icon
            >
            <p>Os usuários não falam bem de sua Instituição!</p>
            <p>
              Média de aprovação:
              {{ (analysis.totalAverage * 100) | percentFormat }}%
            </p>
          </div>
        </div>

        <div v-else class="d-flex justify-end">
          <div>
            <v-icon x-large color="grey" style="font-size: 300px"
              >mdi-thumbs-up-down</v-icon
            >
            <p>Os usuários tem uma posição neutra de sua Instituição!</p>
            <p>
              Média de aprovação:
              {{ (analysis.totalAverage * 100) | percentFormat }}%
            </p>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="pt-16">
      <v-col cols="12">
        <v-simple-table>
          <template>
            <thead>
              <tr>
                <th style="width: 50%">Comentário</th>
                <th>Sentimento</th>
                <th>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon x-large color="green" v-bind="attrs" v-on="on"
                        >mdi-thumb-up-outline</v-icon
                      >
                    </template>
                    <span>Taxa positiva</span>
                  </v-tooltip>
                </th>

                <th>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon x-large color="grey" v-bind="attrs" v-on="on"
                        >mdi-thumbs-up-down</v-icon
                      >
                    </template>
                    <span>Taxa neutra</span>
                  </v-tooltip>
                </th>

                <th>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon x-large color="red" v-bind="attrs" v-on="on"
                        >mdi-thumb-down-outline</v-icon
                      >
                    </template>
                    <span>Taxa negativa</span>
                  </v-tooltip>
                </th>
                <th>Sentenças</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in analysis.data" :key="data.id">
                <td>{{ data.comment }}</td>
                <td>{{ data.sentiment }}</td>
                <td>
                  {{ (data.confidenceScores.positive * 100) | percentFormat }}%
                </td>
                <td>
                  {{ (data.confidenceScores.neutral * 100) | percentFormat }}%
                </td>
                <td>
                  {{ (data.confidenceScores.negative * 100) | percentFormat }}%
                </td>
                <td>
                  <Sentences :sentences="data.sentences" />
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
