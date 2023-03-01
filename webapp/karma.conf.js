export default function(config) {
    "use strict";
config.set({
    frameworks: ["ui5"],
    browsers: ["Chrome"],
    singleRun: true,
    browserConsoleLogOptions: {
     level: "error"
    }
    });
};
   