<template>
    <v-card
            max-width=""
            class="my-10 mx-10"
    >
        <v-list class="pa-0">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title align="center">
                        <strong>Job History</strong>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="#FA503A">
                        mdi-map-marker
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>
                        <strong>Manchester</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        2020 - Current
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Full Stack Developer</v-list-item-title>
                    <v-list-item-subtitle>
                        Tui Interactive Media, London (full remote)
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Senior PHP Developer</v-list-item-title>
                    <v-list-item-subtitle>
                        Street Group, Manchester
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="#FA503A">
                        mdi-map-marker
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>
                        <strong>
                            London
                        </strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        2017 - 2020
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>PHP Developer</v-list-item-title>
                    <v-list-item-subtitle>
                        Tui Interactive Media, London
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="#FA503A">
                        mdi-map-marker
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>
                        <strong>
                            Manchester
                        </strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        2011 - 2016
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>PHP Developer</v-list-item-title>
                    <v-list-item-subtitle>
                        Mojofuel, Manchester
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Freelance Web Developer</v-list-item-title>
                    <v-list-item-subtitle>
                        The Paper Cup Company, Clitheroe
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                        Rocoru Creative, Manchester
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Web Developer</v-list-item-title>
                    <v-list-item-subtitle>
                        Workhouse Marketing, Ribchester
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title align="center">
                        <strong>Education</strong>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="#FA503A">
                        mdi-school
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Lancaster</v-list-item-title>
                    <v-list-item-subtitle>Software Engineering, First Class Honours</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "History"
    });
</script>