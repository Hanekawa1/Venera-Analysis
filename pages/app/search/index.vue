<template>
  <div>
    <div v-if="!loading">
      <v-row>
        <v-col cols="12" md="4">
          <div class="pt-10 d-flex justify-center">
            <v-img
              style="cursor: pointer"
              max-height="50%"
              max-width="50%"
              :src="orangeLogo"
              @click="back"
            >
            </v-img>
          </div>
          <div class="d-none d-md-flex justify-end pl-10">
            <v-img
              max-height="100%"
              max-width="60%"
              style="position: absolute; bottom: 2px; left: 0"
              :src="socialMedia"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="2" md="2"></v-col>
        <v-col cols="12" md="6">
          <v-form class="pr-10 pt-10">
            <v-card class="ml-16" shaped>
              <v-row>
                <v-col class="ml-6">
                  <v-card-title>Realize sua pesquisa aqui! </v-card-title>
                  <p class="ml-4 mr-4">
                    Para isso, preencha os dados abaixo. Assim que preenchidos,
                    os comentários serão buscados na internet de acordo com a
                    configuração realizada.
                  </p>
                </v-col>
              </v-row>

              <v-row>
                <Tooltip
                  class="pl-10 d-flex"
                  message="Insira a instituição a ser buscada. Dê preferência por siglas ou nomes menores."
                />

                <v-col cols="10">
                  <v-text-field
                    v-model="searchData.query"
                    color="black"
                    :rules="queryRules"
                    :counter="20"
                    label="Instituição"
                    required
                    class="ml-8 mr-8 pt-2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <Tooltip
                  class="pl-10 d-flex"
                  message="Limite máximo de comentários a serem coletados."
                />
                <v-col cols="10">
                  <v-slider
                    v-model="searchData.limit"
                    label="Limite"
                    hint="O limite máximo atual é 200 comentários por questões de desempenho"
                    persistent-hint
                    max="200"
                    min="10"
                    thumb-label="always"
                    class="ma-6 pt-6 pl-2"
                    color="secondary"
                  ></v-slider>
                </v-col>
              </v-row>

              <v-row>
                <Tooltip
                  class="pl-10 d-flex"
                  message="Uma pequena anotação para ajudar na identificação nas consultas históricas."
                />
                <v-col cols="10">
                  <v-text-field
                    v-model="searchData.note"
                    label="Anotação"
                    clearable
                    class="ml-8 mr-8 pt-2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="pl-10">
                <v-col cols="12" xs="4" md="4">
                  Redes sociais ativas:
                  <v-row>
                    <v-col cols="3" xs="3" md="3">
                      <v-icon>mdi-twitter</v-icon>
                      <v-checkbox
                        color="orange darken-3"
                        input-value="true"
                        value
                        disabled
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="3" xs="3" md="3">
                      <v-icon>mdi-google</v-icon>
                      <v-checkbox
                        color="orange darken-3"
                        input-value="true"
                        value
                        disabled
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="3" xs="3" md="3">
                      <v-icon>mdi-instagram</v-icon>
                      <v-checkbox color="primary" value disabled></v-checkbox>
                    </v-col>
                    <v-col cols="3" xs="3" md="3">
                      <v-icon>mdi-facebook</v-icon>
                      <v-checkbox value disabled class="x"></v-checkbox>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="4"></v-col>

                <v-col cols="12" xs="4" md="4">
                  <div class="ma-4 pl-6 pt-2 pb-6 pt-12 d-flex justify-end">
                    <v-btn
                      class="justify-end"
                      outlined
                      color="primary"
                      @click="search"
                    >
                      <v-icon class="pr-2">mdi-comment-search-outline</v-icon>
                      Pesquisar
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </div>
    <transition name="fade">
      <div v-if="loading">
        <Loading />
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
