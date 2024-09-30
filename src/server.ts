import swaggerDocs from './utils/swagger';
import log from './utils/logger';

import app from './app';

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
    log.info(`App is running at http://localhost:${PORT}.`);

    swaggerDocs(app, PORT);
});
