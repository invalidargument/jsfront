define(function() {
    Config = function () {
        return {
            uri: {
                Communication: {
                    Email: 'http://localhost:8888/rudi-bieller-symfony/Symfony/web/app_dev.php/kontakt'
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