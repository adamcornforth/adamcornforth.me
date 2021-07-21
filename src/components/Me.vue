<template>
    <v-card
                max-width="375"
                class="mx-auto my-3"
        >
            <v-img
                    src="me.jpg"
                    height="350px"
                    class="pt-16"
                    gradient="to bottom, rgba(203,58,250,.1), rgba(250,80,58,.4)"
            >
                <v-row class="fill-height pa-4 pt-16">
                    <v-card-title class="white--text pt-16">
                        <div class="pt-16">
                            <span class="display-1 font-weight-bold">
                                Adam Cornforth
                            </span>
                            <br>
                            <span class="text-overline font-wieght-medium">
                                Software Engineer
                            </span>
                        </div>
                    </v-card-title>
                </v-row>
            </v-img>

            <v-list class="pa-0">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title align="center">
                            <strong>About</strong>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item
                        href="adam-cornforth-cv.pdf"
                        target="_blank">
                    <v-list-item-icon>
                        <v-icon color="#FA503A">
                            mdi-file
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>View CV</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                        href="https://github.com/adamcornforth/adamcornforth.me"
                        target="_blank">
                    <v-list-item-icon>
                        <v-icon color="#FA503A">
                            mdi-github
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Github</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title align="center">
                            <strong>Contact</strong>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item
                        href="mailto:adam@apcdesigner.com"
                        target="_blank">
                    <v-list-item-icon>
                        <v-icon color="#FA503A">
                            mdi-email
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Email</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                        href="https://www.linkedin.com/in/adam-cornforth-25124759"
                        target="_blank">
                    <v-list-item-icon>
                        <v-icon color="#FA503A">
                            mdi-linkedin
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>LinkedIn</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Me"
    });
</script>