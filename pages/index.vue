<template>
    <client-only>
        <div class="flex gap-4 h-[100dvh]">
            <aside class="aside-bar max-w-[350px] flex-1 border px-2 py-3">
                <div class="row">
                    <div class="col-3">
                        <h3>Draggable 1</h3>
                        <draggable class="list-group" :list="list1"
                            :group="{ name: 'people', pull: 'clone', put: false }" @change="log" itemKey="name">
                            <template #item="{ element, index }">
                                <div class="list-group-item p-4 border cursor-move my-2" v-if="element.data">
                                    <button
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
                                                clip-rule="evenodd" />
                                            <path fill-rule="evenodd"
                                                d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
                                                clip-rule="evenodd" />
                                        </svg>

                                    </button>
                                    <highchart :options="element.data" :update="['options.title', 'options.series']" />
                                </div>
                                <div class="list-group-item" v-else>
                                    {{ element.name }}
                                </div>
                            </template>
                        </draggable>
                    </div>
                </div>
            </aside>
            <div class="flex-1">
                <div class="col-3 relative">
                    <h3 class="mb-7">Draggable 2</h3>
                    <draggable
                        :class="{ 'p-10 min-h-48 flex z-10 max-w-80 justify-center items-center border rounded-lg': list2.length == 0 }"
                        class="list-group grid grid-cols-3 gap-3" :list="list2" group="people" @change="log" itemKey="name">
                        <template #item="{ element, index }">
                            <div class="list-group-item p-4" v-if="!element.data">{{ element.name }} {{ index }}</div>
                            <div class="list-group-item p-4 cursor-move" v-else>
                                <highchart :options="element.data" :update="['options.title', 'options.series']" />
                            </div>
                        </template>
                    </draggable>
                    <div class="absolute top-[50%] left-[10%] z-50" v-if="list2.length==0">
                       <div>
                        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd"/>
</svg>
                       </div>


                    </div>
                </div>
            </div>
        </div>
    </client-only>

</template>

<script setup>
import draggable from 'vuedraggable'
const series = [44, 55, 41, 17, 15];


const list1 = ref([
    {
        id: 1, data: {
            chart: {
                type: 'line',
                height: 300
            },
            title: {
                // text: 'example',
                // align: 'left'
                enabled: false,
            },

            subtitle: {
                // text: 'example',
                // align: 'left'
                enabled: false
            },

            yAxis: {
                title: {
                    // text: 'test'
                    enabled: false
                }
            },

            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2020'
                }
            },

            legend: {
                // layout: 'vertical',
                // align: 'right',
                // verticalAlign: 'middle'
                enabled: false
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Installation & Developers',
                data: [
                    43934, 48656, 65165, 81827, 112143, 142383,
                    171533, 165174, 155157, 161454, 154610
                ]
            }, {
                name: 'Manufacturing',
                data: [
                    24916, 37941, 29742, 29851, 32490, 30282,
                    38121, 36885, 33726, 34243, 31050
                ]
            }, {
                name: 'Sales & Distribution',
                data: [
                    11744, 30000, 16005, 19771, 20185, 24377,
                    32147, 30912, 29243, 29213, 25663
                ]
            }, {
                name: 'Operations & Maintenance',
                data: [
                    null, null, null, null, null, null, null,
                    null, 11164, 11218, 10077
                ]
            }, {
                name: 'Other',
                data: [
                    21908, 5548, 8105, 11248, 8989, 11816, 18274,
                    17300, 13053, 11906, 10073
                ]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        }
    },
    {
        id: 2,
        data: {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Historic World Population by Region',
                align: 'left'
            },
            subtitle: {
                text: 'Source: <a ' +
                    'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
                    'target="_blank">Wikipedia.org</a>',
                align: 'left'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe'],
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                },
                gridLineWidth: 0
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    borderRadius: '50%',
                    dataLabels: {
                        enabled: true
                    },
                    groupPadding: 0.1
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1990',
                data: [631, 727, 3202, 721]
            }, {
                name: 'Year 2000',
                data: [814, 841, 3714, 726]
            }, {
                name: 'Year 2018',
                data: [1276, 1007, 4561, 746]
            }]
        }
    }
]);
const list2 = ref([
]);

// const add = function () {
//     this.list.push({ name: "Juan" });
// };
// const replace = function () {
//     this.list = [{ name: "Edgard" }];
// };
// const clone = function (el) {
//     return {
//         name: el.name + " cloned"
//     };
// };
const log = function (evt) {
    window.console.log(evt);
};
</script>

<style lang="scss"></style>