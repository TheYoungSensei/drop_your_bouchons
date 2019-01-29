<template>
    <el-table
            :data="contribs"
            stripe
            :default-sort="{ prop: sort, order: 'descending'}"
    >
        <el-table-column
                width="100"
                label="Podium"
        >
            <template slot-scope="scope">
                <img
                        v-if="scope.row.id === first"
                        width="28"
                        height="28"
                        src="../assets/gold-medal.png"
                        alt="Gold Medal"
                />
                <img
                        v-if="scope.row.id === second"
                        width="28"
                        height="28"
                        src="../assets/silver-medal.png"
                        alt="Silver Medal"
                />
                <img
                        v-if="scope.row.id === third"
                        width="28"
                        height="28"
                        src="../assets/bronze-medal.png"
                        alt="Bronze Medal"
                />
            </template>
        </el-table-column>
        <el-table-column
                prop="fullname"
                label="Contributors"
        >
        </el-table-column>
        <el-table-column
                :prop="sort"
                label="Collected Plastic stoppers"
        >

        </el-table-column>
    </el-table>
</template>

<script>
    import { total } from '../constants';

    export default {
        props: {
            contributors: Array,
            type: Number,
            firstPlace: String,
            secondPlace: String,
            thirdPlace: String
        },
        computed: {
            contribs: function () {
                return this.contributors;
            },
            sort: function () {
                if (this.type === total) {
                    return 'stoppers';
                }
                return 'monthlyStoppers';
            },
            first: function () {
                return this.firstPlace;
            },
            second: function () {
                return this.secondPlace;
            },
            third: function () {
                return this.thirdPlace;
            }
        }
    }
</script>

<style>

</style>
