<template>
    <div class="progress">
        <h1>Progress of the plastic stoppers gathering</h1>
        <h3>Monthly progress</h3>
        <el-progress :text-inside="true" :percentage="monthlyPerc" :stroke-width="20" status="text">

        </el-progress>
        <p>
            This month, with your support we have collected <b>{{monthlyStoppers}}</b> of our monthly <b>5833</b> plastic stoppers.
        </p>
        <h3>Progress signification</h3>
        <div class="progress-div">
            <div class="box-card">
                <el-progress type="circle" :percentage="puppyPerc" :stroke-width="12">

                </el-progress><br>
                <em class="boxed-em">Help the C.B.C.G. to adopt a puppy.</em>
            </div>
            <div class="box-card">
                <el-progress type="circle" :percentage="dogPerc" :stroke-width="12">

                </el-progress><br>
                <em class="boxed-em">Help the C.B.C.G. to train a guide dog.</em>
            </div>
            <div class="box-card">
                <el-progress type="circle" :percentage="totalPerc" :stroke-width="12">

                </el-progress><br>
                <em class="boxed-em">Help the formation of a guide dog from A to Z.</em>
            </div>
        </div>
        <h3>Thanks to your help</h3>
        <div class="progress-div">
            <div class="box-card">
                <img src="../assets/plastic.png" alt="Image of plastic caps"><br>
                <em class="boxed-em">We have collected <b>{{totalStoppers}}</b> plastic stoppers.</em>
            </div>
            <div class="box-card">
                <img src="../assets/dog.png" alt="Image of guide dogs"><br>
                <em class="boxed-em">We have raised <b>{{totalPerc}}%</b> of one guide dog needed funds.</em>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    const percentage = (percentFor, percentOf) => {
        if(percentFor === 0 || percentOf === 0) {
            return 0;
        }
        return parseFloat(((percentFor/percentOf) * 100).toFixed(2));
    };

    export default {
        computed: {
            ...mapState({
                monthlyStoppers: 'monthlyStoppers',
                totalStoppers: 'totalStoppers'
            }),
            monthlyPerc: function () {
                return percentage(this.monthlyStoppers, 5833,33);
            },
            puppyPerc: function () {
                return percentage(this.totalStoppers, 1400000);
            },
            dogPerc: function () {
                return percentage(this.totalStoppers, 31000000);
            },
            totalPerc: function () {
                return percentage(this.totalStoppers, 32400000)
            }
        }
    }
</script>

<style>
    .progress {
        font-weight: normal;
    }

   .box-card {
       display: -webkit-inline-box;
       margin-right: 10vh;
       margin-left: 10vh;
       text-align: center;
   }

   .box-help {
       display: -webkit-inline-box;
       margin-right: 20vh;
       margin-left: 20vh;
       text-align: center;
   }

    .progress-div {
        text-align: center;
        margin-top: 10vh;
    }

    .boxed-em {
    }
</style>
