<template>
    <div class="progress">
        <h3>Progress of the plastic stoppers gathering</h3>
        <h5>Monthly progress</h5>
        <el-progress :text-inside="true" :percentage="30" :stroke-width="20" status="text">

        </el-progress>
        <p>
            This month, with your support we have collected 335 of our monthly 7500 plastic stoppers.
        </p>
        <h5>Progress signification</h5>
        <div class="progress-div">
            <div class="box-card">
                <el-progress type="circle" :percentage="50" :stroke-width="12">

                </el-progress><br>
                <em>Help the CBCG to adopt a puppy.</em>
            </div>
            <div class="box-card">
                <el-progress type="circle" :percentage="10" :stroke-width="12">

                </el-progress><br>
                <em>Help the CBCG to train a guide dog.</em>
            </div>
            <div class="box-card">
                <el-progress type="circle" :percentage="5" :stroke-width="12">

                </el-progress><br>
                <em>Help the formation of a guide dog from A to Z.</em>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

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

    .progress-div {
        text-align: center;
    }
</style>
