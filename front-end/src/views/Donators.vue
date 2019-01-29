<template>
    <div class="donators">
        <el-table
            :data="donators"
            stripe
            :default-sort="{ prop: 'stoppers', order: 'descending'}"
        >
            <el-table-column
                width="100"
                label="Podium"
            >
                <template slot-scope="scope">
                    <img
                            v-if="scope.row.id === firstPlace"
                            width="28"
                            height="28"
                            src="../assets/gold-medal.png"
                            alt="Gold Medal"
                    />
                    <img
                            v-if="scope.row.id === secondPlace"
                            width="28"
                            height="28"
                            src="../assets/silver-medal.png"
                            alt="Silver Medal"
                    />
                    <img
                            v-if="scope.row.id === thirdPlace"
                            width="28"
                            height="28"
                            src="../assets/bronze-medal.png"
                            alt="Bronze Medal"
                    />
                </template>
            </el-table-column>
            <el-table-column
                    prop="fullname"
                    label="Donators"
            >
            </el-table-column>
            <el-table-column
                prop="monthlyStoppers"
                label="Plastic stoppers collected this month"
            >

            </el-table-column>
            <el-table-column
                prop="stoppers"
                label="Total of collected plastic stoppers"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        computed: {
            ...mapState({
                donators: 'donators',
                firstPlace: 'firstPlace',
                secondPlace: 'secondPlace',
                thirdPlace: 'thirdPlace'
            })
        }
    }
</script>
