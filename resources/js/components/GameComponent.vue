<template>
    <div class="game-board">
        <div class="game-row" v-for="i in 8">
            <template v-for="j in 9">
                <div class="game-legend row-legend" v-if="j === 1">
                    {{ 9 - i }}
                </div>
                <div class="game-col" :class="getBoxColor(i, j)" v-else>

                </div>
            </template>
        </div>
        <div class="game-row">
            <div class="game-legend"></div>
            <div class="game-legend col-legend">A</div>
            <div class="game-legend col-legend">B</div>
            <div class="game-legend col-legend">C</div>
            <div class="game-legend col-legend">D</div>
            <div class="game-legend col-legend">E</div>
            <div class="game-legend col-legend">F</div>
            <div class="game-legend col-legend">G</div>
            <div class="game-legend col-legend">H</div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        mounted() {
        },
        methods: {
            getBoxColor: function (i, j) {
                return (i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1) ? 'bg-black' : 'bg-white'
            }
        }
    }
</script>

<style lang="scss">
.game-board {
    border: 1px solid gray;
}
.game-row {
    display: flex;
}
.game-col {
    display: flex;
    height: 60px;
    width: 60px;
    border: 0.5px solid gray;
}
.game-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 24px;
    border: 0.5px solid gray;
    width: 30px;
    height: 30px;

    &.row-legend {
        width: 30px;
        height: 60px;
    }

    &.col-legend {
        height: 30px;
        width: 60px;
    }
}
.bg-black {
    background-color: black;
}
.bg-white {
    background-color: lightgray;
}
</style>
