/**
 * Created by kellerme on 2020/2/20
 */
const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                chrome: "64",
                firefox: "60",
                safari: "11.1"
            },
            useBuiltIns:"usage",
            corejs: 3
        }
    ]
]
module.exports = {presets}