import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';
import log from '../utils/logger';

function swaggerDocs(app: Express, port: number, liveServerUrl: string) {
    const options: swaggerJsdoc.Options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'REST API Docs',
                version,
            },
            servers: [
                {
                    url: `http://localhost:${port}`,
                    description: 'Local server',
                },
                {
                    url: liveServerUrl,
                    description: 'Live server',
                }, 
            ],
        },
        apis: [ './src/routes/*.ts', './src/routes/v1/*.ts', './src/schemas/*.ts' ],
    };
    
    // Generate swagger Spec using options variable.
    const swaggerSpec = swaggerJsdoc(options);

    // Swagger page.
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format.
    app.get('/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    log.info(`Docs available at http://localhost:${port}/docs.`);
}

export default swaggerDocs;
