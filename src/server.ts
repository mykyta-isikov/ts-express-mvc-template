import swaggerDocs from './utils/swagger';
import log from './utils/logger';

import app from './app';

// Default dev port or container port.
const PORT                   = Number(process.env.PORT) || 8080;
// Port for queries outside the container.
const HOST_PORT              = Number(process.env.HOST_PORT); 
// Defined only in docker-compose.yml file.
const RUNNING_AS_CONTAINER   = process.env.RUNNING_AS_CONTAINER;


app.listen(PORT, () => {
    // Variable points to the port, accessible from outside.
    const externalPort = RUNNING_AS_CONTAINER ? HOST_PORT : PORT;

    log.info(`App is running at http://localhost:${externalPort}.`);

    swaggerDocs(app, externalPort);
    
    if (RUNNING_AS_CONTAINER) {
        log.info(`App is running inside of a container. Container port=${PORT}.`);

    }

});
