<template>
  <v-col cols="1">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-icon color="primary" v-bind="attrs" v-on="on">
          mdi-information-outline
        </v-icon>
      </template>
      <span>{{ message }}</span>
    </v-tooltip>
  </v-col>
</template>

<script type="text/javascript" src="./script.js" />
