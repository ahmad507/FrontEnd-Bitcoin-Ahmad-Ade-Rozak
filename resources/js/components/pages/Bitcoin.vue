<template>
    <div class="__container">
        <h1>BITCOIN PRICE TABLE</h1>
        <div id="crypto-container" v-for="data in allDataBtc" :key="data.code">
            <span>{{ data.symbol }}</span>
            <span class="left">BUY :{{ data.buy}}</span>
            <span class="right">SELL: {{ data.sell}}</span>
            
            
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            blockchain: null
        };
    },
    computed: {
        ...mapState({
            btcPrice: state => state.btc.btc
        }),
        ...mapGetters({
            allDataBtc: "btc/allDataBtc"
        }),
        created() {
            this.getBtcData(["getBtcData"]);
        }
    },
    methods: {
        ...mapActions("btc", ["getBtcData"])
    },
    ...mapMutations({
        blockchain: "btc/setDataBtc"
    })
};
</script>

<style scope>


  div#crypto-container {
    background:white;
    width: 70%;
    margin: 0 auto 4px auto;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
  }

  span.left {
    font-weight: bold;
  }

  span.right {
    float:right;
  }
</style>
