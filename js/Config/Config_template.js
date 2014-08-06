define(function() {
    Config = function () {
        return {
            uri: {
                Communication: {
                    Email: '{{uri}}'
                }
            },
            
            messages: {
                error: {
                    standard: "Das hat leider nicht geklappt. Probier's doch nochmal etwas später."
                }
            }
        };
    }();
});