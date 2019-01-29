<template>
    <div class="contributors">
        <el-tabs type="card">
            <el-tab-pane label="Monthly contributors">
                <ContributorsTable
                        :contributors="contributors"
                        type="monthly"
                        :firstPlace="monthlyFirstPlace"
                        :secondPlace="monthlySecondPlace"
                        :thirdPlace="monthlyThirdPlace"
                >
                </ContributorsTable>
            </el-tab-pane>
            <el-tab-pane label="Contributors of all time">
                <ContributorsTable
                        :contributors="contributors"
                        type="total"
                        :firstPlace="firstPlace"
                        :secondPlace="secondPlace"
                        :thirdPlace="thirdPlace"
                >
                </ContributorsTable>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import ContributorsTable from "../components/ContributorsTable";

    export default {
        components: {ContributorsTable},
        computed: {
            ...mapState({
                contributors: 'contributors',
                firstPlace: 'firstPlace',
                secondPlace: 'secondPlace',
                thirdPlace: 'thirdPlace',
                monthlyFirstPlace: 'monthlyFirstPlace',
                monthlySecondPlace: 'monthlySecondPlace',
                monthlyThirdPlace: 'monthlyThirdPlace'
            })
        }
    }
</script>
