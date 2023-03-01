export default function (config) {
    "use strict";
    require("./karma.conf")(config);
    config.set({
        preprocessors: {
            "{webapp,webapp/!(test)}/!(mock*).js": ["coverage"]
        },
        coverageReporter: {
            includeAllSources: true,
            reporters: [
                {
                    type: "html",
                    dir: "coverage"
                },
                {
                    type: "text"
                }
            ],
            check: {
                each: {
                    statements: 10,
                        branches: 10,
                        functions: 10,
                        lines: 10
                    }
                }
        },
        reporters: ["progress", "coverage"],
        browsers: ["ChromeHeadless"],
        singleRun: true
        });
};